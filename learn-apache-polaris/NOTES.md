# Notes

- Authored by the Bilbo learning-guide agent via Paperclip issue FEL-7, then ported into
  this repo (`~/Developer/sandbox/learn-apache-polaris/`) because the original delivery
  — a Paperclip issue document only — wasn't where the user's actual learning material
  lives (same lesson learned as FEL-6/Apache Arrow).
- Modules 0–5's REST and Spark exercises were actually run against a live local Polaris
  + Spark Docker stack (`apache-polaris-learning-environment`) and their output verified
  before publishing — including a full RBAC chain with both a real authorized `200` and
  a real denied `403` captured verbatim, and a Spark-created Iceberg table confirmed
  visible from the raw REST API too.
- Modules 6–8 (Generic Tables, Catalog Federation, persistence/production topology) are
  close-reading modules grounded in the official 1.7.0 docs, since they need
  infrastructure beyond a laptop quickstart (a beta feature, multi-catalog federation,
  and production-scale topology) — the same pattern Lesson 9 (Flight SQL) used in the
  Arrow course.
- Root and `course_engineer` secrets are redacted throughout (`<redacted-secret>` /
  `<your-...>` placeholders) — they were local-only, ephemeral quickstart credentials
  generated per-boot by the Docker stack, not meant to be reused.
- One worth flagging if you hit it again: Spark hung silently for ~11 minutes on session
  startup under Rosetta emulation, due to entropy-starved `SecureRandom` init. Fixed with
  `-Djava.security.egd=file:/dev/./urandom` — documented in Lesson 5's failure modes.
- Structure, CSS, dark mode, and hamburger-menu wiring copied byte-for-byte from
  `learn-apache-arrow` (`assets/copy-button.css`, `copy-button.js`, `quiz.js`) — no
  reason to reinvent them. `assets/course.css` is the same file with only the top
  comment line changed to name this course; the accent color is overridden per-page via
  an inline `<style>` block, the same convention every other course here uses for its
  non-default accent.
- Accent color: amber/gold (`#a3720a` light / `#f2b705` dark), evoking Polaris the North
  Star. Chosen to be visually distinct from every other course's accent already in use
  in this repo (blues: default/tuicr/cadence-go `#0a84ff`, skillopt-harness `#0078d4`;
  purples: chezmoi/strands `#5856d6`; oranges: cloudflare `#f6821f`, 3d-printing
  `#ff6b35`; teal: arrow `#0d9488`).
- Did not touch `shared/nav.js`'s hardcoded course list or `learning/index.html` — same
  scope boundary as the Arrow port; the hamburger menu's "Learning" section and the
  sandbox learning index won't list Apache Polaris until those are updated separately.
