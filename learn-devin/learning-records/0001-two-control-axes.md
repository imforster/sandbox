# 0001 — Devin's two control axes

- **Date:** 2026-09-07
- **Lesson:** [lessons/0001-two-control-axes.html](../lessons/0001-two-control-axes.html)
- **Status:** learned (pending Ian's quiz confirmation)

## What was learned

Devin's autonomy is two orthogonal dials, not one: **agent mode** (Ask / Plan / Agent —
what Devin may do) and **permission mode** (Normal / Accept Edits / Smart / Bypass /
Autonomous — how much it asks before acting). Recommended flow: Ask → Plan → Agent, living
mostly in Accept Edits. Bypass = no isolation; Autonomous = sandboxed unattended execution.

## Evidence

Two retrieval quizzes in the lesson (pair the right agent+permission mode to a goal). Awaiting
Ian's completion to confirm it landed.

## Zone of proximal development

With the control model in place, Ian is ready for **task scoping** — the 3-hour rule, clear
success criteria, @ mentions for context, and when to split work into parallel sessions.
After that: repo onboarding (index + AGENTS.md + knowledge), then reviewing Devin's output,
then subagents / fleet orchestration (ties to his agents-at-scale background).

## Open threads

- Ian's actual project stack still unknown — lessons stay tool-general until he shares it.
- Solo-first assumed; fleet/subagent orchestration deferred to a later lesson.
- Smart mode may not be enabled on all accounts — flag when we reach permissions depth.
