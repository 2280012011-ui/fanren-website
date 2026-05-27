export async function onRequest(context: { request: Request; env: Record<string, string> }) {
  const res = await fetch('https://fanren-website.vercel.app/api/views', {
    method: context.request.method,
    headers: context.request.headers,
  });
  const data = await res.json();
  return new Response(JSON.stringify(data), {
    status: res.status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  });
}
