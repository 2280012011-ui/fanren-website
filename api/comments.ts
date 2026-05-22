import { Redis } from '@upstash/redis';

interface Comment { id: string; text: string; time: number; likes: number; }

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL || '',
  token: process.env.UPSTASH_REDIS_REST_TOKEN || '',
});

const KEY = 'fanren:comments';

function genId() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 8); }

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const sort = searchParams.get('sort') || 'time';
  const raw = await redis.get<string>(KEY);
  let comments: Comment[] = raw ? JSON.parse(raw) : [];
  if (sort === 'likes') comments.sort((a, b) => b.likes - a.likes);
  else comments.sort((a, b) => b.time - a.time);
  return Response.json({ comments, total: comments.length });
}

export async function POST(req: Request) {
  const { text } = await req.json();
  const clean = (text || '').trim().slice(0, 100);
  if (!clean) return Response.json({ error: '评论不能为空' }, { status: 400 });
  const raw = await redis.get<string>(KEY);
  const comments: Comment[] = raw ? JSON.parse(raw) : [];
  comments.push({ id: genId(), text: clean, time: Date.now(), likes: 0 });
  if (comments.length > 500) comments.splice(0, comments.length - 500);
  await redis.set(KEY, JSON.stringify(comments));
  return Response.json({ ok: true });
}

export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');
  const pw = searchParams.get('pw') || req.headers.get('x-admin-pw') || '';
  if (pw !== (process.env.ADMIN_PASSWORD || 'fanren2026')) return Response.json({ error: '无权限' }, { status: 403 });
  if (!id) return Response.json({ error: '缺少ID' }, { status: 400 });
  const raw = await redis.get<string>(KEY);
  let comments: Comment[] = raw ? JSON.parse(raw) : [];
  const prev = comments.length;
  comments = comments.filter(c => c.id !== id);
  if (comments.length === prev) return Response.json({ error: '未找到' }, { status: 404 });
  await redis.set(KEY, JSON.stringify(comments));
  return Response.json({ ok: true });
}

export async function PATCH(req: Request) {
  const id = new URL(req.url).searchParams.get('id');
  if (!id) return Response.json({ error: '缺少ID' }, { status: 400 });
  const raw = await redis.get<string>(KEY);
  const comments: Comment[] = raw ? JSON.parse(raw) : [];
  const c = comments.find(x => x.id === id);
  if (!c) return Response.json({ error: '未找到' }, { status: 404 });
  c.likes = (c.likes || 0) + 1;
  await redis.set(KEY, JSON.stringify(comments));
  return Response.json({ ok: true, likes: c.likes });
}
