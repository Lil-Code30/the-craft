# Labs

Executable code — the hands-on half of The Craft.

This directory holds programs, exercises, experiments, and scratch implementations. Prose belongs in the knowledge base (`content/docs/`); code belongs here.

## Structure

One directory per language or topic:

```text
labs/
├── c/  cpp/  java/  python/  javascript/  typescript/  csharp/   # languages
├── algorithms/  data-structures/                                   # CS practice
├── linux/  networking/  docker/  cybersecurity/                     # systems practice
└── ai/                                                             # AI experiments
```

## Conventions

- **Each lab is self-contained** — its own files, and a short `README.md` when run instructions are not obvious. Naming: `kebab-case`, prefixed or grouped by topic when a directory grows (for example `c/networking/raw-sockets/`).
- **Executable, not archival.** A lab should still run, or be explicitly marked as finished with its conclusions written down.
- **The lesson may go to the docs.** When a lab teaches something durable, writing it up can become a separate knowledge contribution — never a requirement of the lab itself.
- **New topics earn their folder.** Add a directory when there is code to put in it — the existing folders are reserved, not a checklist.
