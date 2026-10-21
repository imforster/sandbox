# Mission

## Why

Experienced software engineers who have not yet built agentic workflows need a practical, structured path to do so. They already write production code, so the goal is not general AI literacy. The goal is to design, build, test, and reason about LLM-driven systems that take actions through tools, with the same rigor they apply to any other software.

## Learner profile

- Experienced engineers, comfortable with APIs, data structures, testing, and deployment
- No prior experience building agent loops, tool-calling systems, or agent evaluations
- Learning for personal growth, so lessons should be self-paced and portable across stacks

## Constraints

- Framework-agnostic: teach the concepts first. Framework code is illustrative, not the lesson.
- Models: Claude Sonnet or Claude Haiku only (Improving policy). Use model strings `claude-sonnet-5-5` or `claude-haiku-5-5` in any code.
- Tooling defaults to the Microsoft stack when a platform choice is needed (for example, hosting, identity, or observability via Azure).
- About 8 lessons, each 10 to 15 minutes, one concept per lesson.
- Mixed practice: a concept explanation, a quiz, and a short coding exercise in each lesson.

## Outcome

After the path, an engineer can:

1. Distinguish a workflow (predefined code paths) from an agent (model-directed control flow), and pick the simplest one that fits.
2. Implement the agent loop: model call, tool request, tool execution, result return, termination.
3. Design tools with clear schemas, descriptions, and failure modes.
4. Add guardrails: limits on steps, cost, and permissions, plus human approval for risky actions.
5. Evaluate an agent on realistic tasks and iterate based on measured results.
6. Plan multi-step and multi-agent designs and know when they are not worth the cost.
