# Notes

- Authored by the Bilbo learning-guide agent via Paperclip issue FEL-6 (parent request
  FEL-5), then ported into this repo (`~/Developer/sandbox/learn-apache-arrow/`) because
  the original delivery — a Paperclip issue document only — wasn't where the user's
  actual learning material lives.
- Every code sample in every lesson was actually executed and its output verified before
  publishing, against `pyarrow==25.0.1`, `pandas==2.2.6`, `numpy==2.2.6`. Buffer
  addresses printed in Lessons 1 and 3 will differ on your machine/run; the boolean
  zero-copy checks should still read `True`.
- Lesson 9 (Arrow Flight SQL) is conceptual/reading-only by design — there's no bundled
  Flight SQL server (Dremio, DuckDB, InfluxDB 3, etc.) available to stand up for a
  self-contained hands-on exercise the way Lesson 8's plain-Flight demo server works.
  The exercise there is a close reading of the protocol docs plus a written mapping back
  onto Lesson 8's Flight primitives, not a script.
- Structure, CSS, dark mode, and hamburger-menu wiring copied from `learn-cadence-go` /
  `learn-tuicr` (the newest pattern in this repo) rather than the older `learn-cloudflare`
  style. `assets/copy-button.css`, `copy-button.js`, and `quiz.js` are byte-identical
  copies — no reason to reinvent them. `assets/course.css` is the same file with only the
  top comment line changed to name this course; the accent color is overridden per-page
  via an inline `<style>` block, the same convention `learn-chezmoi` and
  `learn-skillopt-harness` use for their non-default accents.
- Accent color: teal (`#0d9488` light / `#2dd4bf` dark). Chosen to be visually distinct
  from every other course's accent already in use in this repo (blues: default/tuicr/
  cadence-go `#0a84ff`, skillopt-harness `#0078d4`; purples: chezmoi/strands `#5856d6`;
  oranges: cloudflare `#f6821f`, 3d-printing `#ff6b35`) and loosely evokes Arrow's
  documentation-site teal accents without copying an exact hex from arrow.apache.org.
- Did not touch `shared/nav.js`'s hardcoded course list — the task scope for this port
  was limited to `learning/index.html` and `README.md` for site wiring, so the hamburger
  menu's "Learning" section will not list Apache Arrow until nav.js is updated
  separately.
