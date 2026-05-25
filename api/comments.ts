interface Comment { id: string; name: string; text: string; time: number; likes: number; }

const KEY = 'fanren:comments';

function redisUrl(path: string): string {
  const base = (process.env.UPSTASH_REDIS_REST_URL || '').replace(/\/$/, '');
  return `${base}${path}`;
}

const auth = () => (process.env.UPSTASH_REDIS_REST_TOKEN || '');

function genId() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 8); }

// Extract client IP from request headers
function getIP(req: Request): string {
  const fwd = req.headers.get('x-forwarded-for') || '';
  const real = req.headers.get('x-real-ip') || '';
  return fwd.split(',')[0].trim() || real || 'unknown';
}

// Rate limit checker: returns true if limit exceeded
async function rateLimit(ip: string, action: string, max: number, windowSec: number): Promise<{ ok: boolean; count: number }> {
  const rk = `fanren:rl:${action}:${ip}`;
  const h = { Authorization: `Bearer ${auth()}` };
  // INCR
  const incr = await fetch(redisUrl(`/incr/${rk}`), { method: 'POST', headers: h });
  if (!incr.ok) return { ok: true, count: 0 }; // Redis down, allow
  const data = await incr.json();
  const count = data.result as number;
  // Set expiry on first hit
  if (count === 1) {
    await fetch(redisUrl(`/expire/${rk}/${windowSec}`), { method: 'POST', headers: h }).catch(() => {});
  }
  return { ok: count <= max, count };
}

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
    const page = Math.max(1, parseInt(searchParams.get('page') || '1'));
    const pageSize = Math.min(50, Math.max(5, parseInt(searchParams.get('pageSize') || '10')));
    let comments = await getComments();
    if (sort === 'likes') comments.sort((a, b) => b.likes - a.likes);
    else comments.sort((a, b) => b.time - a.time);
    const total = comments.length;
    const totalPages = Math.ceil(total / pageSize);
    const start = (page - 1) * pageSize;
    const paged = comments.slice(start, start + pageSize);
    return Response.json({ comments: paged, total, totalPages, page, pageSize });
  } catch (err) {
    return Response.json({ comments: [], total: 0, totalPages: 0, error: String(err) });
  }
}

export async function POST(req: Request) {
  try {
    const ip = getIP(req);
    const rl = await rateLimit(ip, 'comment', 3, 60);
    if (!rl.ok) {
      return Response.json({ error: `发送太快，每分钟限3条（已用${rl.count}次）` }, { status: 429 });
    }

    const { text, name } = await req.json();
    const cleanText = (text || '').trim().slice(0, 100);
    if (!cleanText) return Response.json({ error: '评论不能为空' }, { status: 400 });
    const cleanName = (name || '').trim().slice(0, 8) || '无名道友';
    const comments = await getComments();
    comments.push({ id: genId(), name: cleanName, text: cleanText, time: Date.now(), likes: 0 });
    if (comments.length > 2000) comments.splice(0, comments.length - 2000);
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
    const ip = getIP(req);
    const rl = await rateLimit(ip, 'like', 15, 60);
    if (!rl.ok) {
      return Response.json({ error: `操作太快，每分钟限15次点赞` }, { status: 429 });
    }

    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    const action = searchParams.get('action') || 'like';
    if (!id) return Response.json({ error: '缺少ID' }, { status: 400 });
    const comments = await getComments();
    const c = comments.find(x => x.id === id);
    if (!c) return Response.json({ error: '未找到' }, { status: 404 });
    c.likes = (c.likes || 0) + (action === 'unlike' ? -1 : 1);
    if (c.likes < 0) c.likes = 0;
    await setComments(comments);
    return Response.json({ ok: true, likes: c.likes });
  } catch (err) {
    return Response.json({ error: String(err) }, { status: 500 });
  }
}
