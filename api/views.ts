const KEY = 'fanren:views';

export async function GET() {
  try {
    const { Redis } = await import('@upstash/redis');

    const redis = new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL || '',
      token: process.env.UPSTASH_REDIS_REST_TOKEN || '',
    });

    const count = await redis.incr(KEY);
    return new Response(JSON.stringify({ views: count }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch {
    // Redis not configured or failed — return a fallback
    return new Response(JSON.stringify({ views: 0 }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
