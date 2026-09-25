# Mission: Apache Arrow Fluency

## Why this course exists

This course was requested through a Paperclip issue (FEL-5, executed as FEL-6): build a
hands-on course covering Apache Arrow — what it is, the problem it solves, its core data
model, and its ecosystem — using the Python binding (`pyarrow`). There is no deeper
personal backstory here; the brief was explicit and this course delivers it directly.

The brief asked for:

1. **What Arrow is and why it exists** — the in-memory columnar format, and the
   zero-copy interop payoff that follows from a published, language-independent memory
   layout.
2. **The core data model** — `Schema`, `Field`, `Array`, `RecordBatch`, `Table`, built up
   in that order so each structure is understood in terms of the one before it.
3. **The ecosystem** — Arrow Compute (vectorized kernels), Parquet interop (column
   projection, row-group pushdown), Arrow Flight (gRPC streaming of RecordBatches), and
   Arrow Flight SQL (a SQL-specific protocol layered on Flight).
4. **Hands-on pyarrow exercises** — every code sample in every lesson was actually
   executed and its output verified before publishing (see NOTES.md for versions).

The course was originally drafted and verified as a Paperclip issue document, then
ported into this repo (`~/Developer/sandbox`) to sit alongside the other `learn-*`
courses here, using the same lesson/reference/asset structure as `learn-tuicr` and
`learn-cadence-go`.

## What success looks like

By the end of the nine lessons, a reader can:

1. Explain why Arrow's zero-copy story only works because it specifies memory layout,
   not just an API — and demonstrate it (matching buffer addresses across pandas/NumPy).
2. Build a `Schema` of typed `Field`s, including nested `list_`/`struct` types, and state
   why field nullability defaults to `True`.
3. Construct an `Array`, explain the validity bitmap (nulls are not a sentinel value),
   and show that slicing is zero-copy.
4. Build a `RecordBatch` from a `Schema` and matching `Array`s, and round-trip it through
   Arrow IPC.
5. Build a `Table` from multiple `RecordBatch`es, understand `ChunkedArray`, and round-trip
   through pandas.
6. Filter and aggregate a `Table` with `pyarrow.compute` without converting to pandas
   first, and correctly predict null propagation in comparisons (null, not `False`).
7. Write/read Parquet with column projection and row-group predicate pushdown, and read
   metadata without decoding row data.
8. Run a minimal Arrow Flight server and client and confirm a byte-identical round-trip
   over gRPC.
9. Explain what Flight SQL adds on top of plain Flight (`CommandStatementQuery`, ADBC)
   without needing a bundled Flight SQL server to prove it (this one is reading-only —
   see NOTES.md).

## Constraints

- Every exercise must be runnable pyarrow code with real, verified output — no invented
  samples.
- Lessons build on each other in order (each module's artifacts feed the next); don't
  reshuffle module order when porting to lessons.
- Match this repo's existing course conventions exactly (structure, CSS, dark mode,
  hamburger nav) rather than introducing a new visual style.

## Out of scope

- Arrow implementations in other languages (C++, Java, Rust, Go, R) — Python/pyarrow
  only.
- Standing up a real Flight SQL server (Dremio, DuckDB, etc.) — Module 9 is conceptual.
- Arrow Dataset multi-file partitioned reads — flagged as a natural next step, not
  covered here.

## Evolution log

- 2026-09-24 — Course drafted and code-verified as a Paperclip issue document (pyarrow
  25.0.1, pandas 2.2.6, numpy 2.2.6), then ported into this repo per FEL-6 follow-up:
  the course needed to live in the actual Sandbox learning repo, not just as an issue
  attachment.
