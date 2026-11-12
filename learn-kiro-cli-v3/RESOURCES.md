# Kiro CLI v3 Resources

## Knowledge

- [Docs: Upgrade from CLI 2.x (What's new in V3)](https://kiro.dev/docs/cli/v3/)
  Official feature list, V3 vs V2 parity table, breaking changes. Use for: the overall map; what changed since v2.
- [Docs: Migration guide](https://kiro.dev/docs/cli/v3/migration-guide/)
  7-step v2→v3 migration: /upgrade-agent, hooks trigger renames, permissions.yaml, use_aws removal. Use for: converting existing agents, hooks, trust settings.
- [Blog: Kiro CLI V3 is rolling out as the default experience](https://kiro.dev/blog/cli-3/)
  Official rationale and highlights (cloud sessions, memories, spec, tangent, /sessions, workflows, global hooks, nested AGENTS.md). Use for: the "why" and feature overview.
- [Docs: Tangent (V3)](https://kiro.dev/docs/cli/v3/tangent/)
  Named, nestable side-conversations. Use for: tangent lesson.
- [CLI changelog](https://kiro.dev/changelog/cli/)
  Release-by-release changes (e.g. Approve for me). Use for: anything newer than 3.0.
- [Zenn (AWS Japan): Kiro CLI v3 deep dive](https://zenn.dev/aws_japan/articles/36e23635add477)
  Secondary walkthrough of specs, hooks, capability permissions (Japanese, AWS-authored). Use for: cross-checking.

## Wisdom (Communities)

- Kiro Discord (linked from kiro.dev; blog invites feedback there) and the in-CLI `/feedback` command.
  Use for: real-world edge cases, rollout issues.

## Gaps

- Not yet read in detail: permissions, hooks, workflows, specs, cloud sessions, memories, agent config reference pages.

## Added (lesson 1)

- [Docs: Permissions](https://kiro.dev/docs/permissions/)
  Capabilities, effects, scopes, deny-overrides, presets, Approve for me, workspace trust. Use for: anything permissions.
- [Docs: Hooks migration](https://kiro.dev/docs/cli/v3/hooks-migration/)
  v2 object hooks → v3 arrays/standalone files, trigger renames, global hooks. Use for: hooks lesson.

## Added (lessons 2-5)

- [Docs: Hooks](https://kiro.dev/docs/hooks/), [Hook types](https://kiro.dev/docs/hooks/types/), [Hook actions](https://kiro.dev/docs/hooks/actions/)
  Schema, triggers, exit codes. Note: actions page says any non-zero exit blocks PreToolUse; verify exit 2 vs 1 locally.
- [Docs: Tangent](https://kiro.dev/docs/cli/chat/tangent/) and [Checkpoints and rewind](https://kiro.dev/docs/checkpoints/)
  Tangent commands and merge; rewind vs checkpoints (checkpoints are IDE / experimental v2 only).
- [Docs: Specs](https://kiro.dev/docs/specs/)
  Spec types, files, task waves. CLI-specific flow not documented on a CLI page I could find.
- [Docs: Workflows](https://kiro.dev/docs/workflows/) and [Author workflows](https://kiro.dev/docs/workflows/authoring/)
  Concepts, recipe format, safety.
- [Classmethod: /spec new description step and Plan auto-execute](https://dev.classmethod.jp/articles/kiro-cli-specnew-step/)
  Secondary, Japanese, tested on CLI 2.15.2 v3 mode. Verify against current build.

## Gaps

- No official CLI-page for `/spec new` found; memories, cloud sessions, sessions pane, voice, Code Intelligence not yet read.
