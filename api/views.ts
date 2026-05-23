const KEY = 'fanren:views';

export async function GET() {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
  };

  try {
    const { Redis } = await import('@upstash/redis');

    const redis = new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL || '',
      token: process.env.UPSTASH_REDIS_REST_TOKEN || '',
    });

    const count = await redis.incr(KEY);

    console.log(`[views] 浏览量 +1，当前: ${count}`);

    return new Response(JSON.stringify({ views: count }), {
      status: 200,
      headers,
    });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error('[views] 计数失败:', msg);

    // 判断是否是 Redis 未配置
    if (msg.includes('url is empty') || msg.includes('invalid url')) {
      return new Response(
        JSON.stringify({ views: 0, error: 'Redis 未配置，请在 Vercel 设置环境变量' }),
        { status: 200, headers },
      );
    }

    return new Response(
      JSON.stringify({ views: 0, error: msg }),
      { status: 200, headers },
    );
  }
}
