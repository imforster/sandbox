# Completed Lesson 2: Install & the Deterministic Sleep Experiment

The user completed Lesson 2, running the deterministic SkillOpt-Sleep experiment (MockBackend, no API key).

**Evidence:** User reported quiz answers and a confirmed passing run, 2026-07-09.

**Key insights retained:**
- The MockBackend replaces the real LLM entirely — deterministic, reproducible, zero-cost
- Gate safety proven: the known-bad edit was REJECTED, never merged
- The textual learning rate bounds how much can change per night (edit budget)
- Single-night run produces less lift than multi-night — the budget constrains how much can be learned per cycle

**Quiz issue found:** The `data-correct="true"` attribute was missing from quiz options, causing all answers to show as incorrect. Fixed in-place. Future lessons must always include this attribute on correct answers.

**Zone of proximal development:** Ready for real-transcript usage (Lesson 3). Has enough sessions from daily agent use to make mining meaningful. The gate concept is solid — re-test at Lesson 4 (backend boundary) and Lesson 6 (capstone) per plan.
