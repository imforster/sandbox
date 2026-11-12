# Mission: Kiro CLI v3

## Why
Ian already works fluently in Kiro CLI v1/v2 and now runs v3 (3.2.0). He wants to adopt v3's new capabilities and bring his existing agents, trust settings and hooks across without breaking them. (Drafted from his request; to be confirmed with him.)

## Success looks like
- Translate any v2 trust setting into a correct `permissions.yaml` rule and predict how it resolves
- Migrate existing agents and hooks with `/upgrade-agent` and read its diagnostics
- Use the new workflow features (spec, tangent, rewind, workflows, memories, cloud sessions) where they beat the v2 habit

## Constraints
- Short lessons; hands-on in the real CLI (already installed)
- Source everything from official kiro.dev docs

## Out of scope
- Kiro IDE/Web specifics, ACP client migration (until asked)
