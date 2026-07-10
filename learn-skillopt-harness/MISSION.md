# Mission: SkillOpt + a Real Agent Harness

## Why
Get Microsoft SkillOpt actually training reusable skills against a coding agent I already use (pi, Claude Code, or Codex CLI), on real software development tasks — so my daily agent gets measurably better over time without model fine-tuning.

## Success looks like
- I can explain the SkillOpt training loop (rollout → reflect → aggregate → select → update → evaluate) and why the validation gate matters
- I have SkillOpt installed and a training run completing end-to-end against a CLI agent harness (Claude Code or Codex exec backend)
- I have run SkillOpt-Sleep against my own real coding sessions and reviewed/adopted a staged skill proposal
- I understand the harness/backend contract well enough to wire up pi as an execution target
- I have a `best_skill.md` artifact deployed into my daily agent workflow for a real software dev task

## Constraints
- Build-first learner: prefers getting things running over theory-first
- Uses macOS; comfortable with Python, CLIs, and agent tooling (pi, Claude Code, Codex all installed)
- Real API budgets apply — prefer cheap/dry-run modes while learning

## Out of scope
- Training or fine-tuning model weights (SkillOpt is explicitly text-space)
- Building a custom agent from scratch — we wrap existing agents, not reinvent them
- SkillOpt's academic benchmarks beyond what's needed to validate the setup
