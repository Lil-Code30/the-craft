import { sessionsSource, source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';

const docsSearch = createFromSource(source);
const sessionsSearch = createFromSource(sessionsSource);

/**
 * A single search endpoint serving both content areas:
 * the knowledge base (`/docs`) and the session records (`/sessions`).
 */
export async function GET(request: Request) {
  const url = new URL(request.url);
  const query = url.searchParams.get('query');
  if (!query) return Response.json([]);

  const limitParam = url.searchParams.get('limit');
  const limit =
    limitParam !== null && Number.isInteger(Number(limitParam)) ? Number(limitParam) : undefined;
  const options = {
    tag: url.searchParams.get('tag')?.split(','),
    locale: url.searchParams.get('locale'),
    limit,
    mode: url.searchParams.get('mode') === 'vector' ? ('vector' as const) : ('full' as const),
  };

  const [docs, sessions] = await Promise.all([
    docsSearch.search(query, options),
    sessionsSearch.search(query, options),
  ]);

  const results = [...docs, ...sessions];
  return Response.json(limit ? results.slice(0, limit) : results);
}
