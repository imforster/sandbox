# 0001 — Flink is the ingestion half; Iceberg is what Dremio reads

**Date:** 2026-10-13
**Status:** accepted

## Context

Ian landed a new client, **Dremio**, and needs to explore Apache Flink's input sources
and output sinks. He is **new to both Flink and Iceberg**. The client's concrete setup:
they store operational data in **MongoDB** and pull **job-history logs from Dremio's
job-execution engines** (files). The goal is working fluency in Flink's connector
surface — breadth and tradeoffs — so Ian can make and defend design decisions on the
engagement, not just run one happy-path pipeline.

Decisions confirmed this session:
- **Mission = explore the connector capability space**, anchored to two real source types
  (MongoDB, job-history files) and one sink (**Iceberg**).
- **Flink SQL first, Java DataStream API later** — shortest path to a working Iceberg
  write, and it matches Dremio's own tutorial.
- **Iceberg sink throughout** because Dremio queries Iceberg natively.
- **Docker is fine** (confirmed via live steering) — hands-on lessons will run against a
  real local Flink SQL + Docker stack and be marked verified only after an actual run.
- New workspace `learn-flink-connectors/`, conventions copied byte-for-byte from
  `learn-apache-polaris` (CSS, dark mode, nav, quiz markup). Accent: lime/green.

## Insight (the non-obvious framing)

The pivotal realisation that shapes the whole course: **this course is the ingestion
half of a story whose consumption half Ian already learned.** Dremio's "Open Catalog" is
**Apache Polaris** — the subject of Ian's existing `learn-apache-polaris` course. Flink
fills Iceberg tables through a catalog; Dremio reads them through the same catalog. So the
Iceberg sink's catalog choice (filesystem locally; Polaris/Nessie/Glue in production) is
the exact seam that connects the two courses.
(Source: Dremio, "Apache Polaris with Apache Flink" + "Getting Started with Flink SQL and
Apache Iceberg".)

The second non-obvious framing, which drives the lesson order: the deepest split across
connectors is not file-vs-database — it's **append stream vs. changelog stream**. A
bounded file read and a plain Mongo read are append (insert-only). MongoDB **CDC** is a
changelog (insert/update/delete). That single distinction decides the Iceberg write mode
(append-only vs. upsert/delete with a primary key), and it's the thing most likely to
surprise someone on their first CDC-to-Iceberg pipeline.

## Zone of proximal development

- New to both Flink and Iceberg → early lessons are **knowledge-first, low difficulty**
  to protect working memory. Teach the sources→sinks model and connector-vs-format before
  any streaming nuance.
- Ian is a senior polyglot engineer (Go/Java/Python/TS) → do NOT teach SQL basics,
  Docker basics, or "what is a database." Move fast on mechanics; spend the budget on
  Flink/Iceberg-specific judgment.
- Quizzes test judgment (which connector/mode, why) and the append-vs-changelog
  consequence, not option-name recall.

## Lesson arc (planned)

1. **The Flink Connector Model** — sources→transforms→sinks, table=declaration, connector
   vs format. (SHIPPED)
2. **The Connector Map** — filesystem, mongodb, mongodb-cdc, iceberg; defining tradeoff
   each; append-vs-changelog hinge. (SHIPPED)
3. Local Flink SQL + Docker; read a directory of job-history files (bounded). (NEXT)
4. FileSystem source: bounded vs. continuous mode.
5. The Iceberg sink: write through a catalog, confirm files on disk.
6. MongoDB source vs. MongoDB CDC — append read vs. changelog stream.
7. Catalogs: filesystem / Polaris / Nessie / Glue — the seam to Dremio and the Polaris course.
8. Delivery guarantees: exactly-once for file-to-Iceberg, checkpoints.
9. Design recommendation: the client's two pipelines, decided and defended.

## Progress (2026-10-13, session 1)

Workspace scaffolded. MISSION / RESOURCES / NOTES / root index / lessons index written.
Glossary shipped (6 sections). Lessons 1–2 shipped (knowledge/map, grounded in official
Flink connector docs + Dremio's own guides; no invented connector options). Connector
landscape verified via web search + the official connector overview before authoring.

## Progress (2026-10-13, session 2) — course complete

All nine lessons shipped. Lessons 3–5 were **run for real** against a local Flink 1.18.1
+ iceberg-flink-runtime-1.18-1.6.1 Docker stack (Hadoop catalog, filesystem/JSON source):
- L3: five job-history rows read from a two-file directory (verified tableau output).
- L4: continuous mode (`source.monitor-interval`) verified to hold the job in RUNNING
  state rather than FINISHED.
- L5: a real Iceberg write — the 2-row read-back, the on-disk file tree (parquet + v1/v2
  metadata + snapshot/manifest + version-hint), and the real snapshot summary
  (`operation=append`, `added-records=2`, `engine flink 1.18.1`, `iceberg 1.6.1`) are all
  embedded from the actual run. The async-INSERT "Empty set" gotcha became a teaching
  callout.
Lessons 6–9 are close-reading/decision, grounded in the official Flink CDC and Iceberg
docs (L6's upsert-changelog/primary-key insight quoted from the MongoDB CDC connector
docs). Glossary extended with the new terms (upsert changelog, `source.monitor-interval`,
Hadoop/REST catalog, atomic commit, format-version 2 / `write.upsert.enabled`,
at-most-once). Lessons index activated for all nine; full nav chain 1→9.

## Next session

Lesson 3: stand up Flink SQL in Docker and actually read job-history-style files into a
table. This is the first lesson that can be marked "verified against a real run" — so the
work is to pick a concrete, reproducible Docker image/compose and run it, capturing real
output, before publishing.

## Open / to confirm

- Which Flink + Iceberg runtime versions to pin for the Docker lessons (Dremio's tutorial
  used Flink 1.16 + Scala 2.12; check current stable before committing).
- Whether to point Lesson 7's Iceberg sink at the real Polaris server from
  `learn-apache-polaris` (closes the loop) or keep it filesystem-only for simplicity.
- Whether Ian wants a real MongoDB replica set stood up for the CDC lesson, or CDC taught
  as close-reading until a later hands-on pass.
