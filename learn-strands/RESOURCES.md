# Strands Agents Resources

## Knowledge

- [Strands Agents Documentation](https://strandsagents.com/docs/user-guide/quickstart/overview/)
  Official docs. Entry point for all concepts, quickstarts, and API reference. Start here.

- [TypeScript Quickstart](https://strandsagents.com/docs/user-guide/quickstart/typescript/)
  Getting started with the TS SDK: installation, first agent, custom tools, model providers.

- [Agent Loop Concept](https://strandsagents.com/docs/user-guide/concepts/agents/agent-loop/)
  Deep dive into how the loop works: cycles, stop reasons, cancellation, limits, concurrent invocations.

- [Custom Tools (TypeScript)](https://strandsagents.com/docs/user-guide/concepts/tools/custom-tools/)
  Creating tools with Zod schemas, the tool() function, and tool execution patterns.

- [Multi-Agent Patterns](https://strandsagents.com/docs/user-guide/concepts/multi-agent/multi-agent-patterns/)
  Overview of swarm, graph, workflow, agents-as-tools, and A2A orchestration.

- [Model Providers: Amazon Bedrock](https://strandsagents.com/docs/user-guide/concepts/model-providers/amazon-bedrock/)
  Configuring Bedrock as model provider, including region, model ID, and credentials.

- [Strands Agents TypeScript SDK (GitHub)](https://github.com/strands-agents/harness-sdk/tree/main/strands-ts)
  Source code. Read the implementation when docs are unclear.

- [Blog: Introducing Strands Agents TypeScript 1.0](https://strandsagents.com/blog/strands-agents-typescript-v1/)
  Announcement post with architectural overview and design philosophy.

## Wisdom (Communities)

- [Strands Agents Discord](https://discord.gg/strands)
  Official community. Ask questions, share patterns, get help from maintainers.

- [GitHub Issues (strands-agents/harness-sdk)](https://github.com/strands-agents/harness-sdk/issues)
  Bug reports and feature requests. Good for understanding current limitations.

## Gaps

- No clear documentation on determinism strategies (how to make agent behavior reproducible with simpler models)
- Limited TypeScript examples for multi-agent graph/workflow patterns
- No comparison guide: hand-rolled loops vs Strands (what you gain, what you give up)
