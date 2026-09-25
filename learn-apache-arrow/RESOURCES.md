# Apache Arrow Resources

## Primary (official — the source of truth)

- **[Apache Arrow](https://arrow.apache.org/)**
  Project homepage. Overview of the columnar in-memory format, the language bindings,
  and the broader ecosystem (Flight, Flight SQL, Datasets, ADBC). Use for: course
  grounding on what Arrow is and who maintains it.
- **[Apache Arrow — Python (pyarrow) documentation](https://arrow.apache.org/docs/python/index.html)**
  Primary reference for the API used in every lesson: `pa.array`, `pa.schema`,
  `pa.record_batch`, `pa.Table`, `pyarrow.compute`, `pyarrow.parquet`, `pyarrow.ipc`,
  `pyarrow.flight`. Use for: exact signatures and version-specific behavior.
- **[Arrow Columnar Format specification](https://arrow.apache.org/docs/format/Columnar.html)**
  The actual memory-layout spec that makes zero-copy interop possible. Use for: Module 1
  (What Arrow Is) and Module 3 (Array / validity bitmap) grounding.
- **[Arrow Flight RPC docs](https://arrow.apache.org/docs/format/Flight.html)**
  Primary source for `FlightDescriptor`, `FlightInfo`, `Ticket`, `do_get`/`do_put`. Use
  for: Lesson 8.
- **[Arrow Flight SQL protocol docs](https://arrow.apache.org/docs/format/FlightSql.html)**
  Primary source for `CommandStatementQuery` and the other Flight SQL command types, and
  how they layer on plain Flight. Use for: Lesson 9 (reading-only — no bundled server).
- **[Apache Parquet](https://parquet.apache.org/)**
  On-disk columnar format Arrow interoperates with closely. Use for: Lesson 7 (column
  projection, row-group statistics, predicate pushdown).

## Secondary

- **[ADBC (Arrow Database Connectivity)](https://arrow.apache.org/adbc/)**
  The client API family built around Flight SQL that hands back Arrow batches instead of
  row-at-a-time cursor fetches. Referenced in Lesson 9.
- **[pandas — Arrow interoperability](https://pandas.pydata.org/docs/user_guide/pyarrow.html)**
  The `to_pandas()` / `Table.from_pandas()` round-trip path used in Lessons 1 and 5.

## Wisdom (community)

- **[Apache Arrow mailing lists](https://arrow.apache.org/community/)**
  `dev@arrow.apache.org` and `user@arrow.apache.org` — real design discussion and
  troubleshooting from the maintainers.
- **[Apache Arrow GitHub issues](https://github.com/apache/arrow/issues)**
  Real bugs, edge cases, and performance discussions across all language bindings.
- **[Stack Overflow: apache-arrow tag](https://stackoverflow.com/questions/tagged/apache-arrow)**
  Practical pyarrow troubleshooting.

## To explore

- [ ] `pyarrow.dataset` for partitioned multi-file Parquet reads with pushdown across
      many files at once (flagged as the natural next step after Lesson 9).
- [ ] A real Flight SQL server (DuckDB, Dremio, or InfluxDB 3) to make Lesson 9 hands-on
      instead of reading-only.
- [ ] Arrow's C++/Rust/Go bindings, if a non-Python project ever needs zero-copy interop
      with this course's Python examples.
