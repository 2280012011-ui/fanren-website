interface Comment { id: string; name: string; text: string; time: number; likes: number; }

const KEY = 'fanren:comments';

function redisUrl(path: string): string {
  const base = (process.env.UPSTASH_REDIS_REST_URL || '').replace(/\/$/, '');
  return `${base}${path}`;
}

const auth = () => (process.env.UPSTASH_REDIS_REST_TOKEN || '');

function genId() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 8); }

async function getComments(): Promise<Comment[]> {
  const res = await fetch(redisUrl(`/get/${KEY}`), {
    headers: { Authorization: `Bearer ${auth()}` },
  });
  if (!res.ok) return [];
  const data = await res.json();
  const raw = data.result;
  return raw ? JSON.parse(raw as string) : [];
}

async function setComments(comments: Comment[]): Promise<void> {
  await fetch(redisUrl(`/set/${KEY}`), {
    method: 'POST',
    headers: { Authorization: `Bearer ${auth()}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(comments),
  });
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const sort = searchParams.get('sort') || 'time';
    let comments = await getComments();
    if (sort === 'likes') comments.sort((a, b) => b.likes - a.likes);
    else comments.sort((a, b) => b.time - a.time);
    return Response.json({ comments, total: comments.length });
  } catch (err) {
    return Response.json({ comments: [], total: 0, error: String(err) });
  }
}

export async function POST(req: Request) {
  try {
    const { text, name } = await req.json();
    const cleanText = (text || '').trim().slice(0, 100);
    if (!cleanText) return Response.json({ error: '评论不能为空' }, { status: 400 });
    const cleanName = (name || '').trim().slice(0, 8) || '无名道友';
    const comments = await getComments();
    comments.push({ id: genId(), name: cleanName, text: cleanText, time: Date.now(), likes: 0 });
    if (comments.length > 500) comments.splice(0, comments.length - 500);
    await setComments(comments);
    return Response.json({ ok: true });
  } catch (err) {
    return Response.json({ error: String(err) }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    const pw = searchParams.get('pw') || req.headers.get('x-admin-pw') || '';
    if (pw !== (process.env.ADMIN_PASSWORD || 'fanren2026')) return Response.json({ error: '无权限' }, { status: 403 });
    if (!id) return Response.json({ error: '缺少ID' }, { status: 400 });
    let comments = await getComments();
    const prev = comments.length;
    comments = comments.filter(c => c.id !== id);
    if (comments.length === prev) return Response.json({ error: '未找到' }, { status: 404 });
    await setComments(comments);
    return Response.json({ ok: true });
  } catch (err) {
    return Response.json({ error: String(err) }, { status: 500 });
  }
}

export async function PATCH(req: Request) {
  try {
    const id = new URL(req.url).searchParams.get('id');
    if (!id) return Response.json({ error: '缺少ID' }, { status: 400 });
    const comments = await getComments();
    const c = comments.find(x => x.id === id);
    if (!c) return Response.json({ error: '未找到' }, { status: 404 });
    c.likes = (c.likes || 0) + 1;
    await setComments(comments);
    return Response.json({ ok: true, likes: c.likes });
  } catch (err) {
    return Response.json({ error: String(err) }, { status: 500 });
  }
}
