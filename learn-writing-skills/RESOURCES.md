# Writing Predictable Skills Resources

## Knowledge

- [Skill: `writing-for-agents` — Matt Pocock](https://github.com/mattpocock/skills/blob/main/skills/productivity/writing-for-agents/SKILL.md)
  The core reference: context pointers, two loads, information hierarchy, completion criteria, leading words, negation, pruning. Use for: definitions and the "why" behind every lever.
- [Docs page: writing-for-agents — Matt Pocock](https://github.com/mattpocock/skills/blob/main/docs/productivity/writing-for-agents.md)
  Human-facing overview with FAQ and "It's working if" signals. Use for: quick orientation and common failure modes.
- [Skill: `diagnosing-bugs` — Matt Pocock](https://github.com/mattpocock/skills/blob/main/skills/engineering/diagnosing-bugs/SKILL.md)
  A worked example of leading words (*tight*, *red*) and demanding completion criteria. Use for: studying a well-written skill.
- [Guide: `.agents/writing-docs.md` — Matt Pocock](https://github.com/mattpocock/skills/blob/main/.agents/writing-docs.md)
  How a skills repo documents itself: fixed page frame, "It's working if" bar. Use for: documenting a skill set.
- [pstack `poteto-mode` router — Cursor](https://github.com/cursor/plugins/blob/main/pstack/skills/poteto-mode/SKILL.md)
  Trigger table routing to leaf principle skills and playbooks. Use for: router/playbook structure.
- [pstack `blast-radius` — Cursor](https://github.com/cursor/plugins/blob/main/pstack/skills/blast-radius/SKILL.md)
  Evidence ladder ("how sure are you") as a completion criterion. Use for: demanding proof instead of prose.
- [pstack `principle-*` skills — Cursor](https://github.com/cursor/plugins/tree/main/pstack/skills)
  24 one-page skills, each named as a leading phrase. Use for: studying very small, single-idea skills.
- [Guide: Test Agent Skills — Promptfoo](https://www.promptfoo.dev/docs/guides/test-agent-skills/)
  Read in full. A/B two SKILL.md versions with `skill-used`, `not-skill-used`, repeats, cost and latency. Use for: evaluating a leading-word edit.
- [Repo: improving/promptfoo](https://github.com/improving/promptfoo)
  Read and smoke-run (kiro.js, config, docs). Improving's EDD demo: `exec:` providers for Kiro, Claude, Copilot, Devin, plus rubric grading with per-dimension thresholds. Pins promptfoo 0.121.17, use `--no-cache`. Use for: running evals against Kiro CLI.
- [Guide: Evaluate Coding Agents — Promptfoo](https://www.promptfoo.dev/docs/guides/evaluate-coding-agents/)
  Snippet only. Use for: why agent evals differ from single-call evals.
- [Provider: Claude Agent SDK — Promptfoo](https://www.promptfoo.dev/docs/providers/claude-agent-sdk/)
  Snippet only. Use for: provider options and auth for local Claude Code.
- [Guide: LLM as a Judge — Promptfoo](https://www.promptfoo.dev/docs/guides/llm-as-a-judge/)
  Snippet only. Use for: `llm-rubric` when exact checks are too brittle.
- [aws-samples/sample-agent-skill-eval](https://github.com/aws-samples/sample-agent-skill-eval) and [tardigrde/agent-skill-eval](https://github.com/tardigrde/agent-skill-eval)
  Snippets only, not run. Use for: alternatives to promptfoo (with/without-skill delta, trigger precision).
- [Paper: Decomposing Agent Skill Quality into Interpretable Signals](https://arxiv.org/html/2608.06891v2)
  Abstract only. Use for: document-level skill quality scoring, a possible complement to behavioural evals.

## Wisdom (Communities)

- None selected yet. Candidates to evaluate: the issues of `mattpocock/skills` (observed questions, per its writing-docs guide). Ask before joining anything.

## Gaps

- No independent (non-author) evaluation of whether leading words measurably change behaviour. Matt's guide says there is no automated eval and to check by running the document. Lesson 3's eval is an attempt to fill this for Ian's own skills.
- Nothing yet measures whether Kiro triggers a skill from its description (exec: gives text only).
