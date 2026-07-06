# Mission: Strands Agents SDK (TypeScript)

## Why
I'm a consultant who ships production software on tight timelines. I want to use Strands Agents to build reliable, deterministic AI agents in TypeScript that accelerate my delivery without sacrificing quality. The goal is to move from hand-rolling agentic loops to leveraging a production framework that gives me orchestration, observability, and multi-agent patterns out of the box.

## Success looks like
- Build a custom Strands agent with tools that solves a real task end-to-end
- Understand and control the agent loop: limits, cancellation, stop reasons
- Orchestrate multi-agent systems (swarm, graph, workflow patterns)
- Run agents deterministically with simpler models (Sonnet 4.6) via careful tool design and prompting
- Deploy an agent to a production-grade environment (Lambda, Fargate, or AgentCore)

## Constraints
- TypeScript preferred for all examples
- Prefer Amazon Bedrock with Claude Sonnet 4.6 (cost-conscious, avoid Opus)
- Quality and correctness over speed
- Already understand agentic loop mechanics conceptually (built loops in Go with Anthropic API)

## Out of scope
- Python SDK (may revisit later)
- Voice/bidirectional streaming
- Evals SDK (future topic once core is solid)
