# Notes

## Learner

- Ian is **new to both Flink and Iceberg**. Protect working memory early: teach the
  connector mental model before any streaming/CDC nuance. Difficulty is the enemy for
  knowledge; the tool for skills.
- Context is a **real client engagement (Dremio)**, so lessons should bias toward
  "capabilities and tradeoffs you can defend in a design conversation" over trivia.
- Match Ian's style: concise, technical, no filler. He runs a lot of `learn-*` courses
  in this repo and expects the same conventions.

## Course conventions (copied from learn-apache-polaris)

- Assets (`course.css`, `copy-button.css`, `copy-button.js`, `quiz.js`) copied
  byte-for-byte from `learn-apache-polaris`. Only the `course.css` top comment changed.
- Accent color: **lime/green** (`#2e7d32` light / `#66bb6a` dark) — evokes data flowing
  through pipes, and is distinct from accents already in use (blues, purples, oranges,
  amber=Polaris, teal=Arrow). Set per-page via an inline `<style>` block, same convention
  as every other course here.
- Every lesson ends with the shared nav/theme scripts and `/sandbox/shared/nav.js`.
- Quiz answers kept the same length/shape so formatting gives no clue to the answer.

### Glossary format — Apple Developer glossary (rebuilt 2026-10-13)

The glossary matches the real Apple Developer glossary (developer.apple.com/help/glossary)
format, not a card/thematic layout:
- **One flat A–Z list**, no thematic sections. Each entry is a `<div class="term">`.
- **Term is the heading** (`<h2>` inside `.term`), definition is plain `<p>` paragraphs
  below it — no `<dl>`, no card borders.
- **Term repeated and italicized** in the opening sentence ("*An append stream* is …").
- **Quiet "View documentation" link** line (`p.term-link`) where a term has a source.
- **Search field + Reset** at the top (client-side filter over term text), a "No results."
  message, and a "Learn about the words and phrases related to…" intro line.
- All 31 terms preserved from the previous version, just restructured and alphabetized.
- Styling scoped to the glossary page's inline `<style>` — shared `course.css` and other
  courses untouched. First attempt (cosmetic card tweaks) was rejected as not matching
  Apple format; this rebuild is the correct structural match.

### Lesson navigation format (aligned 2026-10-13 to agents-at-scale)

Per Ian's request, the per-lesson nav matches the `agents-at-scale` course format:
- **Three items only: Prev / Home / Next** — the "All Courses" (`nav-catalog`) link was
  removed from every lesson's top and bottom nav. (The course `index.html` still carries
  its own "All Courses" top link — that's the index, not a lesson.)
- **Directional arrow glyphs:** Prev reads `← Prev`, Next reads `Next →`.
- **Disabled ends:** Lesson 1's Prev and Lesson 9's Next are muted
  `<span class="nav-... nav-disabled">` labels, not omitted — a `.nav-disabled` rule was
  added to `course.css` (muted colour, 0.5 opacity).
- **Home is icon-only** (the grid SVG), no "All Lessons" text, in both top and bottom nav.
  The `title` attribute is kept for accessibility.
- Both the `lesson-top-nav` and the bottom `lesson-nav` follow this same pattern.

## Pedagogy decisions

- **Flink SQL first, Java later.** Dremio's own tutorial uses the SQL Client, and it's
  the shortest path from zero to a working Iceberg write. Java DataStream API is flagged
  in the mission as the next step, not covered yet.
- The sink is **Iceberg** throughout because that's what Dremio reads. The catalog is
  **local filesystem/Hadoop** for runnable lessons, with Polaris/Nessie/Glue mapped
  conceptually (and linked back to the Polaris course).
- The two client source types anchor every example: **files** (job-history logs) and
  **MongoDB** (operational data, bounded vs. CDC).

## Scope boundaries (don't cross without updating MISSION.md)

- Did not add this course to `shared/nav.js` or `learning/index.html` — same boundary the
  Polaris and Arrow ports kept. The hamburger menu won't list this course until those are
  updated separately.
- Connector facts must trace to official Flink docs or Dremio's own docs — no invented
  options. Several lessons (CDC, continuous mode) are close-reading until a real
  Mongo/Flink stack is stood up and verified.

## Verification status

- Lessons 1–2 (mental model, connector map): knowledge/close-reading, grounded in the
  official connector overview + Dremio guides.
- **2026-10-13 — Ian confirmed Docker is fine.** Lessons 3+ (file → Iceberg, Mongo/CDC)
  will target a real local Flink SQL + Docker stack and be marked "verified against a
  real run" in the lesson meta only after being actually run. Until a lesson is run, it
  stays grounded in the Dremio Flink-SQL-Iceberg tutorial, not claimed as verified.
