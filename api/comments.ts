import { writeFile, readFile } from 'fs/promises';
import { join } from 'path';

interface Comment { id: string; text: string; time: number; likes: number; }
const DATA_FILE = join('/tmp', 'fanren-comments.json');
const MAX_LEN = 100;

async function load(): Promise<Comment[]> {
  try {
    const raw = await readFile(DATA_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch { return []; }
}
async function save(data: Comment[]) { await writeFile(DATA_FILE, JSON.stringify(data)); }

function genId() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 8); }

export async function GET(req: Request) {
  const url = new URL(req.url);
  const sort = url.searchParams.get('sort') || 'time';
  let comments = await load();
  if (sort === 'likes') comments.sort((a, b) => b.likes - a.likes);
  else comments.sort((a, b) => b.time - a.time);
  return new Response(JSON.stringify({ comments, total: comments.length }), { headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } });
}

export async function POST(req: Request) {
  const body = await req.json();
  const text = (body.text || '').trim().slice(0, MAX_LEN);
  if (!text) return new Response(JSON.stringify({ error: '评论不能为空' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
  const comments = await load();
  const comment: Comment = { id: genId(), text, time: Date.now(), likes: 0 };
  comments.push(comment);
  if (comments.length > 500) comments.splice(0, comments.length - 500);
  await save(comments);
  return new Response(JSON.stringify({ ok: true, comment }), { headers: { 'Content-Type': 'application/json' } });
}

export async function DELETE(req: Request) {
  const url = new URL(req.url);
  const id = url.searchParams.get('id');
  const pw = url.searchParams.get('pw') || req.headers.get('x-admin-pw') || '';
  if (pw !== (process.env.ADMIN_PASSWORD || 'fanren2026')) return new Response(JSON.stringify({ error: '无权限删除' }), { status: 403, headers: { 'Content-Type': 'application/json' } });
  if (!id) return new Response(JSON.stringify({ error: '缺少评论ID' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
  let comments = await load();
  const old = comments.length;
  comments = comments.filter(c => c.id !== id);
  if (comments.length === old) return new Response(JSON.stringify({ error: '未找到' }), { status: 404, headers: { 'Content-Type': 'application/json' } });
  await save(comments);
  return new Response(JSON.stringify({ ok: true }), { headers: { 'Content-Type': 'application/json' } });
}

export async function PATCH(req: Request) {
  const url = new URL(req.url);
  const id = url.searchParams.get('id');
  if (!id) return new Response(JSON.stringify({ error: '缺少评论ID' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
  const comments = await load();
  const c = comments.find(x => x.id === id);
  if (!c) return new Response(JSON.stringify({ error: '未找到' }), { status: 404, headers: { 'Content-Type': 'application/json' } });
  c.likes = (c.likes || 0) + 1;
  await save(comments);
  return new Response(JSON.stringify({ ok: true, likes: c.likes }), { headers: { 'Content-Type': 'application/json' } });
}
