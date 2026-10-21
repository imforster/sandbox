# Resources

Ranked by trust. Primary sources come first. Secondary write-ups are listed only when they add something the primary source does not.

## Primary sources

| Topic | Source | Used in | Why it matters |
|---|---|---|---|
| Workflows vs. agents, building blocks, patterns | [Building effective AI agents, Anthropic](https://www.anthropic.com/research/building-effective-agents) | 0001, 0002, 0003, 0007 | Defines workflows and agents, the five workflow patterns, and the tool appendix (agent-computer interface). Fetched and checked. |
| Tool design (agent-computer interface) | Appendix 2 of the same article | 0003 | Poka-yoke, absolute file path example, test tools with realistic inputs. Fetched and checked. |
| Context engineering, context rot, long-horizon techniques | [Effective context engineering for AI agents, Anthropic](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) | 0004, 0008 | Attention budget, just-in-time retrieval, compaction, structured note-taking, sub-agent summaries. Fetched and checked. |
| Human approval for tool calls | [Using function tools with human in the loop approvals, Microsoft Learn](https://learn.microsoft.com/en-us/agent-framework/agents/tools/tool-approval) | 0005 | Approval pauses the run and the caller resumes it. Approvals must bind to a pending request. Production credential guidance. Fetched and checked. Feature maturity may change, so check current release status. |
| Evaluating agents | [Demystifying evals for AI agents, Anthropic](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents) | 0006 | Graders (code, model, human), capability and regression evals, pass@k and pass^k. The page was not read in full during research. Verify the metric definitions against the original before publishing course material. |
| The tool-use loop | [Handling stop reasons, Claude Platform docs](https://platform.claude.com/docs/en/build-with-claude/handling-stop-reasons) | 0001 | Explains `tool_use` and `end_turn` and how the loop terminates. |
| Writing tools for agents | [Writing effective tools for agents, Anthropic Engineering](https://www.anthropic.com/engineering/writing-tools-for-agents) | 0003 (planned) | Prototyping, evaluation loops, namespacing, high-signal returns. Search summary only. Read in full before relying on specifics. |
| Agent framework concepts (Microsoft) | [Microsoft Agent Framework overview](https://learn.microsoft.com/en-ca/agent-framework/overview/) | Reference | Separates agents (model-chosen steps) from workflows (predefined graphs). Use for vocabulary when comparing framework approaches. |

## Secondary sources

| Topic | Source | Caveat |
|---|---|---|
| Summary of Anthropic's agent guidance | [Biweekly Engineering summary](https://biweekly-engineering.beehiiv.com/p/building-effective-agents-lessons-from-anthropic-biweekly-engineering-episode-37) | Third-party summary. Use only to reinforce the primary source. |
| Decision flow for workflow vs. agent | [mer.vin: When not to build AI agents](https://mer.vin/2026/05/when-not-to-build-ai-agents-anthropics-workflow-vs-agent-playbook/) | Not verified against Anthropic's pages. Treat its decision flow as a hypothesis. |

## Notes

Code samples in several Claude docs pages use Opus model names. These are not approved under Improving policy. Substitute `claude-sonnet-5-5` or `claude-haiku-5-5` before reuse.

## Still open

Observability for LLM calls (OpenTelemetry GenAI semantic conventions are still in development status, so pin a version before teaching them). Multi-agent coordination beyond the sub-agent pattern. Add a primary source for each before a lesson depends on it.
