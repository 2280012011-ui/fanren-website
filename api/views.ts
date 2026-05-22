import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL || '',
  token: process.env.UPSTASH_REDIS_REST_TOKEN || '',
});

const KEY = 'fanren:views';

export async function GET() {
  const count = await redis.incr(KEY);
  return Response.json({ views: count });
}
