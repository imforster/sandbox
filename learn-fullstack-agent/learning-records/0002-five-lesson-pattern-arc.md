# 0002 — Mission confirmed; five-lesson pattern arc built

**Date:** 2026-09-08
**Status:** accepted

## Context

Ian confirmed the mission ("yes" to mining-for-patterns) and asked for four more lessons.
Mission in MISSION.md is now CONFIRMED, not draft. Component READMEs read to ground
lessons: ai-memory-vault (CC BY-SA 4.0) and backtalk (AGPL-3.0).

## What was built

Five-lesson arc, one composition pattern each, all with a "when does this fail?" judgment
and a tie-back to Ian's own stack (AIOS, Kiro, Go, AWS):

1. 0001 — What fullstack-agent actually is (foundation, already existed)
2. 0002 — Installer-as-spec (prose wizard; hybrid boundary = deterministic core + prose judgment)
3. 0003 — File-based memory (navigational vs. semantic retrieval; add vector index beside files, not instead)
4. 0004 — Config-path wiring + status-file bus (one-writer many-reader fs pub/sub; broker when cross-host/durable)
5. 0005 — Adopt-never-destroy (idempotent, non-destructive install; maps to Ian's backwards-compat + production-safety rules)

## Design choices

- Each lesson tests JUDGMENT not recall (per NOTES.md), e.g. "CI setup: spec or code?".
- Every quiz answer set kept near-equal length to avoid formatting tells.
- Confirmed status-file bus from backtalk source, not memory ("writes tiny state files...").
- ai-visualizer and barehands NOT read in depth — flagged in RESOURCES; lesson 04 labels
  the visualizer/barehands roles as inferred bus readers, which the source supports.

## Open / next

- Deferred verification: /sandbox/shared/* absolute paths only resolve when workspace is
  served from the sandbox web root. Workspace still lives OUTSIDE ~/Developer/1-Projects/sandbox.
  Ian has not yet chosen move-into-sandbox vs. symlink. Style + relative assets render fine.
- Preferred language for architecture sketches STILL unconfirmed (assume Go until told).
- Natural Lesson 6 = synthesis: turn the five patterns into a one-page architecture sketch
  for a system Ian actually wants to build.
