# Flink Connectors Resources

## Primary (official — the source of truth)

- **[Flink SQL & Table Connectors — Overview](https://nightlies.apache.org/flink/flink-docs-stable/docs/connectors/table/overview/)**
  The canonical list of built-in sources, sinks, and formats. Confirms which connectors
  are source-only, sink-only, or both. Use for: the connector map in Lesson 2, exact
  `'connector'` option names.
- **[Flink FileSystem Connector](https://nightlies.apache.org/flink/flink-docs-stable/docs/connectors/table/filesystem/)**
  How Flink reads/writes directories of files, bounded vs. continuous (`source.monitor-interval`),
  partitioning. Use for: the job-history-logs source in Lessons 3–4.
- **[Flink MongoDB Connector](https://nightlies.apache.org/flink/flink-docs-stable/docs/connectors/table/mongodb/)**
  The non-CDC MongoDB connector (source + sink, lookup). Use for: contrasting a bounded
  Mongo read against CDC in Lesson 6.
- **[Flink CDC — MongoDB CDC Connector](https://nightlies.apache.org/flink/flink-cdc-docs-stable/docs/connectors/flink-sources/mongodb-cdc/)**
  Debezium-based change capture from MongoDB, source-table only. Snapshot + incremental.
  Use for: the streaming Mongo source in Lesson 6.
- **[Flink CDC — Overview](https://nightlies.apache.org/flink/flink-cdc-docs-stable/docs/connectors/flink-sources/overview/)**
  What CDC sources are and the Debezium engine underneath. Use for: why CDC emits a
  changelog, not an append stream.
- **[Iceberg Flink Getting Started](https://iceberg.apache.org/docs/latest/flink/)**
  The official `iceberg-flink-runtime` integration — catalog config, `CREATE CATALOG`,
  read/write DDL. Use for: the Iceberg sink in Lesson 5 and the catalog in Lesson 7.
- **[Flink SQL — CREATE Statements](https://nightlies.apache.org/flink/flink-docs-stable/docs/dev/table/sql/create/)**
  `CREATE TABLE ... WITH (...)` and `CREATE CATALOG` syntax. Use for: every DDL snippet.

## Secondary (client's own vendor — Dremio)

- **[Dremio: Getting Started with Flink SQL and Apache Iceberg](https://www.dremio.com/blog/getting-started-with-flink-sql-and-apache-iceberg/)**
  The client's own walkthrough of the exact pipeline this course teaches — Flink SQL
  client, a catalog, an Iceberg table, insert/read, metadata queries. The closest thing
  to a "house style" reference for the engagement.
- **[Dremio: Apache Polaris with Apache Flink](https://www.dremio.com/blog/apache-polaris-with-apache-flink/)**
  Flink writing to Iceberg through Polaris (`'catalog-type'='rest'` + OAuth). Ties this
  course's sink directly to Ian's existing Polaris course and Dremio's Open Catalog.
- **[Dremio: Using Flink with Apache Iceberg and Nessie](https://www.dremio.com/blog/using-flink-with-apache-iceberg-and-nessie/)**
  Alternative catalog (Nessie, Git-like branching). Use for: the catalog-choice lesson.
- **[Dremio Arctic — Flink engine docs](https://docs.dremio.com/cloud/arctic/engines/flink)**
  How Dremio's managed catalog authenticates a Flink engine (PAT + RBAC). Use for: the
  "map to the real engagement" callouts.

## Reference (table format underneath)

- **[Apache Iceberg Documentation](https://iceberg.apache.org/docs/latest/)**
  What a snapshot, manifest, and metadata file actually are — what Flink produces and
  Dremio reads. Cross-references the `learn-apache-polaris` course.

## Wisdom (community)

- **[Apache Flink user mailing list](https://flink.apache.org/community.html)**
  `user@flink.apache.org` — real connector troubleshooting from committers and operators.
- **[Apache Flink Slack](https://flink.apache.org/community.html#slack)**
  Active, linked from the community page — fastest for "which connector/format do I need"
  questions.
- **[Flink CDC GitHub issues](https://github.com/apache/flink-cdc/issues)**
  Real MongoDB CDC edge cases (snapshot behaviour, schema changes, incremental mode).
- **[Dremio Community](https://www.dremio.com/community/)** / **[Subsurface](https://www.dremio.com/subsurface/)**
  The client's own community — lakehouse + Iceberg practitioners, useful for the Dremio
  side of the pipeline.

## To explore

- [ ] Run a real MongoDB CDC source against a local Mongo replica set and watch a
      changelog stream (insert → update → delete) land in Iceberg.
- [ ] Point the Iceberg sink at the Polaris server from `learn-apache-polaris` instead of
      a local filesystem catalog, using `'catalog-type'='rest'`.
- [ ] Query the resulting Iceberg table from a real Dremio Community Edition instance to
      close the loop end to end.
- [ ] Compare FileSystem continuous-mode ingestion against a Kafka source for the
      job-history logs — latency vs. operational cost.
