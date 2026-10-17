# Mission

## Why Ian is learning this

Ian wants to **evaluate whether Cadence (Go SDK) is the right engine to orchestrate an
agentic research workflow**, and to build enough of a working proof to judge it with
evidence rather than marketing.

The concrete target is his existing project at
`~/Developer/1-Projects/research-assistant-workflow/` — a 7-stage research pipeline
(intent → coordination → execution → evaluation → revision → knowledge → follow-through).

## The real question (the fork in the road)

The existing research workflow uses **Interpretable Context Methodology (ICM)**:
the *folder structure is the orchestration*. Stages are folders, each with a `CONTEXT.md`
contract; stages pass work as plain-text files; a human reviews at every boundary.
It is stateless between runs, plain-text, no long-running process.

Cadence is a different model: **durable execution**. Orchestration is a Go function
that survives process crashes, sleeps for days, retries failed steps automatically, and
resumes exactly where it left off via event-sourced replay. (Source: Cadence docs —
"fault-oblivious stateful workflow"; state recovery via event sourcing.)

So the mission is not "learn Cadence in the abstract." It is:

> **Understand what durable execution buys the research workflow over the ICM folder
> approach, and learn enough Cadence-in-Go to build a durable version of it.**

Every lesson anchors to the 7 stages. The pipeline becomes the workflow Ian learns to
orchestrate in code.

## What success looks like

By the end, Ian can:
1. Explain the Workflow vs. Activity split and why the determinism rule exists
   (grounded in the docs, not vibes).
2. Map his 7 research stages onto Cadence activities, with the workflow function as
   the durable coordinator.
3. Run a Cadence workflow locally in Go — start it, kill the worker mid-run, watch it
   resume.
4. Add a human review gate (signal) and a long wait (durable timer) — the two features
   the ICM approach handles with folders + humans.
5. Decide, with evidence, where Cadence earns its operational cost for *this* workflow
   and where the simpler ICM/folder model is still the right call.
6. **Drive a CLI agent (Claude Code headless or Devin) from inside an activity** — so
   each of the 7 stages is executed by an agent, retried and replay-safe, with the
   model's non-determinism sealed inside the activity. (Added 2026-10-16.)

## The agent-execution dimension (added 2026-10-16)

The 7 stages don't just need orchestration — they need an *executor*. That executor is a
CLI agent. Two shapes, both confirmed against primary docs:

- **Claude Code (headless):** `claude -p "<prompt>" --output-format json` — a synchronous
  subprocess. One blocking activity. (docs.claude.com/en/docs/claude-code/headless)
- **Devin:** `POST /v1/sessions` → `session_id` → poll `GET /sessions/{id}` until terminal.
  Async job. Heartbeating poll activity, or start-activity + durable-timer wait.
  (docs.devin.ai/api-reference/common-flows)

Scope decision (2026-10-16): **Reading A only** — Cadence orchestrates the agents (agent
runs *are* the stage work). Reading B (agents writing the Cadence code) was raised and
set aside; the focus is driving the CLIs as activities.

## Non-goals

- Learning the Java SDK (Go only).
- Standing up production Cadence infra (Cassandra/ES clusters). Local dev server is enough.
- Rewriting the whole research-assistant-workflow. We build a *slice* as proof.
- Choosing Temporal. Ian chose Cadence (2026-09-14); concepts transfer if that changes.

## Mission status

CONFIRMED (2026-09-14) — Ian confirmed: Cadence (not Temporal), Go, greenfield to
durable execution, target = the research-assistant-workflow project. If the goal later
shifts (e.g. adopt Temporal, or abandon durable execution for ICM), update this file and
add a learning record capturing the change.
