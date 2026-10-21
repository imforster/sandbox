# Mission: Flink Connectors — Sources and Sinks for a Dremio Engagement

## Why this course exists

A new client, **Dremio**, needs working fluency in **Apache Flink's connector surface** —
the input sources data arrives from and the output sinks data lands in. Ian is new to
both Flink and Iceberg and needs to explore the *capability space* of Flink connectors,
not just one happy-path pipeline, so he can make and defend design decisions on the
engagement.

The client's concrete setup drives the two source types this course grounds every lesson
in:

1. **MongoDB** — the client stores operational information in MongoDB. Flink reads it two
   ways: as a bounded **MongoDB source** (snapshot/lookup) or as a streaming **MongoDB
   CDC source** (Debezium-based change capture, source-table only).
2. **Dremio job-history logs** — the client pulls information from job-execution-engine
   history logs. These arrive as **files** (JSON/CSV/log lines) read through Flink's
   **FileSystem connector**, in either bounded (batch a directory) or continuous
   (new files as they land) mode.

The **sink** throughout is **Apache Iceberg**, because Dremio queries Iceberg tables
natively. Flink writes to Iceberg through a **catalog** — and Dremio's own Open Catalog
is **Apache Polaris**, which Ian already has a course on (`learn-apache-polaris`). This
course is the ingestion half of that story: Flink fills the tables, Dremio reads them.

## What success looks like

By the end, Ian can:

1. Draw the Flink connector model — a job is sources → transforms → sinks, and a
   connector is declared as a `CREATE TABLE ... WITH ('connector'='...')` in Flink SQL —
   and explain the difference between a *connector* and a *format*.
2. Enumerate the sources and sinks relevant to the client (FileSystem, MongoDB, MongoDB
   CDC, Iceberg) and name the key tradeoff of each (bounded vs. unbounded, append vs.
   changelog, source-only vs. source-and-sink).
3. Stand up a local Flink SQL environment and read a directory of job-history-style
   files into a Flink table, bounded.
4. Write that table into an **Iceberg** sink through a catalog, and confirm the Iceberg
   table exists on disk (metadata + data files).
5. Explain how a **MongoDB source** differs from a **MongoDB CDC source**, and why CDC
   produces a changelog stream rather than an append stream.
6. Explain what changes when the FileSystem source runs in **continuous** mode, and what
   "exactly-once" means for a file-to-Iceberg pipeline.
7. Connect the Iceberg sink to a **catalog** (filesystem/Hadoop locally; Polaris/Nessie/
   Glue in a real deployment) and explain why Dremio can then query the result.
8. Make a defensible recommendation for the client's two pipelines (Mongo → Iceberg,
   job-logs → Iceberg): which source mode, which delivery guarantee, which catalog.

## Constraints

- Ian is **new to both Flink and Iceberg** — early lessons prioritise knowledge
  acquisition (low difficulty, working memory protected) before skill drills.
- Lessons default to **Flink SQL** (the laziest path that works) before any Java
  DataStream/Table API — matches Ian's one-simplicity rule and Dremio's own tutorial.
- Local, reproducible environment first (Docker / Flink SQL Client). Managed/cloud
  (AWS, Dremio Cloud, Polaris) is mapped conceptually, not required to run.
- Ground connector facts in the **official Flink docs** and the **client's own vendor
  docs** (Dremio blog/docs) — never invented connector options or version claims.
- Reuse the `learn-apache-polaris` course conventions byte-for-byte (CSS, dark mode,
  hamburger nav, quiz markup). Catalog section ties back to the Polaris course.

## Out of scope (for now)

- Flink DataStream/Table **Java** API in depth — flagged as the next step once SQL
  fluency lands.
- Standing up a real Dremio engine and querying the Iceberg output end to end — the
  course produces Iceberg tables; querying them from Dremio is the natural follow-on.
- Kafka and other streaming sources the client isn't using — mentioned in the
  connector map for breadth, not drilled.
- Production Flink cluster operations (checkpoint tuning, HA, k8s) beyond what
  "exactly-once file-to-Iceberg" requires conceptually.

## Evolution log

- 2026-10-13 — Course created. Mission scoped from Ian's brief: new Dremio client, needs
  to explore Flink input/output sources; client uses MongoDB and pulls Dremio
  job-history logs. Connector landscape and the Flink-SQL-to-Iceberg path verified
  against the official Flink connector docs and Dremio's own "Getting Started with Flink
  SQL and Apache Iceberg" and "Apache Polaris with Apache Flink" guides before authoring.
- 2026-10-13 — All nine lessons completed in one build-out. Lessons 3–5 verified against
  a real local Flink 1.18.1 + Iceberg 1.6.1 Docker stack (Hadoop catalog, filesystem/JSON
  source); the file→Iceberg write, continuous-mode RUNNING state, and on-disk snapshot
  anatomy are embedded from the actual run. Lessons 6–9 are docs-grounded close-reading
  and a capstone design recommendation. Java DataStream API and querying from a real
  Dremio instance remain the flagged follow-ons.
