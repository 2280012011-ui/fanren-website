export async function onRequest(context: { request: Request; env: Record<string, string> }) {
  const url = new URL(context.request.url);
  const targetUrl = 'https://fanren-website.vercel.app' + url.pathname + url.search;

  const res = await fetch(targetUrl, {
    method: context.request.method,
    headers: {
      'x-forwarded-for': context.request.headers.get('x-forwarded-for') || context.request.headers.get('cf-connecting-ip') || '',
      'x-real-ip': context.request.headers.get('x-real-ip') || context.request.headers.get('cf-connecting-ip') || '',
    },
  });
  const data = await res.json();
  return new Response(JSON.stringify(data), {
    status: res.status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  });
}
