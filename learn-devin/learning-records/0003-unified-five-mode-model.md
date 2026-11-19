# 0003 — Devin's mode model changed to a unified five-mode selector

- **Date:** 2026-09-08
- **Lessons:** 0001 (rewritten), glossary, sweep across 0002–0005 + index
- **Status:** learned (revises 0001)

## What was learned

Ian's running Devin CLI no longer uses the two-axis model taught in learning record 0001
(agent mode × permission mode). It now presents **one mode selector with five choices**:
**Ask, Plan, Code, Smart, Bypass Permissions** — cycled with `Shift+Tab`. "Accept Edits" is
now "Code"; "Autonomous" is no longer displayed. The published Cognition docs still describe
the old model, so **the installed binary is the source of truth, not the docs.**

## Evidence

Ian reported the mode list directly from his CLI over several messages, and confirmed
Autonomous is not displayed. Lesson 1 + glossary rewritten accordingly; quizzes now test the
five-mode model.

## Zone of proximal development

Content is current again. Because Devin's surface is changing fast, future lessons should keep
the "trust `/help`" habit and avoid over-specifying volatile command names. Still pending:
Ian's project stack, which unlocks a hands-on AGENTS.md lesson.

## Open threads

- This supersedes record 0001's two-axis framing. If the model shifts again, revise here.
- Slash-command names (`/code`, `/bypass`) are inferred; Ian should confirm via `/help`. Lesson 1
  tells the reader to do exactly that.
