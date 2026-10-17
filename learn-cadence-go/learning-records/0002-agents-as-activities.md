# 0002 — The stage executor is a CLI agent (Claude/Devin), run as an activity

**Date:** 2026-10-16
**Status:** accepted

## Context

Ian returned to the workspace and added a new requirement: the research pipeline should
be driven by **CLI coding agents** — Claude Code and/or Devin. On questioning, two
readings surfaced:

- **A** — Cadence orchestrates the agents: each stage's work *is* an agent invocation.
- **B** — The agents write the Cadence Go code for Ian (prompting them to produce correct
  durable-execution code).

Ian said "both" first, then narrowed: **"go with A and ensure we can drive devin or
claude clis."** So the confirmed scope is Reading A. Reading B is set aside (not deleted —
it may return as a later lesson on prompting agents to avoid determinism footguns).

## Insight (the non-obvious framing)

An agent call is the *canonical* thing that must live in an activity, never in workflow
code. It is non-deterministic (same prompt → different output), slow, networked, and
costs money — every property that bans code from a deterministic workflow. This makes the
new requirement a natural payoff of Lessons 1–2 rather than new theory. The teaching move
is: "you already know where this goes; here's the shape of the two specific agents."

The real new knowledge is the **sync-vs-async split** between the two CLIs, verified
against primary docs this session:

- **Claude Code headless** — `claude -p "<prompt>" --output-format json`. Synchronous
  subprocess: blocks, writes stdout, exits (0 ok / non-zero fail). → one blocking
  activity. `--bare` recommended for worker reproducibility.
  (docs.claude.com/en/docs/claude-code/headless)
- **Devin** — `POST /v1/sessions` → `{session_id, status}`; poll `GET /sessions/{id}`
  until terminal (exit/error/suspended). Async job. → either a heartbeating poll activity
  (Option 1, short runs) or a start-activity + `workflow.Sleep` wait loop (Option 2, long
  runs — frees the worker). (docs.devin.ai/api-reference/common-flows)

Idempotency (Lesson 2) bites harder here because retries cost money and can double-commit.
Defenses: stable run ID from `workflow.GetInfo` into the prompt/branch; heartbeat the
Devin `session_id` so a retry re-attaches instead of creating a second paid session.

## Zone of proximal development

- Ian has Lessons 1–6: workflow/activity split, retries, idempotency, heartbeats, signals,
  timers, child workflows, local run + crash/resume. Lesson 7 sits exactly on top — it
  reuses all of that and only adds the two agent surfaces. Correctly in his ZPD.
- Do NOT re-teach activities/retries. DO teach the two CLI shapes and the cost/idempotency
  sharpening specific to paid agent calls.

## What shipped this session

- **Lesson 0007 — Agents as activities** (Claude blocking activity + Devin create-then-poll,
  both Options, idempotency/cost traps, mapping onto the 7 stages). Grounded in the two
  verified primary docs with inline citations.
- MISSION.md: added success criterion 6 + an "agent-execution dimension" section recording
  the A-only scope decision.
- RESOURCES.md: added Claude headless + Devin Common Flows + Devin v3 create-session.
- Glossary: new "Agents as activities" section (agent activity, headless mode, bare mode,
  create-then-poll, session polling).
- index.html: new "Agents" section with the Lesson 7 card; footer now 7 lessons / ~67 min.
- Lesson 6 next-link chained 6 → 7 (was empty).

## Next session

Either: (a) pair-build the real 2-stage durable slice — one Claude activity, one Devin
activity — against research-assistant-workflow (scratch module first, per LR 0001), or
(b) Lesson 8 synthesis — map all 7 stages, make the Cadence-vs-ICM call with evidence.

## Open / to confirm

- Which stages are Claude (cheap/fast, blocking) vs Devin (heavy/long, async)? Current
  lean in the lesson: intent/evaluation = Claude; execution = Devin. Confirm with Ian
  against the actual stage contracts in research-assistant-workflow.
- Reading B (agents authoring the Cadence code) parked — revisit if Ian wants it.