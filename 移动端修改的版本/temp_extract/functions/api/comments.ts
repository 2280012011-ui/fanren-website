export async function onRequest(context: { request: Request; env: Record<string, string> }) {
  const url = new URL(context.request.url);
  const target = 'https://fanren-website.vercel.app/api/comments' + url.search;

  const init: RequestInit = {
    method: context.request.method,
    headers: context.request.headers,
  };

  if (context.request.method !== 'GET' && context.request.method !== 'DELETE') {
    init.body = await context.request.text();
  }

  const res = await fetch(target, init);
  const data = await res.text();

  return new Response(data, {
    status: res.status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  });
}
