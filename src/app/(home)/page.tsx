import Link from 'next/link';
import { buttonVariants } from 'fumadocs-ui/components/ui/button';
import {
  ArrowRight,
  BookOpen,
  Boxes,
  Brain,
  GraduationCap,
  NotebookPen,
  Search,
  Server,
  Shield,
  Workflow,
} from 'lucide-react';

const areas = [
  {
    title: 'Computer Science',
    description: 'Theory and first principles — computation, code, and the systems beneath them.',
    href: '/docs/computer-science',
    icon: GraduationCap,
  },
  {
    title: 'Software Engineering',
    description: 'Building and maintaining software — architecture, design, APIs, testing.',
    href: '/docs/software-engineering',
    icon: Workflow,
  },
  {
    title: 'Systems & Infrastructure',
    description: 'Linux, containers, networking, and cloud — theory as deployed systems.',
    href: '/docs/systems-and-infrastructure',
    icon: Server,
  },
  {
    title: 'Cybersecurity',
    description: 'Fundamentals, web security, cryptography, and CTF practice.',
    href: '/docs/cybersecurity',
    icon: Shield,
  },
  {
    title: 'Artificial Intelligence',
    description: 'From first principles to applied engineering — ML, LLMs, agents.',
    href: '/docs/artificial-intelligence',
    icon: Brain,
  },
  {
    title: 'Prodigo',
    description: 'The long-term project — architecture, decision records, research.',
    href: '/docs/prodigo',
    icon: Boxes,
  },
];

const practice = [
  {
    title: 'Show up',
    description: 'One session a day, roughly an hour. Read, build, debug, design — the requirement is presence, not brilliance.',
    href: '/docs/getting-started/daily-practice',
    link: 'How sessions work',
  },
  {
    title: 'Record',
    description: 'A short note per session — objective, outcome, what broke, what clicked. Written once, never revised.',
    href: '/sessions',
    link: 'Browse the sessions',
  },
  {
    title: 'Distill',
    description: 'When something deserves to last, it moves into the knowledge base — searchable, linked, and honest.',
    href: '/docs/getting-started/principles',
    link: 'Working principles',
  },
];

export default function HomePage() {
  return (
    <div className="flex-1">
      <section className="border-b">
        <div className="mx-auto max-w-(--fd-layout-width) px-6 py-24 text-center sm:py-32">
          <p className="text-sm font-medium tracking-wide text-fd-muted-foreground uppercase">
            A personal engineering practice
          </p>
          <h1 className="mt-4 bg-gradient-to-b from-fd-primary to-fd-primary/40 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl">
            The Craft
          </h1>
          <p className="mt-6 text-lg text-fd-muted-foreground italic">
            90 days to rebuild the habit. A lifetime to explore the craft.
          </p>
          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-fd-muted-foreground">
            Computer science, software engineering, systems, security, and artificial intelligence —
            explored through daily sessions, deliberate practice, and hands-on experimentation.
            No curriculum, no predetermined sequence. Curiosity sets the order.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/docs"
              className={buttonVariants({
                variant: 'primary',
                size: 'sm',
                className: 'gap-2 px-4 py-2.5 text-sm',
              })}
            >
              <BookOpen className="size-4" />
              Open the Knowledge Base
            </Link>
            <Link
              href="/sessions"
              className={buttonVariants({
                variant: 'outline',
                size: 'sm',
                className: 'gap-2 px-4 py-2.5 text-sm',
              })}
            >
              <NotebookPen className="size-4" />
              Browse Sessions
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-(--fd-layout-width) px-6 py-16 sm:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Areas of Exploration</h2>
            <p className="mt-2 text-fd-muted-foreground">
              Sections fill as the subjects are actually explored — nothing is pre-written.
            </p>
          </div>
          <Link
            href="/docs"
            className="inline-flex items-center gap-1 text-sm font-medium text-fd-primary hover:underline"
          >
            All sections
            <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => (
            <Link
              key={area.href}
              href={area.href}
              className="group rounded-xl border bg-fd-card p-5 transition-colors hover:bg-fd-accent/60"
            >
              <area.icon className="size-5 text-fd-primary" />
              <p className="mt-3 font-medium group-hover:text-fd-accent-foreground">{area.title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-fd-muted-foreground">
                {area.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t bg-fd-card/40">
        <div className="mx-auto max-w-(--fd-layout-width) px-6 py-16 sm:py-20">
          <h2 className="text-2xl font-semibold tracking-tight">The Practice</h2>
          <p className="mt-2 text-fd-muted-foreground">
            A simple loop, run daily: show up, record what happened, keep what lasts.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {practice.map((step, i) => (
              <div key={step.title} className="rounded-xl border bg-fd-card p-5">
                <p className="text-xs font-semibold text-fd-primary">{String(i + 1).padStart(2, '0')}</p>
                <p className="mt-2 font-medium">{step.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-fd-muted-foreground">
                  {step.description}
                </p>
                <Link
                  href={step.href}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-fd-primary hover:underline"
                >
                  {step.link}
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            ))}
          </div>
          <p className="mt-8 flex items-center gap-2 text-sm text-fd-muted-foreground">
            <Search className="size-4" />
            Everything is searchable — press <kbd className="rounded border bg-fd-card px-1.5 py-0.5 font-mono text-xs">⌘ K</kbd> from anywhere on the site.
          </p>
        </div>
      </section>

      <footer className="border-t">
        <div className="mx-auto flex max-w-(--fd-layout-width) flex-wrap items-center justify-between gap-3 px-6 py-8 text-sm text-fd-muted-foreground">
          <span>The Craft — no finish line, no comparison.</span>
          <Link
            href="/docs/getting-started"
            className="inline-flex items-center gap-1 font-medium hover:text-fd-primary"
          >
            Getting started
            <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </footer>
    </div>
  );
}
