# Data Lakehouse Resources

## Knowledge

- [Paper: "The Data Lakehouse: Data Warehousing and More", Mazumdar, Hughes, Onofré (arXiv 2310.08697, Oct 2023)](https://arxiv.org/abs/2310.08697)
  The source for every lesson here. Full text read. Use for: components, capabilities, challenges, lakehouse traits, worked example. Vendor-authored (Dremio): treat claims as arguments, not measurements.
- [Apache Iceberg table spec](https://iceberg.apache.org/spec/)
  Official specification of the table format used in the paper's example. Page loads; detail not yet verified for lessons. Use for: snapshots, metadata, commits (Lessons 5 and 6, to read).
- [Apache Iceberg: evolution](https://iceberg.apache.org/docs/latest/evolution/)
  Official docs on schema, partition, and sort order evolution. Use for: checking the paper's schema evolution claims (to read).
- [Paper: "Lakehouse: A New Generation of Open Platforms that Unify Data Warehousing and Advanced Analytics", Armbrust, Ghodsi, Xin, Zaharia (CIDR 2021)](https://mail.vldb.org/cidrdb/papers/2021/cidr2021_paper17.pdf)
  The original lakehouse paper, cited by the source paper. Abstract confirmed via the [CIDR listing](https://vldb.org/cidrdb/2021/lakehouse-a-new-generation-of-open-platforms-that-unify-data-warehousing-and-advanced-analytics.html); full text not yet read. Use for: an independent definition of the lakehouse and its TPC-DS claim. Authors are from the lakehouse vendor side (Databricks research page hosts it), so still an argument.
- [Paper: "Analyzing and Comparing Lakehouse Storage Systems", Jain, Kraft, Power, Das, Stoica, Zaharia (CIDR 2023)](https://vldb.org/cidrdb/papers/2023/p92-jain.pdf)
  Compares the internal designs and performance of Delta Lake, Apache Hudi, and Apache Iceberg, and releases the LHBench benchmark. Full text read. Authors are at UC Berkeley, Stanford, and Databricks. Tested 2022 versions on Spark and EMR with default settings. Use for: the table format comparison outcome (Lesson 8). Not a neutral audit and not current.
- [Paper: "LST-Bench: Benchmarking Log-Structured Tables in the Cloud", Camacho-Rodríguez et al. (Proc. ACM Manag. Data 2024, arXiv 2305.01120)](https://arxiv.org/abs/2305.01120)
  Open-source framework for benchmarking Delta Lake, Iceberg, and Hudi on mutable workloads. Abstract confirmed; full text not yet read. Use for: how to test table formats on your own workload (code at github.com/microsoft/lst-bench).
- [Paper: "Delta Lake: High-Performance ACID Table Storage over Cloud Object Stores", Armbrust et al. (VLDB 2020)](https://vldb.org/pvldb/vol13/p3411-armbrust.pdf)
  Design of one table format: a transaction log over object storage using optimistic concurrency. Metadata confirmed via search; full text not yet read. Use for: how a table format delivers ACID on object stores (deepens Lesson 6).

## Wisdom (Communities)

- None added yet. Candidates to vet: Apache Iceberg community page and mailing lists.

## Gaps

- No source yet for a neutral reference architecture guide (reference setup outcome). Search found none worth adding.
- Independent benchmark results are conflicting. Search surfaced vendor-authored and commissioned benchmarks plus low-visibility 2025 to 2026 studies, which are left out until vetted. Plan: use LST-Bench or LHBench on your own workload.
- Full texts of the CIDR 2021, LST-Bench, and Delta Lake VLDB papers still need to be read before lessons cite them for specific claims.
- Newer evidence: the CIDR 2023 results use 2022 versions, so a current, independent comparison is still needed.
