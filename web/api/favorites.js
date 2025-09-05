// web/api/favorites.js  ← まずは疎通だけ（後でプロキシに戻せます）
export const runtime = 'edge';

export default function handler() {
  return new Response(
    JSON.stringify({ ok: true, ping: 'favorites', runtime: 'edge' }),
    { status: 200, headers: { 'content-type': 'application/json' } }
  );
}
