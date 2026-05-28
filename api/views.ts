const KEY = 'fanren:views';
const RL_PREFIX = 'fanren:rl:view:';
const RL_TTL = 600; // 10 minutes per IP

export async function GET(request: Request) {
  const url = new URL(request.url);
  const reset = url.searchParams.get('reset');

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
  };

  const redisUrl = (process.env.UPSTASH_REDIS_REST_URL || '').replace(/\/$/, '');
  const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN || '';

  if (!redisUrl || !redisToken) {
    return new Response(
      JSON.stringify({ views: 0, error: 'Redis 环境变量未配置' }),
      { status: 200, headers },
    );
  }

  // One-time reset (will be removed after this deployment)
  if (reset === '8800-secret-reset') {
    const res = await fetch(`${redisUrl}/set/${KEY}`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${redisToken}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ value: '8800' }),
    });
    const data = await res.json();
    return new Response(JSON.stringify({ views: 8800, reset: true, redis: data }), {
      status: 200, headers,
    });
  }

  // Get client IP
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
    || request.headers.get('x-real-ip')
    || 'unknown';
  const rlKey = RL_PREFIX + ip;

  try {
    // Check if this IP already counted in the last 10 minutes
    const rlRes = await fetch(`${redisUrl}/get/${rlKey}`, {
      headers: { Authorization: `Bearer ${redisToken}` },
    });

    if (rlRes.ok) {
      const rlData = await rlRes.json();
      if (rlData.result) {
        // IP already counted — return current views without incrementing
        const getRes = await fetch(`${redisUrl}/get/${KEY}`, {
          headers: { Authorization: `Bearer ${redisToken}` },
        });
        const getData = await getRes.json();
        const count = parseInt(getData.result, 10) || 0;
        return new Response(JSON.stringify({ views: count, throttled: true }), {
          status: 200, headers,
        });
      }
    }

    // Set rate limit key for this IP (10 min TTL)
    await fetch(`${redisUrl}/set/${rlKey}`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${redisToken}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ value: '1', ex: RL_TTL }),
    });

    // Increment views
    const incrRes = await fetch(`${redisUrl}/incr/${KEY}`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${redisToken}` },
    });

    if (!incrRes.ok) {
      const text = await incrRes.text();
      throw new Error(`Upstash 返回 ${incrRes.status}: ${text}`);
    }

    const data = await incrRes.json();
    const count = data.result;

    return new Response(JSON.stringify({ views: count }), {
      status: 200, headers,
    });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    return new Response(
      JSON.stringify({ views: 0, error: msg }),
      { status: 200, headers },
    );
  }
}
