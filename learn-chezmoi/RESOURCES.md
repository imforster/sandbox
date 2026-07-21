# chezmoi Resources

## Knowledge

- [Official Quick Start — chezmoi.io](https://www.chezmoi.io/quick-start/)
  The canonical starting point. Covers init, add, edit, apply, and multi-machine setup. Use for: first session, core workflow.

- [Manage machine-to-machine differences — chezmoi.io](https://www.chezmoi.io/user-guide/manage-machine-to-machine-differences/)
  Templates, .chezmoidata, hostname detection, OS-specific ignoring. Use for: Lesson 2+ (multi-machine templating).

- [Templating — chezmoi.io](https://www.chezmoi.io/user-guide/templating/)
  Go template syntax, available variables (.chezmoi.hostname, .chezmoi.os), custom data files. Use for: writing conditional configs.

- [Use scripts to perform actions — chezmoi.io](https://www.chezmoi.io/user-guide/use-scripts-to-perform-actions/)
  run_once, run_onchange, run_before, run_after scripts. Use for: Lesson 3 (brew bundle automation).

- [Password managers — Keychain — chezmoi.io](https://www.chezmoi.io/user-guide/password-managers/keychain-and-windows-credentials-manager/)
  macOS Keychain integration for secrets. Use for: Lesson 4 (credentials).

- [Install packages declaratively — chezmoi.io](https://www.chezmoi.io/user-guide/advanced/install-packages-declaratively/)
  Declarative package management with chezmoi. Use for: Lesson 3 (brew packages).

- [Reference: Commands — chezmoi.io](https://www.chezmoi.io/reference/commands/)
  Full command reference. Use for: quick lookup of any chezmoi subcommand.

- [Reference: Template Variables — chezmoi.io](https://www.chezmoi.io/reference/templates/variables/)
  All built-in template variables (.chezmoi.*). Use for: writing machine-detection logic.

## Wisdom (Communities)

- [r/chezmoi](https://www.reddit.com/r/chezmoi/)
  Small but focused subreddit. Use for: real-world multi-machine patterns, troubleshooting.

- [chezmoi GitHub Discussions](https://github.com/twpayne/chezmoi/discussions)
  Direct access to maintainer and power users. Use for: advanced patterns, bug reports, feature questions.

## Gaps

- No curated "gallery of real-world dotfile repos using chezmoi" resource found yet. Would be useful for seeing how others structure multi-machine setups.
