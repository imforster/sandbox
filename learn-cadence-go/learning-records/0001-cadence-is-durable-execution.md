# 0001 — Cadence is durable execution, not folder orchestration

**Date:** 2026-09-14
**Status:** accepted

## Context

Ian asked to learn how to use Cadence (cadenceworkflow.io) with Go to "schedule and
control agentic workflows," with the concrete objective of applying it to his existing
project `~/Developer/1-Projects/research-assistant-workflow/`.

Decisions confirmed this session:
- **Cadence**, not Temporal (Ian's explicit choice).
- **Go** SDK (`go.uber.org/cadence`).
- **Greenfield** — new to durable execution / Cadence / Temporal.
- Workspace is a **sibling** in `~/Developer/1-Projects/sandbox/`, modeled on the other
  `learn-*` workspaces.

## Insight (the non-obvious framing)

The research-assistant-workflow already orchestrates — but with **ICM**: the folder
structure *is* the orchestration. Stages are folders + `CONTEXT.md` contracts; work
passes as plain-text files; humans review at each boundary; stateless between runs.

Cadence is a fundamentally different model: **durable execution**. Orchestration is a
Go workflow function that is "fault-oblivious" — its state (locals, threads, timers)
survives worker and service crashes, recovered via **event sourcing / replay**.
(Source: https://cadenceworkflow.io/docs/concepts/workflows)

These are two answers to the same question. So the mission is comparative: learn Cadence
well enough to build a durable slice of the research pipeline, then judge where durable
execution earns its cost vs. the simpler ICM model Ian already has.

## Zone of proximal development

- Senior Go + agent-systems engineer. Do NOT teach Go fundamentals or "what is an agent."
- Genuinely NEW to durable execution — the mental model (determinism, replay, workflow
  vs activity) is the real learning surface. Start there, from scratch, but move fast.
- Quizzes should test judgment (what belongs in a workflow vs an activity), not recall.

## Lesson arc (planned)

1. **Workflow vs Activity** — the core split + why determinism exists. (SHIPPED)
2. Activities in depth — retries, timeouts, the side-effecting half. (SHIPPED)
3. The worker + running Hello World locally in Go (kill it, watch it resume). (SHIPPED)
4. Signals — the human review gate (maps to ICM review boundaries). (SHIPPED)
5. Durable timers + child workflows — long waits, partitioning the 7 stages. (SHIPPED)
6. Hands-on: local server, run a durable slice, crash + resume. (SHIPPED)
7. Synthesis — map the full 7-stage pipeline; decide Cadence vs ICM with evidence. (NEXT)

## Progress (2026-09-14, session 3)

Lessons 0005–0006 shipped. Grounded in Go client Sleep + Child workflows + Get Started.
- Lesson 5: workflow.Sleep (durable, never time.Sleep); ExecuteChildWorkflow +
  ChildWorkflowOptions; the activity-vs-child-vs-standalone decision table (taught as
  "reach for the lightest tool — most stages are activities, not children"); the
  ParentClosePolicy footgun (default Terminate kills children when the parent closes).
- Lesson 6: hands-on. IMPORTANT correction — the official quickstart is now SQLite,
  **no Docker required** (make bins / install-schema-sqlite / cadence-server --zone sqlite
  start / Web UI :8088). My earlier lessons said docker-compose; corrected. Lesson 6 is a
  run-these-real-steps lesson with feedback-to-look-for at each step, ending in the
  crash-and-resume demo and a "build the smallest 2-stage slice" call to action.

Full nav chain (1→6) verified. All prior "empty next-link" bugs fixed as new lessons landed.

## Next session

Either: (a) pair-build the 2-stage durable slice with Ian (real Go, scratch module first),
or (b) Lesson 7 synthesis — map all 7 stages, make the Cadence-vs-ICM call with evidence.

## Open / to confirm

- Local Cadence server setup path (docker-compose) — defer until Lesson 3, concepts first.
- Whether Ian wants the proof built inside research-assistant-workflow or a throwaway
  scratch module first (lean: scratch module, then port).
