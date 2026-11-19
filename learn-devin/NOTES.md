# Notes

Working notes and Ian's teaching preferences.

## Preferences

- Concise, technical, no preamble. Comfortable with jargon.
- Iterative rhythm — ship a working draft, refine.
- Push back / be a thinking partner. Flag real tradeoffs.
- Address as "Ian" once per reply, casual and brief.
- Never teach from parametric memory — cite Devin docs.

## Working Notes

- 2026-09-07: Workspace bootstrapped from empty dir. Topic = Devin.ai CLI + Desktop.
  Grounded lesson 1 in official docs (essential-commands, first-run).
- 2026-09-07: Added light/dark theming. Tokenized course.css (light `:root` + dark via
  `[data-theme="dark"]` and `prefers-color-scheme`), new `assets/theme-toggle.js` (floating
  top-left toggle, localStorage-locked, auto-follows OS otherwise). Print forced to light.
  Wired into all HTML + both templates. Verified: braces balanced, node --check on all JS.
- 2026-09-08: Devin CLI mode model CHANGED (per Ian's running binary; docs still lag).
  Old two-axis model (agent mode × permission mode; Accept Edits; Autonomous) REPLACED by
  ONE unified selector with five modes: Ask, Plan, Code, Smart, Bypass Permissions.
  Mapping: Ask/Plan read-only; Code = old "Accept Edits" default write mode; Smart = model-judged;
  Bypass Permissions = approve-all no isolation. Autonomous NOT displayed anymore.
  Rewrote lesson 1 ("Devin's Five Modes", filename kept 0001-two-control-axes.html), glossary,
  swept lessons 2-5 + index. Added a "docs lag the binary — trust /help" callout in lesson 1.
  KEY LESSON: always reconcile against Ian's actual CLI, not the published docs.
- Mission open questions: project stack unknown; assume solo-first, hands-on. Confirm with Ian.
- Devin CLI install: `curl -fsSL https://cli.devin.ai/install.sh | bash`
- Key mental model surfaced: two orthogonal axes —
  AGENT MODE (what Devin is allowed to *do*: Ask / Plan / Agent) ×
  PERMISSION MODE (how much it asks before *acting*: Normal / Accept Edits / Smart / Bypass / Autonomous).
