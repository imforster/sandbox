# Mission: chezmoi

## Why

I have three macOS machines (home laptop, client laptop, work laptop) with dotfiles in a GitHub repo but no automation for the differences between them. Brew packages, credentials, and shell configs diverge across machines — managing this manually is operational friction that costs time every week.

## Success looks like

- A single `chezmoi apply` on any of the three machines produces the correct config for that machine
- Brew packages are machine-specific — the right set installs on the right machine
- Credentials don't leak into the git repo but are available on apply
- Shell configs are templated — shared base with machine-specific overrides
- Setting up a new/wiped machine is a one-command operation

## Constraints

- All three machines are macOS
- Same git identity across all machines
- Learning by doing on the actual dotfiles repo — not toy examples
- Progressive: each lesson builds on the previous one

## Out of scope

- Linux or Windows support
- Team onboarding or teaching others
- GUI dotfile managers
- Migrating from other dotfile managers (starting fresh with chezmoi)
