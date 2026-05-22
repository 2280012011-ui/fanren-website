import { kv } from '@vercel/kv';

interface Comment {
  id: string;
  text: string;
  time: number;
  likes: number;
}

const KEY = 'fanren-comments';
const MAX_LEN = 100;

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const sort = url.searchParams.get('sort') || 'time'; // 'time' or 'likes'

  const raw = await kv.get<string>(KEY);
  const comments: Comment[] = raw ? JSON.parse(raw) : [];

  if (sort === 'likes') {
    comments.sort((a, b) => b.likes - a.likes);
  } else {
    comments.sort((a, b) => b.time - a.time);
  }

  return new Response(JSON.stringify({ comments, total: comments.length }), {
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST(req: Request) {
  const body = await req.json();
  const text = (body.text || '').trim().slice(0, MAX_LEN);

  if (!text) {
    return new Response(JSON.stringify({ error: '评论不能为空' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
  }

  const raw = await kv.get<string>(KEY);
  const comments: Comment[] = raw ? JSON.parse(raw) : [];

  const comment: Comment = { id: generateId(), text, time: Date.now(), likes: 0 };
  comments.push(comment);

  // Keep max 500 comments
  if (comments.length > 500) comments.splice(0, comments.length - 500);

  await kv.set(KEY, JSON.stringify(comments));

  return new Response(JSON.stringify({ ok: true, comment }), {
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function DELETE(req: Request) {
  const url = new URL(req.url);
  const id = url.searchParams.get('id');
  const pw = url.searchParams.get('pw') || req.headers.get('x-admin-pw') || '';

  if (pw !== (process.env.ADMIN_PASSWORD || 'fanren2026')) {
    return new Response(JSON.stringify({ error: '无权限删除' }), { status: 403, headers: { 'Content-Type': 'application/json' } });
  }

  if (!id) {
    return new Response(JSON.stringify({ error: '缺少评论ID' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
  }

  const raw = await kv.get<string>(KEY);
  let comments: Comment[] = raw ? JSON.parse(raw) : [];
  const oldLen = comments.length;
  comments = comments.filter(c => c.id !== id);

  if (comments.length === oldLen) {
    return new Response(JSON.stringify({ error: '未找到该评论' }), { status: 404, headers: { 'Content-Type': 'application/json' } });
  }

  await kv.set(KEY, JSON.stringify(comments));
  return new Response(JSON.stringify({ ok: true }), { headers: { 'Content-Type': 'application/json' } });
}

// Like
export async function PATCH(req: Request) {
  const url = new URL(req.url);
  const id = url.searchParams.get('id');

  if (!id) {
    return new Response(JSON.stringify({ error: '缺少评论ID' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
  }

  const raw = await kv.get<string>(KEY);
  const comments: Comment[] = raw ? JSON.parse(raw) : [];
  const c = comments.find(x => x.id === id);
  if (!c) {
    return new Response(JSON.stringify({ error: '未找到该评论' }), { status: 404, headers: { 'Content-Type': 'application/json' } });
  }
  c.likes = (c.likes || 0) + 1;
  await kv.set(KEY, JSON.stringify(comments));
  return new Response(JSON.stringify({ ok: true, likes: c.likes }), { headers: { 'Content-Type': 'application/json' } });
}
