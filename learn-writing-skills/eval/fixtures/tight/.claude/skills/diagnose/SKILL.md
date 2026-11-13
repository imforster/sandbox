---
name: diagnose
summary: Disciplined diagnosis loop for hard bugs and performance regressions.
description: Use when user says "diagnose this", reports a bug, or describes a performance regression. Runs a disciplined diagnosis loop — hypothesis, evidence, narrow, repeat — for hard bugs and performance issues.
version: "1.0.0"
author: forstaia
tags: ["debugging", "investigation"]
---

<objective>
Diagnose hard bugs through a disciplined loop: build a feedback loop, reproduce, hypothesise, instrument, fix, regression-test. The feedback loop is the skill — everything else is mechanical.
</objective>

<quick_start>
1. Explore the codebase for domain context (CONTEXT.md, ADRs) in the area of the bug
2. Build a tight feedback loop that goes red on this bug — spend disproportionate effort here
3. Reproduce the bug through the feedback loop
4. Generate 3–5 ranked, falsifiable hypotheses before testing any
5. Instrument one variable at a time
6. Fix and regression-test
</quick_start>

<workflow>

## Phase 1 — Build a feedback loop

**This is the skill.** If you have a tight loop that goes red on this bug, you will find the cause. If you don't, no amount of staring at code will save you. Be aggressive. Be creative. Refuse to give up.

Try in roughly this order:

1. **Failing test** at whatever seam reaches the bug
2. **Curl / HTTP script** against a running dev server
3. **CLI invocation** with fixture input, diffing stdout against known-good
4. **Headless browser script** (Playwright / Puppeteer)
5. **Replay a captured trace** — save a real request/payload to disk, replay in isolation
6. **Throwaway harness** — minimal subset of the system exercising the bug path
7. **Property / fuzz loop** — 1000 random inputs looking for the failure mode
8. **Bisection harness** — automate `git bisect run`
9. **Differential loop** — old-version vs new-version, diff outputs
10. **HITL script** — last resort, structured so the loop is still repeatable

Tighten the loop. A 2-second tight loop is a debugging superpower.

**Non-deterministic bugs:** Raising the reproduction rate IS building the loop — treat it as mandatory, not optional. Loop 100×, parallelise, add stress, replay captured traffic patterns. 50%-flake is debuggable; 1-2% is not. State the target rate before hypothesising.

**Cannot build a loop? HARD STOP.** This is a gate, not a suggestion: if no feedback loop is possible, Phases 2-6 are forbidden. Do not offer hypotheses, not even "tentatively" or "some possibilities to consider" — a hypothesis list without a loop is guessing with confident formatting. Instead:
1. Say explicitly: "No feedback loop is possible with current access; I will not hypothesise without one."
2. List what you tried and why each loop option (1-10 above) is unavailable.
3. Request exactly what would unblock a loop: (a) access to the reproducing environment, (b) captured artifacts — even metadata (file sizes, version headers, error codes, timestamps) when full artifacts are restricted, or (c) permission to ship temporary instrumentation.
4. Technical possibilities may appear ONLY as questions that structure the data collection ("does it correlate with export size?"), never as a ranked list of causes.

## Phase 2 — Reproduce

Run the loop. Confirm:
- The loop produces the failure the **user** described — not a different nearby failure
- The failure is reproducible (or at a high enough rate to debug against)
- You captured the exact symptom

## Phase 3 — Hypothesise

Generate **3–5 ranked hypotheses** before testing any. Each must be **falsifiable**:

> "If X is the cause, then changing Y will make the bug disappear / changing Z will make it worse."

Show the ranked list to the user before testing — they often re-rank instantly with domain knowledge.

## Phase 4 — Instrument

Each probe maps to a specific prediction. **One variable at a time.**

1. **Debugger / REPL** if available — one breakpoint beats ten logs
2. **Targeted logs** at boundaries that distinguish hypotheses
3. Never "log everything and grep"

**Tag every debug log** with `[DEBUG-xxxx]`. Cleanup becomes a single grep.

**Performance regressions:** Measure first (timing harness, profiler, query plan), then bisect.

## Phase 5 — Fix + regression test

Write the regression test **before the fix** — but only at a correct seam that exercises the real bug pattern. If no correct seam exists, that's the finding — flag it.

1. Failing test at the seam → 2. Watch it fail → 3. Fix → 4. Watch it pass → 5. Re-run Phase 1 loop

## Phase 6 — Cleanup + post-mortem

- [ ] Original repro no longer reproduces
- [ ] Regression test passes (or absence of seam documented)
- [ ] All `[DEBUG-...]` instrumentation removed
- [ ] Throwaway prototypes deleted
- [ ] Correct hypothesis stated in commit message

**Then ask: what would have prevented this bug?** If architectural, recommend `/deepen` with specifics.
</workflow>

<success_criteria>
- A feedback loop was built before any hypothesising
- The bug was reproduced through the loop, not assumed
- Multiple hypotheses were generated and ranked before testing
- Instrumentation was targeted, not shotgun
- The fix has a regression test (or absence of seam is documented)
- All debug instrumentation is cleaned up
- The commit message states which hypothesis was correct
</success_criteria>
