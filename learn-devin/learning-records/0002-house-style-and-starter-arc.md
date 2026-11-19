# 0002 — House style + full starter arc

- **Date:** 2026-09-07
- **Lessons:** 0001–0005 + glossary
- **Status:** learned

## What was learned

The workspace was migrated from an invented serif/red design to Ian's **sandbox house style**
(SF Pro sans, blue accent, card UI, `--color-*` tokens) copied from `sandbox/shared/style.css`.
The full five-lesson starter arc now exists, each grounded in official Devin docs:

1. Two control axes (agent mode × permission mode)
2. Scope with the 3-hour rule (context / directive / success criteria)
3. Onboard your repo (indexing / AGENTS.md / Knowledge vs Playbooks)
4. Ask → Plan → Agent + opinionated, self-verifying instructions
5. Review & orchestrate (Devin Review Auto-Fix loop; explore vs general subagents)

## Evidence

Two retrieval quizzes per lesson using house `li[data-correct]` markup. All HTML links and JS
verified (see NOTES). Awaiting Ian's completion to confirm retention.

## Zone of proximal development

The starter arc covers the mission's five success criteria. Next candidates once Ian names his
stack: a hands-on AGENTS.md draft for his repo; Playbooks; MCP integrations; cloud/managed Devins
for larger fleet work; Session Insights-driven prompt improvement.

## Open threads

- Ian's project stack still unknown — examples remain tool-general.
- Staying in `1-Projects/` (not relocated to sandbox), so shared `nav.js`/`theme.js` are
  unreachable; we use a local `theme-toggle.js` mirroring the house `sb-theme` convention.
