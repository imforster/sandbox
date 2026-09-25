# Apache Polaris Resources

## Primary (official — the source of truth)

- **[Apache Polaris](https://polaris.apache.org/)**
  Project homepage. Overview of Polaris as an Iceberg REST catalog and its broader
  positioning as a lakehouse catalog. Use for: course grounding on what Polaris is and
  who maintains it (donated by Snowflake to the ASF).
- **[Polaris Quickstart guide (1.7.0)](https://polaris.apache.org/releases/1.7.0/getting-started/quick-start/)**
  The Docker Compose setup this course's Modules 0–5 were verified against (Polaris +
  Spark on a shared network). Use for: standing up your own local server.
- **[Iceberg REST Catalog Open API spec](https://github.com/apache/iceberg/blob/main/open-api/rest-catalog-open-api.yaml)**
  The actual protocol Polaris implements — every endpoint used in Modules 3–5 traces
  back to this spec. Use for: exact request/response shapes, status codes.
- **[Polaris Generic Table docs (1.7.0)](https://polaris.apache.org/releases/1.7.0/generic-table/)**
  Primary source for Module 6 — what a Generic Table records, and what it deliberately
  doesn't (schema, commit coordination, credential vending).
- **[Polaris Federation overview (1.7.0)](https://polaris.apache.org/releases/1.7.0/federation/)**
  Primary source for Module 7 — what catalog federation is and which backends Polaris
  ships integrations for.
- **[Polaris Hive Metastore Federation guide (1.7.0)](https://polaris.apache.org/releases/1.7.0/federation/hive-metastore-federation/)**
  The specific federation integration read closely in Module 7's exercise.
- **[Polaris server configuration reference](https://polaris.apache.org/releases/1.7.0/configuration/)**
  Source for `metaStoreManager.type` and other persistence-backend settings referenced
  in Module 8.

## Secondary

- **[Apache Iceberg documentation](https://iceberg.apache.org/docs/latest/)**
  The table format Polaris catalogs by default. Use for: what a snapshot, manifest, and
  commit actually are, underneath the REST calls in Modules 3–5.
- **[Iceberg Spark integration docs](https://iceberg.apache.org/docs/latest/spark-configuration/)**
  Reference for `spark.sql.catalog.<name>.*` properties used in Module 4, including
  `catalog-impl`, `credential`, and `token-refresh-enabled`.
- **[OAuth 2.0 Client Credentials Grant (RFC 6749 §4.4)](https://datatracker.ietf.org/doc/html/rfc6749#section-4.4)**
  The auth flow Module 3 performs against `/api/catalog/v1/oauth/tokens`.

## Wisdom (community)

- **[Apache Polaris mailing lists](https://polaris.apache.org/community/)**
  `dev@polaris.apache.org` — real design discussion and troubleshooting from the
  maintainers.
- **[Apache Polaris GitHub issues](https://github.com/apache/polaris/issues)**
  Real bugs, edge cases, and RBAC/federation discussions.
- **[Apache Polaris Slack](https://polaris.apache.org/community/)**
  Linked from the community page — active channel for quickstart and deployment
  questions.

## To explore

- [ ] Point a second engine (Trino, DuckDB, or Flink) at the Module 4 catalog with a
      Module 5 scoped-down principal, and confirm it sees the same table state.
- [ ] Stand up the `eclipse-link` (JDBC) persistence backend locally instead of
      `in-memory`, and confirm catalog state survives a container restart.
- [ ] Federate a real external Hive Metastore or BigQuery Metastore end to end, rather
      than reading the docs only (Module 7's current scope).
- [ ] Credential vending for Iceberg tables in depth — how Polaris hands out short-lived,
      scoped storage credentials per request, referenced but not exercised in Module 6.
