import { docsLlms, sessionsLlms } from '@/lib/source';

export const revalidate = false;
// other paths are 404s, never cached responses
export const dynamicParams = false;

export async function GET(_req: Request, { params }: RouteContext<'/llms.mdx/[...path]'>) {
  const { path } = await params;
  const routePath = `/${path.join('/')}`;

  return (
    (await docsLlms.serve(routePath)) ??
    (await sessionsLlms.serve(routePath)) ??
    new Response(null, { status: 404 })
  );
}

export async function generateStaticParams() {
  const params: { path: string[] }[] = [];
  for (const file of [...(await docsLlms.files()), ...(await sessionsLlms.files())]) {
    // `/llms.txt` and `/llms-full.txt` have their own routes
    if (/^\/llms(-full)?\.txt$/.test(file)) continue;
    params.push({ path: decodeURI(file).slice(1).split('/') });
  }
  return params;
}
