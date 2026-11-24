# Contributing to The Craft

The Craft has two independent types of contributions:

| | Sessions | Knowledge |
| --- | --- | --- |
| Purpose | Practice — records of individual work sessions | Understanding — permanent, reusable documentation |
| Location | `sessions/<year>/` | `content/docs/` |
| Branch | `session/<number>-<subject>` | `knowledge/<subject>` |
| PR title | `Session #<number>: <Subject> — <Description>` | `Knowledge: <Subject>` |
| Commits | `<type>(<scope>): <description>` | `docs(<scope>): <description>` |
| PR template | `session.md` | `knowledge.md` |

**Sessions are about practice. Knowledge is about maintaining reusable understanding.**

They are separate contributions, not stages of the same workflow:

- A session does not need to produce documentation.
- A knowledge contribution does not need to originate from a session.
- Each is opened, reviewed, and closed on its own merits.

When opening a pull request, GitHub offers both templates — pick the one that matches the contribution. If a session happens to uncover something worth documenting, that becomes a separate knowledge pull request.

## 1. Session workflow

Every programming session is represented by its own pull request. It records what was actually done — regardless of whether it produced a new implementation, an experiment, an exercise, or just a better understanding.

### Branch

```text
session/<number>-<subject>
```

Examples: `session/001-java-hashmap`, `session/002-c-pointers`, `session/003-docker-networking`.

### PR title

```text
Session #<number>: <Subject> — <Description>
```

Examples:

- `Session #001: Java — Explore HashMap internals`
- `Session #002: C — Experiment with pointers`

### Commits

Meaningful commits following `<type>(<scope>): <description>`:

```text
learn(java): explore hashmap internals
feat(c): implement linked list
test(python): practice recursion
docs(session): record session observations
```

### What goes in the PR

- The session note: `sessions/<year>/YYYY-MM-DD-<short-topic>.md`, written from the [session template](sessions/templates/daily-session.md). Keep it lightweight.
- Any code produced during the session, under the matching `labs/` directory.

Nothing else is required. A session PR is complete when it records the session.

## 2. Knowledge workflow

Knowledge contributions are independent documentation changes. They happen whenever there is a real reason to create, expand, correct, or reorganize technical documentation.

Examples: document Java HashMap internals, explain Docker networking, expand notes on database indexing, correct an existing explanation, add tested code examples to a technical page.

### Branch

```text
knowledge/<subject>
```

Examples: `knowledge/java-hashmap`, `knowledge/docker-networking`, `knowledge/database-indexes`.

### PR title

```text
Knowledge: <Subject>
```

Examples:

- `Knowledge: Java HashMap internals`
- `Knowledge: Docker networking fundamentals`

### Commits

```text
docs(java): document hashmap internals
docs(docker): explain container networking
```

### What goes in the PR

- Changes to pages under `content/docs/`, with frontmatter and `meta.json` following the existing Fumadocs conventions.
- No session references are required — and none should be invented.

## Local verification

Before opening a PR that touches the documentation or the application:

```bash
pnpm lint
pnpm types:check
pnpm build
```

## What this repository does not have

- No automation linking sessions to documentation.
- No requirement that a session produce documentation.
- No requirement that documentation cite a session.
- No CI workflows beyond the existing setup.

The two workflows stay independent on purpose.
