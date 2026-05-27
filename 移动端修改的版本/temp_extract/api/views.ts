const KEY = 'fanren:views';

export async function GET() {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
  };

  const redisUrl = (process.env.UPSTASH_REDIS_REST_URL || '').replace(/\/$/, '');
  const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN || '';

  console.log('[views] URL configured:', !!redisUrl, 'Token configured:', !!redisToken);

  if (!redisUrl || !redisToken) {
    return new Response(
      JSON.stringify({ views: 0, error: 'Redis 环境变量未配置' }),
      { status: 200, headers },
    );
  }

  try {
    // 直接用 Upstash REST API，跳过 SDK
    const res = await fetch(`${redisUrl}/incr/${KEY}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${redisToken}`,
      },
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Upstash 返回 ${res.status}: ${text}`);
    }

    const data = await res.json();
    const count = data.result;

    console.log(`[views] 浏览量 +1，当前: ${count}`);

    return new Response(JSON.stringify({ views: count }), {
      status: 200,
      headers,
    });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error('[views] 请求失败:', msg);
    return new Response(
      JSON.stringify({ views: 0, error: msg }),
      { status: 200, headers },
    );
  }
}
