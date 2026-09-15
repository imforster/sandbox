# 0001 — fullstack-agent is an installer, not a framework

**Date:** 2026-09-08
**Status:** accepted

## Context

Ian asked to "evaluate this full stack agent framework and help me understand how to
apply this to build my own agent framework," pointing at `jaredrhod/fullstack-agent`.

## Insight (non-obvious, correction to the framing)

The project is **not an agent framework**. Grounded in its source files
(README, CLAUDE.md, fullstack-agent.md):

- It is a **Claude-Code-only installer wizard**.
- The installer is **prose** (`fullstack-agent.md`), executed by the LLM, not code.
- It **composes four independent single-purpose repos** (memory, voice, face, hands).
- Integration is **filesystem-level**: config-path wiring + a status-file bus.
  No shared library, no API.

"Full stack" = the agent *has* a stack (mind/mouth/face/hands), a naming pun — not
full-stack code generation and not a framework layer.

## Decision

Mission reframed to **option (c): mine reusable composition patterns**, not adopt the
stack and not build a Claude-Code clone. Patterns to evaluate in later lessons:
1. installer-as-spec (prose wizard)
2. phased wizard (collect-once, execute-later)
3. file-based persistent memory
4. config-path wiring / loose coupling by filesystem
5. status-file bus
6. adopt-never-destroy (non-destructive integration)
7. agent-as-mechanic (self-healing via TROUBLESHOOTING.md)

## Zone of proximal development

Ian is a senior polyglot already running agent/skill infrastructure. He does NOT need
"what is an agent" grounding. Start at accurate-model + pattern-judgment level. Lessons
should test *judgment* ("when does this pattern fail?"), not recall.

## Open / to confirm

- MISSION.md is DRAFT. Confirm option (c) is correct vs. (a) build-own-framework or
  (b) actually-adopt-the-stack.
- Component repos not yet read in depth — needed before Lessons 3+ (memory, bus).
- Preferred language for any future architecture sketches: confirm (Go likely).
