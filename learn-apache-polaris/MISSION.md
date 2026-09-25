# Mission: Apache Polaris Fluency

## Why this course exists

This course was requested through a Paperclip issue (FEL-7): build a hands-on course
covering Apache Polaris — what it is, the problem it solves, its entity model, and its
ecosystem — the same way FEL-6 covered Apache Arrow. There is no deeper personal
backstory here; the brief was explicit and this course delivers it directly.

The brief asked for:

1. **What Polaris is and why it exists** — a catalog service implementing the Iceberg
   REST Catalog spec, and the multi-engine interoperability payoff that follows from
   every engine speaking the same protocol to the same catalog.
2. **The entity model** — Catalog, Namespace, Table, Principal, Principal Role, Catalog
   Role, built up in that order so the RBAC chain in Module 5 reads as structural
   instead of arbitrary.
3. **Hands-on exercises against a real server** — every REST call and every Spark
   command in Modules 0–5 was actually run against a live local Polaris + Spark Docker
   stack and its output verified before publishing.
4. **The wider ecosystem** — Generic Tables, Catalog Federation, and persistence/
   production topology, covered as close-reading modules where a laptop quickstart
   can't reach (beta features, multi-catalog federation, production-scale deployment).

The course was originally drafted and verified as a Paperclip issue document, then
ported into this repo (`~/Developer/sandbox`) to sit alongside the other `learn-*`
courses here, using the same lesson/reference/asset structure as `learn-apache-arrow`.

## What success looks like

By the end of the nine lessons, a reader can:

1. Explain why a REST-based catalog changes the multi-engine story compared to a Hive
   Metastore or an engine-native catalog, and name an engine other than Spark that could
   point at the same Polaris catalog.
2. Draw the entity tree — Catalog → Namespace → Table — alongside the separate
   Principal → Principal Role → Catalog Role tree, and mark exactly where they connect.
3. Locate a freshly bootstrapped Polaris server's root credentials in its startup logs,
   and explain what a realm is versus what a catalog is.
4. Exchange OAuth2 client credentials for a bearer token and create a catalog and
   namespace using nothing but `curl`, and explain the two REST path prefixes
   (`/api/management/v1` vs `/api/catalog/v1`).
5. Configure Spark's Iceberg REST catalog integration to point at Polaris, and confirm a
   table created from Spark is visible from the raw REST API and vice versa.
6. Build the full grant chain (Principal → Principal Role → Catalog Role → Privilege)
   from scratch, and reproduce both an authorized `200` and a denied `403` with a real
   server.
7. Explain what a Generic Table is, what it deliberately gives up (commit coordination,
   credential vending) compared to an Iceberg table, and who is responsible for
   concurrency control instead.
8. Explain what catalog federation lets Polaris do, which external catalog systems it
   can front, and why federation changes access, not where the data lives.
9. Explain what a persistence backend actually stores, why the quickstart's in-memory
   default isn't production-safe, and what changes when Polaris serves many engines
   instead of one laptop.

## Constraints

- Every Module 0–5 exercise must be runnable against a real Polaris (+ Spark, where
  relevant) server with verified output — no invented request/response pairs.
- Modules 6–8 (Generic Tables, Federation, Persistence/Topology) are close-reading
  modules grounded in the official 1.7.0 docs, since they need infrastructure beyond a
  laptop quickstart — same pattern the Arrow course used for Flight SQL.
- Lessons build on each other in order (each module's entities/credentials feed the
  next); don't reshuffle module order when authoring lessons.
- Match this repo's existing course conventions exactly (structure, CSS, dark mode,
  hamburger nav) rather than introducing a new visual style.
- All secrets (root/principal client secrets, bearer tokens) are redacted in published
  lesson content — they are local-only, ephemeral quickstart credentials.

## Out of scope

- Federating a real external catalog (Hive Metastore, BigQuery Metastore) end to end —
  Module 7 is conceptual, since it needs infrastructure beyond this quickstart.
- Standing up a second query engine (Trino, DuckDB, Flink) against the same catalog —
  flagged as the natural next step, not covered here.
- Polaris's UI/console, if one exists in a given deployment — this course is API- and
  SQL-first, matching how the course was actually verified.

## Evolution log

- 2026-09-24 — Course drafted and verified as a Paperclip issue document against a real
  local Polaris + Spark Docker stack (Apache-Polaris-derived Iceberg REST server, Spark
  3.5.2, `iceberg-spark-runtime-3.5_2.12:1.5.2`), then ported into this repo per FEL-7
  follow-up: the course needed to live in the actual Sandbox learning repo in the same
  HTML-lesson style as every other `learn-*` course, not just as an issue attachment.
