import { llms, loader } from 'fumadocs-core/source';
import { lucideIconsPlugin } from 'fumadocs-core/source/lucide-icons';
import { docsRoute, sessionsRoute } from './shared';
import { defineCollections, defineDocs } from 'fumadocs-mdx/macro';
import { metaSchema, pageSchema } from 'fumadocs-core/source/schema';

const docs = defineDocs({
  dir: 'content/docs',
  docs: {
    schema: pageSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

/**
 * Session notes are intentionally plain Markdown with no frontmatter
 * (see `sessions/templates/daily-session.md`). The page title is derived
 * from the first H1 heading, falling back to the file name.
 *
 * The schema is a hand-rolled Standard Schema validator instead of a Zod
 * schema, so no extra dependency is needed for this optional frontmatter.
 */
interface SessionPageData {
  title: string;
  description?: string;
  full?: boolean;
}

type SessionSchema = {
  '~standard': {
    version: 1;
    vendor: string;
    types: { input: unknown; output: SessionPageData };
    validate: (value: unknown) => { value: SessionPageData };
  };
};

const sessions = defineCollections({
  type: 'doc',
  dir: 'sessions',
  postprocess: {
    includeProcessedMarkdown: true,
  },
  schema: ({ path, source }): SessionSchema => ({
    '~standard': {
      version: 1,
      vendor: 'the-craft',
      types: undefined as unknown as { input: unknown; output: SessionPageData },
      validate(value: unknown) {
        const frontmatter =
          typeof value === 'object' && value !== null ? (value as Record<string, unknown>) : {};

        const page: SessionPageData = {
          title:
            (typeof frontmatter.title === 'string' ? frontmatter.title.trim() : '') ||
            /^#\s+(.+)$/m.exec(source)?.[1]?.trim() ||
            path.split('/').pop()?.replace(/\.(md|mdx)$/, '') ||
            'Session',
        };

        if (typeof frontmatter.description === 'string') page.description = frontmatter.description;
        if (frontmatter.full === true) page.full = true;

        return { value: page };
      },
    },
  }),
});

// See https://fumadocs.dev/docs/headless/source-api for more info
export const source = loader({
  baseUrl: docsRoute,
  source: docs.toFumadocsSource(),
  plugins: [lucideIconsPlugin()],
});

export const sessionsSource = loader({
  baseUrl: sessionsRoute,
  source: sessions.toFumadocsSource(),
  plugins: [lucideIconsPlugin()],
});

export const docsLlms = llms(source, {
  renderPage: async (page) => `# ${page.data.title} (${page.url})

${await page.data.getText('processed')}`,
});

export const sessionsLlms = llms(sessionsSource, {
  renderPage: async (page) => `# ${page.data.title} (${page.url})

${await page.data.getText('processed')}`,
});
