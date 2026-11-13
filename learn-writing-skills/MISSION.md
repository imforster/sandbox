# Mission: Writing Predictable Skills

## Why
Write skills (and AGENTS.md-style docs) that make an agent follow the same *process* every run, so I can ship and maintain a skill library without re-debugging each one. Mattpocock/skills and Cursor's pstack are the study material.

## Success looks like
- Given any of my skills, I can name its failure modes (duplication, sediment, no-ops, premature completion) and fix each with a specific lever.
- I can rewrite a skill description so it fires reliably, using trigger wording and leading words.
- I can split a bloated skill into a short main file plus disclosed references without losing behaviour.
- I can run a skill by hand and judge whether an edit changed behaviour.

## Constraints
- Short, interactive lessons; practice on my real skills in `~/.kiro/skills/`.
- Polyglot, concise, jargon-comfortable. No basics.

## Out of scope
- Building agents or orchestration frameworks (see design-agent).
- Prompt engineering for non-skill uses.

<!-- Drafted by the teacher from context; confirm or edit "Why" and "Success looks like". -->
