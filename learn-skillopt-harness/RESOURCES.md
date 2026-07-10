# SkillOpt + Agent Harness Resources

## Knowledge

- [Repo: microsoft/SkillOpt](https://github.com/microsoft/SkillOpt)
  The primary source. README covers the loop, backends, and extensibility. Use for: everything; start here.
- [Docs: Documentation & Reproduction Guide](https://microsoft.github.io/SkillOpt/docs/guideline.html)
  Installation, data prep, training/eval commands, full config reference. Use for: running actual training.
- [Paper: SkillOpt — Executive Strategy for Self-Evolving Agent Skills (arXiv:2605.23904)](https://arxiv.org/abs/2605.23904)
  Method, ablations, per-cell results across 6 benchmarks / 7 models / 3 harnesses. Use for: why the design works (validation gate, textual learning rate, rejected-edit buffer).
- [Paper: From Raw Experience to Skill Consumption — SkillLens (arXiv:2605.23899)](https://arxiv.org/abs/2605.23899)
  Companion MSR study of the full skill lifecycle (experience → extraction → consumption): 25% negative transfer when ungated; validated 3-dim rubric (Failure Mechanism Encoding, Actionable Specificity, High-Risk Action Blacklist); format/plausibility don't predict utility. Local copy: ~/Documents/From Raw Experience to Skill Consumption-*.pdf. Use for: judging skill quality, designing experience pools, seed skills. Compressed into reference/what-makes-a-good-skill.html.
- [Guide: Adding a new backend](https://github.com/microsoft/SkillOpt/blob/main/docs/guide/new-backend.md)
  The backend contract: `ModelBackend` base class, `generate()`, registration in `common.py`/`backend_config.py`. Use for: wiring pi as an execution target.
- [Guide: Adding a new benchmark](https://github.com/microsoft/SkillOpt/blob/main/docs/guide/new-benchmark.md)
  Env contract: `dataloader.py` + `rollout.py` + `initial.md` seed skill; `envs/searchqa/` is the reference. Use for: defining a real software-dev task for training.
- [Docs: SkillOpt-Sleep](https://github.com/microsoft/SkillOpt/blob/main/docs/sleep/README.md)
  Nightly offline self-evolution for local coding agents: harvest transcripts → mine → replay → consolidate behind a validation gate. Use for: the fastest path to real-task skill training with Claude Code/Codex.
- [Release notes: v0.2.0](https://github.com/microsoft/SkillOpt/releases/tag/v0.2.0)
  SkillOpt-Sleep CLI, cross-tool backends, plugin shells (Claude, Codex, Copilot, Devin, OpenClaw). Use for: current feature surface.
- [Video: Project demo](https://youtu.be/JUBMDTCiM0M)
  Visual walkthrough of the training loop. Use for: first-pass intuition.
- [Docs: pi coding agent — SDK & custom providers](/Users/forstaia/.npm-global/lib/node_modules/@earendil-works/pi-coding-agent/docs)
  Local pi docs (sdk.md, custom-provider.md). Use for: exposing pi programmatically as a SkillOpt exec backend.

## Wisdom (Communities)

- [SkillOpt GitHub Issues & Discussions](https://github.com/microsoft/SkillOpt/issues)
  Active repo (trending); maintainers respond. Use for: backend contract questions, harness integration problems.
- [gbrain-evals benchmark writeup](https://github.com/garrytan/gbrain-evals/blob/main/docs/benchmarks/2026-06-03-skillopt.md)
  Third-party integration + eval of SkillOpt. Use for: seeing how others wired it into their agent.

## Gaps

- No verified resource yet on wiring a *non-shipped* CLI agent (like pi) as a SkillOpt exec backend — need to read `skillopt/model/codex_exec` / `claude_code_exec` source as templates.
- Haven't yet confirmed the exact env contract for a custom "software dev project" benchmark vs. the shipped six.
