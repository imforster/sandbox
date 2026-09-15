# Resources

High-trust sources for grounding lessons. Primary sources are the actual repo files.

## Primary (the source itself)

- **fullstack-agent README** — https://github.com/jaredrhod/fullstack-agent
  What the project claims to be; the install commands; component links. Read critically:
  it is marketing-flavored.
- **fullstack-agent.md** (the installer spec) — https://raw.githubusercontent.com/jaredrhod/fullstack-agent/main/fullstack-agent.md
  THE most valuable file. The full phased wizard: find-home, menu, interview, install,
  wire, hello, hand-over. This is where the real architecture patterns live.
- **CLAUDE.md** — https://raw.githubusercontent.com/jaredrhod/fullstack-agent/main/CLAUDE.md
  The installer's own operating instructions (state detection, adoption rules).

## Component repos (each a single-purpose case study)

- **ai-memory-vault** — https://github.com/jaredrhod/ai-memory-vault (file-based memory)
  READ. Obsidian/Markdown vault; "lives outside the model, no size ceiling"; navigational
  retrieval via folders/links; concept of "AI priming." License: CC BY-SA 4.0.
- **backtalk** — https://github.com/jaredrhod/backtalk (voice I/O + status-file bus)
  READ. Confirms the status-file bus: "writes tiny state files while it listens, thinks,
  and speaks, so anything can watch them and react." Config keys: agent_dir, bus_dir,
  barehands_state_dir. Local Whisper + Kokoro; optional ElevenLabs. License: AGPL-3.0.
- **ai-visualizer** — https://github.com/jaredrhod/ai-visualizer (status-file-driven UI)
  NOT yet read in depth; inferred as a bus reader from backtalk + fullstack-agent.md.
- **barehands** — https://github.com/jaredrhod/barehands (webcam gesture input)
  NOT yet read in depth; bus reader via barehands_state_dir.

## Background / theory (for pattern grounding)

- Anthropic — "Building effective agents" — https://www.anthropic.com/research/building-effective-agents
  High-trust primer on agent composition patterns (workflows vs. agents, orchestration).
  Use to contrast with fullstack-agent's approach.
- 12-Factor Agents — https://github.com/humanlayer/12-factor-agents
  Design principles for durable agent systems. Good lens for evaluating this stack.

## Community (for wisdom)

- fullstack-agent Discord — https://discord.gg/YSdsqMv3V8
  Thousands of builders running this exact stack. Best place to test real questions.
- Jared's YouTube — https://youtube.com/@jaredrhod
  "How To Build A Jarvis" playlist walks the system by hand.

## Notes on trust

- Repo README uses persuasive framing ("living circuit board", "your Jarvis"). Treat
  claims as hypotheses to verify against `fullstack-agent.md` and component source.
- Anthropic and 12-factor are independent, higher-trust for *principles*.
