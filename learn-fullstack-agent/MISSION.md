# Mission

## Why Ian is learning this

Ian wants to **evaluate the `jaredrhod/fullstack-agent` project and extract reusable
architecture patterns** he can apply to build his own composable agent system.

He is already deep in agent/skill infrastructure (Kiro skills, AIOS, custom agents).
He is a polyglot (Go preferred), AWS-native, and simplicity-first. He does not want
a Claude-Code "Jarvis" clone. He wants the *transferable ideas*.

## The real target (grounded in source, not the marketing)

`fullstack-agent` is **not an agent framework**. It is:

1. A **Claude-Code-only installer wizard** (`fullstack-agent.md` is the wizard spec).
2. A **glue/assembly project** that composes four independent single-purpose repos:
   - `ai-memory-vault` — plain-text file memory ("mind")
   - `backtalk` — push-to-talk voice I/O ("mouth")
   - `ai-visualizer` — browser visualizer faces ("face")
   - `barehands` — webcam hand tracking ("hands")

The value for Ian is in **how it composes**, not what it builds:
- File-based persistent memory as a first-class architecture choice
- Loosely-coupled optional components wired only by config paths
- A phased, conversational installer that collects answers once, then executes
- "Adopt, never destroy" — non-destructive integration with pre-existing state
- Self-healing: every component ships a TROUBLESHOOTING.md the agent reads itself
- A status-file "bus" between components (voice writes notes, face reads them)

## What success looks like

By the end, Ian can:
1. Articulate the fullstack-agent architecture accurately (no marketing haze).
2. Name each composition pattern and judge where it applies to his own systems.
3. Decide, with evidence, which patterns to adopt for his own agent work and which to reject.
4. Sketch a minimal, composable agent architecture using the good patterns —
   AWS-native and Go-friendly where it matters.

## Non-goals

- Installing or running Jared's Jarvis stack.
- Building a Claude-Code-specific system.
- Voice/face/hands as features (only as case studies in composition).

## Mission status

CONFIRMED (2026-09-08) — Ian confirmed mining-for-patterns. If the real goal later shifts
(e.g. actually adopt the stack, or build a from-scratch framework), update this file and
add a learning record capturing the change.
