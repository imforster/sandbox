# Prior agentic loop experience

Ian has built agentic loops from scratch in Go using the Anthropic API (standard library only). He understands multi-turn conversation management, tool use protocols, and the fundamental reason/act/observe cycle. This means lessons can skip "what is an agent loop" and jump directly into Strands-specific API design, TypeScript idioms, and framework-level patterns (hooks, plugins, multi-agent orchestration) that differentiate Strands from a hand-rolled approach.

## Evidence
Stated in me.md and confirmed in mission scoping conversation.

## Implications
- Zone of proximal development starts at "how does Strands specifically implement the loop" not "what is an agent loop"
- Focus on what Strands gives you that's hard to build yourself: observability, conversation management, multi-agent coordination
- Can use precise terminology (tool use, stop reasons, context window) without defining them
