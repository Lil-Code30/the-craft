# Sessions

Raw, lightweight records of daily practice — one file per session.

## Structure

```text
sessions/
├── templates/
│   └── daily-session.md    # the template every session starts from
└── 2026/                   # one directory per year
```

## Conventions

- **One file per session**, named `YYYY-MM-DD-<short-topic>.md` (for example `2026-11-24-bash-job-control.md`).
- **Start from the template**: copy `templates/daily-session.md` and fill it in. Bullet points are fine.
- **Keep it light.** The session is the work; the note is just its trace. Do not spend the hour writing a report.
- **Never revise a session note.** It is a log, not a document. Corrections and deeper understanding are distilled into the knowledge base in `content/docs/` and linked from the session.
- **Give every note a single H1** — on the docs site it becomes the page title and makes the note findable in search.

## On the docs site

These notes are rendered read-only by the Fumadocs application under `/sessions`, grouped by year. The site is a viewer for them — files are written here, never on the site.

## Relationship to the rest of the repository

| Directory | Role |
| --- | --- |
| `sessions/` | What happened on a given day (raw). |
| `content/docs/` | What is actually known now (distilled). |
