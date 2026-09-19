# Jev / System One Resources

All entries verified by fetching the live source on 2026-09-18.

## Knowledge

- [Launch post: "Introducing System One Models & Jev" — Diogo Almeida, TypeSafe](https://typesafe.ai/blog/introducing-system-one-models-and-jev)
  Founder's manifesto + the Old-vs-New-Frontier comparison table (RLHF vs RLCD,
  strings vs typed decisions, sequential vs parallel sampling). Use for: the *why*,
  the mental model, and the honest "Nuance" caveats on every claim.
- [Docs: Quickstart — docs.typesafe.ai](https://docs.typesafe.ai/introduction/quickstart)
  Canonical request/response shapes, the three question types, cURL + Python SDK.
  Use for: exact API contract and getting a first call working.
- [Docs: Confidence — docs.typesafe.ai](https://docs.typesafe.ai/confidence)
  Calibrated probability vs confidence. Use for: setting act/escalate thresholds.
- [Docs: Patterns — docs.typesafe.ai/patterns](https://docs.typesafe.ai/patterns)
  Speculative fan-out, confidence-gated routing, composite scoring, intent routing.
  Use for: harness design once the primitives are understood.
- [LangChain integration blog: "Building a Harness with Jev" — Runkle & Lovell](https://www.langchain.com/blog/building-a-harness-with-jev)
  `TypeSafeClassifier`, `ModelRouterMiddleware`, `AutoModeMiddleware` (tool-risk gating).
  Use for: dropping Jev into an existing LangChain agent loop.
- [Video: "Jev is HERE. How to use it" — Greg Isenberg w/ Ryan Vogel (28 min)](https://www.youtube.com/watch?v=4mTLpuQpB80)
  Plain-English framing ("AI traffic cop" / decision model) + demos: email triage,
  lead scoring, video clipping, browser-use. Local transcript at
  `reference/transcript-isenberg-jev.html`. Use for: intuition and use-case ideas,
  not exact specs (it's an auto-transcript with speech-to-text artifacts).
- [Book: _Thinking, Fast and Slow_ — Daniel Kahneman](https://www.penguinrandomhouse.com/books/89308/thinking-fast-and-slow-by-daniel-kahneman/)
  Source of the "System 1 / System 2" framing the product name plays on.
  Use for: the intuition behind fast-typed-decisions vs slow-reasoning.

## Wisdom (Communities)

- [TypeSafe Discord](https://discord.gg/typesafe)
  Direct line to the team during early access. Use for: "does Jev fit this decision?"
- [LangChain forum](https://forum.langchain.com/)
  Harness-design discussion. Use for: middleware patterns, routing critique.

## Gaps
- No independent third-party benchmark yet — all speed/cost numbers are first-party
  (the launch post is explicit that evals were run from their own laptops). Treat
  193.6x / 444.6x as first-party best-case until independently reproduced.
