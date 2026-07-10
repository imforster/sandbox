# Working Notes

## User preferences
- Build-first: wants SkillOpt actually training against a real agent, not theory-first
- Target harnesses: pi / Claude Code / Codex (in that order of interest, but pragmatic)
- Task domain: real software development projects
- Has ~/learn-graphify and ~/learn-strands workspaces (this naming pattern is familiar)
- AWS production-safety rules apply globally (see ~/.pi/agent/AGENTS.md)

## Working notes
- SkillOpt v0.2.0 (2026-07-02) on PyPI: `pip install skillopt`
- Two on-ramps:
  1. **SkillOpt-Sleep** — harvests real Claude Code/Codex transcripts, nightly cycle, `skillopt-sleep dry-run` is free/safe. Fastest path to "real task" wins.
  2. **Full training loop** — needs an env (dataloader/rollout/initial.md) + backend; use codex_exec/claude_code_exec as-is first, then port to pi.
- Deterministic no-API-key proof exists: `python -m skillopt_sleep.experiments.run_experiment --persona researcher --assert-improves`
- Plugin shells: plugins/claude-code (marketplace), plugins/codex (install.sh), copilot (MCP server)
- Proposed lesson arc:
  1. Mental model: the SkillOpt loop + what a "harness" is in its architecture
  2. Install + deterministic sleep experiment (no API key) — first tangible win
  3. skillopt-sleep dry-run on real Claude Code/Codex transcripts
  4. Full training run with a shipped benchmark + claude_code_exec backend
  5. Custom env for a real software-dev task
  6. pi as a backend (read codex_exec source, implement contract) — OR Kiro: no official support, but Copilot/Devin plugins are plain MCP servers (Kiro speaks MCP); missing piece is a Kiro transcript harvester (Devin's ATIF-v1.7 harvester is the template)
- Lesson plan confirmed by user 2026-07-09; Lesson 1 (mental model) shipped same day
- SkillLens paper (arXiv:2605.23899) integrated 2026-07-09: reference/what-makes-a-good-skill.html is the compressed rubric; lessons 1-2 cite the 25% negative-transfer stat. For Lesson 5 (custom env): experience pool MUST include successful trajectories (all-failure pools worst everywhere); coding domains peaked with mostly-successful pools. For Lesson 3+: review staged proposals with the validated 3-dim rubric, not "reads well". Meta-skill idea (rubric in extractor prompt, +1.55pp) is a candidate enhancement for lessons 4-5.
