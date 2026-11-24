# The Craft

> 90 days to rebuild the habit. A lifetime to explore the craft.

The Craft is a long-term personal practice in computing. It spans computer science, programming, software engineering, system design, operating systems, networking, cybersecurity, infrastructure, and artificial intelligence — explored through daily sessions, deliberate practice, and hands-on experimentation.

The first 90 days exist to rebuild the habit of showing up every morning and doing the work. They are not a curriculum: there is no predetermined sequence, no fixed language, and no finish line at day 90. The structure is designed to continue indefinitely at the same pace the work demands.

## Philosophy

- **Learn by doing.** Understanding is verified by building, breaking, and explaining — not by collecting certificates.
- **Theory matters.** Tools change constantly; the fundamentals underneath them rarely do.
- **No manufactured progress.** Only document what was actually studied, built, or understood.
- **Curiosity sets the order.** The next topic is whatever is most interesting or most useful today.
- **Write things down.** A session that is not recorded will be forgotten; knowledge that is not distilled will stay scattered.

## Areas of Exploration

- **Computer science** — programming, algorithms, data structures, operating systems, databases, networking.
- **Software engineering** — architecture, design patterns, system design, API design, testing.
- **Systems and infrastructure** — Linux, Docker, DevOps, cloud, distributed systems.
- **Cybersecurity** — fundamentals, web security, cryptography, CTF practice.
- **Artificial intelligence** — fundamentals, machine learning, LLMs, AI engineering, agents.
- **Prodigo** — the long-term project: architecture, decision records, technical research.

## Daily Practice

One session per day, roughly one hour, usually in the morning. A session can be reading, coding, debugging, designing, or solving a small problem. The requirement is to show up and practice deliberately.

- Raw session records live in [`sessions/`](sessions/), created from [`sessions/templates/daily-session.md`](sessions/templates/daily-session.md). They are also rendered read-only on the docs site under `/sessions`.
- Knowledge worth keeping is distilled into the documentation in [`content/docs/`](content/docs/).
- External learning material is indexed in the Resources section of the docs.

## Repository Organization

```text
the-craft/
├── content/docs/            # Fumadocs knowledge base (the distilled, reusable material)
├── labs/                    # Executable code — one directory per language or topic
├── sessions/                # Daily session records, grouped by year
└── src/                     # The Fumadocs application itself
```

The separation of concerns is deliberate:

| Directory | Contains |
| --- | --- |
| `content/docs/` | Organized, reusable technical knowledge, plus the resources index. |
| `labs/` | Executable experiments and exercises — code, not prose. |
| `sessions/` | Lightweight daily activity records, rendered read-only under `/sessions`. |
| `src/` | The Fumadocs application that serves both areas, with search across them. |

## Using the Documentation and Labs

- **Documentation** (`content/docs/`) is a personal knowledge base, not a tutorial site. Sections have landing pages that explain their scope; articles are added only when there is something genuine to record. Start at [Getting Started](content/docs/getting-started/index.mdx) inside the docs.
- **Labs** (`labs/`) hold runnable code: small programs, exercises, experiments, and scratch implementations. Each lab is self-contained; notes about what a lab taught belong in the docs, while the code itself stays in `labs/`.

## Running the Documentation Site

The knowledge base and session records are served by a Next.js application built with [Fumadocs](https://fumadocs.dev), managed with pnpm.

```bash
pnpm install
pnpm dev            # local development server
pnpm build          # production build
pnpm lint           # eslint
pnpm types:check    # type generation and tsc
```

The site serves two areas:

- **`/docs`** — the knowledge base: distilled notes, section landing pages, and the resources index.
- **`/sessions`** — the raw session records, grouped by year, rendered exactly as written in `sessions/`.

Both areas are searchable from the same dialog (`⌘ K`): a query returns matching knowledge base pages and matching session notes together. Session pages get their titles from the first heading of the note, so no frontmatter is required to record a session — just copy the template, write, and save.
