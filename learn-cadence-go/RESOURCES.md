# Resources

High-trust sources for grounding lessons. Cadence is maintained by the
cadence-workflow org (originally Uber). Primary sources are the official docs and the
Go client/samples repos.

## Agent CLIs (the stage executors — added 2026-10-16, verified against docs)

- **Claude Code — Run programmatically (headless)** —
  https://docs.claude.com/en/docs/claude-code/headless
  READ. `claude -p "<prompt>"` runs one prompt non-interactively, stdout + exit code.
  `--output-format` text/json/stream-json; `--allowedTools` to scope; `--bare` for a
  reproducible env (skips hooks/skills/MCP/CLAUDE.md, needs ANTHROPIC_API_KEY). Maps to
  a blocking Cadence activity. Anchor for Lesson 0007 (Claude half).
- **Devin API — Common Flows** — https://docs.devin.ai/api-reference/common-flows
  READ. Async: `POST /v1/sessions` {prompt} → {session_id, url, status}; poll
  `GET /sessions/{id}` until status terminal (exit/error/suspended). Service-user key
  (cog_…) with UseDevinSessions permission. Anchor for Lesson 0007 (Devin half).
- **Devin API — Create Session (v3)** —
  https://docs.devin.ai/api-reference/v3/sessions/post-organizations-sessions
  The exact create-session endpoint and request/response shape.

## Primary (official — the source of truth)

- **Concepts: Workflows** — https://cadenceworkflow.io/docs/concepts/workflows
  READ. The core mental model: "fault-oblivious stateful workflow", determinism +
  event-sourcing state recovery, ID uniqueness, child workflows, workflow retries.
  This is the anchor for Lesson 0001.
- **Concepts: Activities** — https://cadenceworkflow.io/docs/concepts/activities
  Not yet read in depth. The "do the side-effecting work" half of the split.
- **Go Client docs** — https://cadenceworkflow.io/docs/go-client
  The Go SDK guide: workers, registering workflows/activities, starting executions.
- **Concepts: Event handling (Signals)** — https://cadenceworkflow.io/docs/concepts/events
  For the human-review-gate lesson (maps to ICM's review boundaries).
- **Concepts: Timers** — https://cadenceworkflow.io/docs/concepts/timers
  Durable sleep — waiting days without a running process.

## Code (runnable, official)

- **cadence-go-client** — https://github.com/cadence-workflow/cadence-go-client
  The Go SDK. Import path `go.uber.org/cadence`.
- **cadence-samples (Go)** — https://github.com/cadence-workflow/cadence-samples
  Runnable Go samples. Hello World: one workflow invoking one activity —
  `new_samples/hello_world`. Sequential activities: `new_samples/greetings`.
- **cadence (server)** — https://github.com/cadence-workflow/cadence
  The service. For local dev, `docker-compose` from this repo (concepts before install).

## Trust / caveats

- **Cadence vs Temporal FAQ** — https://cadenceworkflow.io/faq/cadence-vs-temporal
  Read for honest tradeoffs. Temporal forked from Cadence by the original team; concepts
  are ~1:1. Ian chose Cadence deliberately.
- **Bad Patterns & Best Practices FAQ** — https://cadenceworkflow.io/faq/best-practices
  The determinism footguns (calling time.Now, rand, goroutines directly in a workflow).
  High value once we start writing real workflow code.
- Docs example on the Workflows page is in **Java**. The Go API differs in surface
  syntax (context-based, error returns) but the model is identical. Always confirm Go
  signatures against the Go client docs / samples, not the Java example.

## Community (for wisdom)

- **Cadence on CNCF Slack** — https://inviter.co/cncf (Cadence channel)
  Best place to test real design questions with practitioners.
- **Stack Overflow: cadence-workflow tag** — https://stackoverflow.com/questions/tagged/cadence-workflow
- **r/cadenceworkflow** — https://www.reddit.com/r/cadenceworkflow/

## The target codebase (Ian's own)

- `~/Developer/1-Projects/research-assistant-workflow/` — the 7-stage ICM pipeline we
  are evaluating Cadence against. `README.md` and `CONTEXT.md` describe the stage flow.
