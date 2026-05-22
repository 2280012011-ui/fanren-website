import { put, list, del as blobDel } from '@vercel/blob';

interface Comment { id: string; text: string; time: number; likes: number; }

function genId() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 8); }

async function load(): Promise<Comment[]> {
  const { blobs } = await list({ prefix: 'comment-' });
  const data: Comment[] = [];
  for (const b of blobs) {
    try {
      const res = await fetch(b.url);
      const c: Comment = await res.json();
      data.push(c);
    } catch {}
  }
  return data;
}

async function save(c: Comment) {
  const json = JSON.stringify(c);
  await put(`comment-${c.id}.json`, json, { access: 'public', contentType: 'application/json' });
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const sort = searchParams.get('sort') || 'time';
  let comments = await load();
  if (sort === 'likes') comments.sort((a, b) => b.likes - a.likes);
  else comments.sort((a, b) => b.time - a.time);
  return Response.json({ comments, total: comments.length });
}

export async function POST(req: Request) {
  const { text } = await req.json();
  const clean = (text || '').trim().slice(0, 100);
  if (!clean) return Response.json({ error: '评论不能为空' }, { status: 400 });
  const c: Comment = { id: genId(), text: clean, time: Date.now(), likes: 0 };
  await save(c);
  return Response.json({ ok: true });
}

export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');
  const pw = searchParams.get('pw') || req.headers.get('x-admin-pw') || '';
  if (pw !== (process.env.ADMIN_PASSWORD || 'fanren2026')) return Response.json({ error: '无权限' }, { status: 403 });
  if (!id) return Response.json({ error: '缺少ID' }, { status: 400 });
  await blobDel(`comment-${id}.json`);
  return Response.json({ ok: true });
}

export async function PATCH(req: Request) {
  const id = new URL(req.url).searchParams.get('id');
  if (!id) return Response.json({ error: '缺少ID' }, { status: 400 });
  const comments = await load();
  const c = comments.find(x => x.id === id);
  if (!c) return Response.json({ error: '未找到' }, { status: 404 });
  c.likes = (c.likes || 0) + 1;
  await save(c);
  return Response.json({ ok: true, likes: c.likes });
}
