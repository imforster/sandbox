# Mission: Jev / System One Models

## Why
Ian builds agent harnesses and AWS-native automation. Full LLM calls are slow and
costly for the many small decisions inside a loop — classify, route, gate, score.
The goal is to know Jev well enough to decide *where it belongs in a harness Ian
would actually ship*, and to wire a working call, so cheap typed decisions replace
expensive LLM calls where reasoning isn't needed.

## Success looks like
- Explain what a System One model is and how it differs from an LLM, in one breath.
- Given a decision in an agent loop, judge whether it's a Jev job or an LLM job.
- Write a Jev call using the three question types (Noul, Choice, Score) and read the response.
- Use calibrated confidence to set act/escalate thresholds instead of trusting a raw label.
- Name at least two harness patterns (tool-call gating, model routing) and where each fits.

## Constraints
- Short lessons — small working-memory budget, one tangible win each.
- Concept-first, Python for hands-on code (the SDK the docs use). Ian ports to Go/TS as needed.
- Ground every claim in TypeSafe docs or the launch post, not parametric guesses.

## Out of scope (for now)
- Training internals of RLCD beyond a one-line intuition.
- Reproducing benchmark numbers or eval methodology.
- Non-Jev classifier approaches (fine-tuned BERT, etc.) except as brief contrast.

## Status
Active. Language + depth defaulted (Python examples, concept-first ramping to skills)
since Ian proceeded to lesson expansion without overriding. Revisit if Ian corrects.
