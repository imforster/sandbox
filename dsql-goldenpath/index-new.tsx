import React, { useState } from "react";
import {
  Check,
  ChevronRight,
  Book,
  Code,
  Shield,
  Zap,
  Globe,
  Database,
} from "lucide-react";

const OnboardingGuide = () => {
  const [activePhase, setActivePhase] = useState(0);
  const [completedSteps, setCompletedSteps] = useState({});

  const toggleStep = (phaseIdx, stepIdx) => {
    const key = `${phaseIdx}-${stepIdx}`;
    setCompletedSteps((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const phases = [
    {
      title: "Phase 1: Core Concepts",
      icon: Book,
      duration: "30 min",
      steps: [
        {
          title: "What is Aurora DSQL?",
          content:
            "Serverless, distributed PostgreSQL-compatible database with 99.99% single-region availability",
          keyPoints: [
            "No infrastructure to manage",
            "Automatic scaling",
            "Active-active architecture",
            "PostgreSQL version 16 compatible",
          ],
          page: "p.1",
          link: "https://docs.aws.amazon.com/aurora-dsql/latest/userguide/what-is-aurora-dsql.html#aurora-dsql-overview",
        },
        {
          title: "Key Architecture Differences",
          content:
            "Understanding how Aurora DSQL differs from traditional PostgreSQL",
          keyPoints: [
            "Optimistic Concurrency Control (OCC) - lock-free",
            "Asynchronous DDL operations",
            "Distributed storage across 3 AZs",
            "No heap storage - all data indexed",
          ],
          page: "p.40",
          link: "https://docs.aws.amazon.com/aurora-dsql/latest/userguide/working-with.html#dsql-pg-overview-arch",
        },
        {
          title: "Region & Multi-Region Setup",
          content: "Available regions and multi-region capabilities",
          keyPoints: [
            "11 AWS regions available",
            "Multi-region clusters for 99.999% availability",
            "Witness regions for quorum (no endpoints)",
            "Must create within same region set",
          ],
          page: "p.2-4",
          link: "https://docs.aws.amazon.com/aurora-dsql/latest/userguide/what-is-aurora-dsql.html#region-availability",
        },
      ],
    },
    {
      title: "Phase 2: Quick Start",
      icon: Zap,
      duration: "20 min",
      steps: [
        {
          title: "Prerequisites Setup",
          content: "Install required tools and configure IAM",
          keyPoints: [
            "IAM permissions: dsql:CreateCluster, dsql:DbConnectAdmin",
            "Install PostgreSQL 17 client (psql)",
            "AWS CLI configured",
            "Python 3.8+ (for token generation)",
          ],
          page: "p.6",
          link: "https://docs.aws.amazon.com/aurora-dsql/latest/userguide/getting-started.html#getting-started-prerequisites",
        },
        {
          title: "Create Your First Cluster",
          content: "Console or CLI cluster creation",
          keyPoints: [
            "Console: DSQL → Create Cluster → Single-Region",
            "Default: AWS owned encryption key",
            "Optional: Custom KMS key, deletion protection",
            "Cluster becomes ACTIVE in ~2 minutes",
          ],
          page: "p.12",
          link: "https://docs.aws.amazon.com/aurora-dsql/latest/userguide/getting-started.html#getting-started-create-cluster",
        },
        {
          title: "Connect to Cluster",
          content: "Generate token and connect with psql",
          keyPoints: [
            "Generate token: aws dsql generate-db-connect-admin-auth-token",
            "Token valid for 15 min (default) to 1 week",
            "Connect: PGSSLMODE=require psql -h <endpoint> -U admin",
            "Connection lasts up to 1 hour",
          ],
          page: "p.13, 24-27",
          link: "https://docs.aws.amazon.com/aurora-dsql/latest/userguide/getting-started.html#connect-dsql-cluster",
        },
        {
          title: "Run Sample SQL",
          content: "Test with basic operations",
          keyPoints: [
            "CREATE SCHEMA, CREATE TABLE with UUID primary key",
            "CREATE INDEX ASYNC for existing tables",
            "INSERT, SELECT, JOIN operations",
            "PostgreSQL syntax works with compatibility limits",
          ],
          page: "p.14-15",
          link: "https://docs.aws.amazon.com/aurora-dsql/latest/userguide/getting-started.html#getting-started-sql",
        },
      ],
    },
    {
      title: "Phase 3: Authentication & Security",
      icon: Shield,
      duration: "1 hour",
      steps: [
        {
          title: "IAM Authentication Flow",
          content: "How IAM integrates with PostgreSQL roles",
          keyPoints: [
            "IAM provides authentication tokens",
            "PostgreSQL roles control database permissions",
            "admin role: pre-configured, use dsql:DbConnectAdmin",
            "Custom roles: create with CREATE ROLE, grant IAM with AWS IAM GRANT",
          ],
          page: "p.19-23, 36-38",
          link: "https://docs.aws.amazon.com/aurora-dsql/latest/userguide/SECTION_authentication-token.html#authentication-token-console",
        },
        {
          title: "Create Custom Database Roles",
          content: "Set up non-admin users",
          keyPoints: [
            "1. CREATE ROLE myuser WITH LOGIN",
            "2. AWS IAM GRANT myuser TO 'arn:aws:iam::...:role/MyRole'",
            "3. GRANT permissions (SELECT, INSERT, etc.)",
            "4. IAM policy: dsql:DbConnect action",
          ],
          page: "p.36-38",
          link: "https://docs.aws.amazon.com/aurora-dsql/latest/userguide/using-database-and-iam-roles.html#dsql-iam-roles",
        },
        {
          title: "Encryption & KMS",
          content: "Data protection at rest and in transit",
          keyPoints: [
            "Default: AWS owned KMS key (free)",
            "Optional: Customer managed key (KMS charges apply)",
            "All connections require TLS 1.2+",
            "Encryption status: ENABLED, UPDATING, KMS_KEY_INACCESSIBLE",
          ],
          page: "p.230-251",
          link: "https://docs.aws.amazon.com/aurora-dsql/latest/userguide/data-encryption.html",
        },
        {
          title: "Resource-Based Policies",
          content: "Fine-grained cluster access control",
          keyPoints: [
            "Block public internet access (require VPC)",
            "Restrict by Organization/OU",
            "Example: Deny if aws:SourceVpc is null",
            "Separate policy per region in multi-region clusters",
          ],
          page: "p.265-283",
          link: "https://docs.aws.amazon.com/aurora-dsql/latest/userguide/resource-based-policies.html",
        },
      ],
    },
    {
      title: "Phase 4: Working with Data",
      icon: Database,
      duration: "1.5 hours",
      steps: [
        {
          title: "Primary Key Strategy",
          content: "Critical design decision for performance",
          keyPoints: [
            "Use random keys (UUID) for high-write tables",
            "Avoid monotonic integers (creates hot partition)",
            "Max 1 KiB combined key size, max 8 columns",
            "Cannot change primary key after creation",
          ],
          page: "p.67-68",
          link: "https://docs.aws.amazon.com/aurora-dsql/latest/userguide/working-with-primary-keys.html",
        },
        {
          title: "Asynchronous Indexes",
          content: "Non-blocking index creation",
          keyPoints: [
            "CREATE INDEX ASYNC on table(columns)",
            "Returns job_id immediately",
            "Monitor with: SELECT * FROM sys.jobs WHERE job_id='...'",
            "Use sys.wait_for_job() to block until complete",
          ],
          page: "p.68-74",
          link: "https://docs.aws.amazon.com/aurora-dsql/latest/userguide/working-with-create-index-async.html",
        },
        {
          title: "Supported SQL Features",
          content: "What works and what doesn't",
          keyPoints: [
            "✓ Joins, CTEs, subqueries, window functions",
            "✓ CREATE TABLE, ALTER TABLE, indexes, views",
            "✗ Triggers, foreign keys, sequences, partitions",
            "✗ Temporary tables, TRUNCATE, extensions",
          ],
          page: "p.41-64",
          link: "https://docs.aws.amazon.com/aurora-dsql/latest/userguide/working-with-postgresql-compatibility-supported-sql-features.html",
        },
        {
          title: "Transaction Management",
          content: "Understanding OCC and limits",
          keyPoints: [
            "Optimistic concurrency - no locks/deadlocks",
            "Max 5 min transaction time, 3,000 row mutations",
            "Conflicts return OCC error - retry with exponential backoff",
            "Can't mix DDL and DML in same transaction",
          ],
          page: "p.65-66",
          link: "https://docs.aws.amazon.com/aurora-dsql/latest/userguide/working-with-concurrency-control.html",
        },
      ],
    },
    {
      title: "Phase 5: Multi-Region & Advanced",
      icon: Globe,
      duration: "1 hour",
      steps: [
        {
          title: "Multi-Region Cluster Setup",
          content: "High availability across regions",
          keyPoints: [
            "Create cluster 1 with witness region",
            "Create cluster 2 in different region, reference cluster 1",
            "Update cluster 1 with cluster 2 ARN",
            "Both become ACTIVE - two endpoints, one logical database",
          ],
          page: "p.16-18, 134-194",
          link: "https://docs.aws.amazon.com/aurora-dsql/latest/userguide/getting-started.html#getting-started-multi-region",
        },
        {
          title: "AWS PrivateLink Integration",
          content: "Private connectivity without public IPs",
          keyPoints: [
            "Two endpoint types: management (API) and connection (psql)",
            "Get service name: aws dsql get-vpc-endpoint-service-name",
            "Create VPC endpoint with service name",
            "Hostname format: <cluster>.<service-id>.<region>.on.aws",
          ],
          page: "p.294-303",
          link: "https://docs.aws.amazon.com/aurora-dsql/latest/userguide/privatelink-managing-clusters.html",
        },
        {
          title: "Backup & Restore",
          content: "Integration with AWS Backup",
          keyPoints: [
            "Full cluster backups via AWS Backup",
            "On-demand and scheduled backups",
            "Cross-region/cross-account copy",
            "Restore creates new cluster (source preserved)",
          ],
          page: "p.206-208",
          link: "https://docs.aws.amazon.com/aurora-dsql/latest/userguide/backup-aurora-dsql.html",
        },
        {
          title: "Monitoring & Troubleshooting",
          content: "CloudWatch metrics and common issues",
          keyPoints: [
            "Metrics: ReadDPU, WriteDPU, ComputeDPU, OccConflicts",
            "CloudTrail logs all API calls and connections",
            "Common errors: OC000 (conflict), OC001 (schema conflict)",
            "Connection timeout: check security groups, token expiry",
          ],
          page: "p.209-217, 317-320",
          link: "https://docs.aws.amazon.com/aurora-dsql/latest/userguide/monitoring-overview.html",
        },
      ],
    },
    {
      title: "Phase 6: Production Readiness",
      icon: Code,
      duration: "2 hours",
      steps: [
        {
          title: "Driver & ORM Integration",
          content: "Connect from applications",
          keyPoints: [
            "Drivers: psycopg, node-postgres, pgjdbc, pg (Ruby)",
            "ORMs: SQLAlchemy (Python), Sequelize (JS), Hibernate (Java)",
            "JDBC wrapper: handles IAM token auto-refresh",
            "Never use localStorage/sessionStorage in artifacts",
          ],
          page: "p.197-205",
          link: "https://docs.aws.amazon.com/aurora-dsql/latest/userguide/programming-with.html",
        },
        {
          title: "Schema Design Best Practices",
          content: "Optimize for distributed architecture",
          keyPoints: [
            "Denormalize when appropriate (no foreign keys)",
            "Use INCLUDE columns in indexes for covering queries",
            "Keep row size under 2 MiB",
            "Max 1,000 tables, 24 indexes per table",
          ],
          page: "p.312-315",
          link: "https://docs.aws.amazon.com/aurora-dsql/latest/userguide/CHAP_quotas.html#SECTION_database-limits",
        },
        {
          title: "Query Optimization",
          content: "Reading EXPLAIN plans",
          keyPoints: [
            "Index Only Scan: best (no table lookup)",
            "Index Scan: good (includes lookup)",
            "Full Scan: use only for small tables",
            "Check filters: Index Cond > Storage Filter > QP Filter",
          ],
          page: "p.85-91",
          link: "https://docs.aws.amazon.com/aurora-dsql/latest/userguide/working-with-explain-plans.html",
        },
        {
          title: "Production Checklist",
          content: "Before going live",
          keyPoints: [
            "✓ Custom roles (don't use admin in production)",
            "✓ Resource-based policies (block public if needed)",
            "✓ CloudWatch alarms for OccConflicts, DPU usage",
            "✓ Backup plan configured in AWS Backup",
            "✓ Connection pooling with retry logic",
            "✓ Monitor sys.jobs for failed async operations",
          ],
          page: "p.305-307",
          link: "https://docs.aws.amazon.com/aurora-dsql/latest/userguide/best-practices-security.html",
        },
      ],
    },
  ];

  const getCompletionPercentage = (phaseIdx) => {
    const phaseSteps = phases[phaseIdx].steps.length;
    const completed = Object.keys(completedSteps).filter(
      (key) => key.startsWith(`${phaseIdx}-`) && completedSteps[key],
    ).length;
    return Math.round((completed / phaseSteps) * 100);
  };

  return (
    <div className="aws-page min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="aws-header">
          <h1>Aurora DSQL Onboarding Guide</h1>
          <p>Structured learning path from zero to production-ready</p>
          <div className="aws-info-bar">
            <span className="aws-badge blue">Total Time: ~7 hours</span>
            <span className="aws-badge green">
              Format: Hands-on + Reference
            </span>
            <span className="aws-badge gray">
              Difficulty: Beginner → Advanced
            </span>
          </div>
        </div>

        {/* Phase Navigation */}
        <div className="aws-grid">
          {phases.map((phase, idx) => {
            const Icon = phase.icon;
            const completion = getCompletionPercentage(idx);
            return (
              <div
                key={idx}
                onClick={() => setActivePhase(idx)}
                className={`aws-card ${activePhase === idx ? "active" : ""}`}
              >
                <div className="aws-card-icon">
                  <Icon size={24} />
                </div>
                <div className="aws-card-content">
                  <div className="title">{phase.title}</div>
                  <div className="duration">{phase.duration}</div>
                  {completion > 0 && (
                    <div
                      style={{
                        width: "100%",
                        height: "4px",
                        backgroundColor: "var(--card-border)",
                        borderRadius: "2px",
                        marginTop: "0.5rem",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          width: `${completion}%`,
                          height: "100%",
                          backgroundColor: "var(--badge-green)",
                          transition: "width 0.3s ease",
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Active Phase Content */}
        <div className="aws-section">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
            {(() => {
              const Icon = phases[activePhase].icon;
              return (
                <div className="aws-card-icon">
                  <Icon size={32} />
                </div>
              );
            })()}
            <div>
              <h2>{phases[activePhase].title}</h2>
              <p>Estimated time: {phases[activePhase].duration}</p>
            </div>
          </div>

          <div className="space-y-6">
            {phases[activePhase].steps.map((step, stepIdx) => {
              const isCompleted = completedSteps[`${activePhase}-${stepIdx}`];
              return (
                <div
                  key={stepIdx}
                  className="aws-card"
                  style={{
                    borderColor: isCompleted
                      ? "var(--badge-green)"
                      : "var(--card-border)",
                    backgroundColor: isCompleted ? "#0a2e0f" : "var(--bg-card)",
                  }}
                >
                  <input
                    type="checkbox"
                    checked={isCompleted}
                    onChange={() => toggleStep(activePhase, stepIdx)}
                    className="w-5 h-5 rounded"
                    style={{
                      accentColor: "var(--badge-green)",
                    }}
                  />

                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                      <h3
                        className="text-lg font-bold"
                        style={{ color: "var(--accent-orange)" }}
                      >
                        {stepIdx + 1}. {step.title}
                      </h3>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="aws-badge gray text-xs">
                          {step.page}
                        </span>
                        {step.link && (
                          <a
                            href={step.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="aws-badge blue text-xs"
                            style={{ textDecoration: "none" }}
                          >
                            View Guide →
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="mb-4" style={{ color: "var(--text-muted)" }}>
                      {step.content}
                    </p>

                    <div
                      style={{
                        backgroundColor: "var(--bg-page)",
                        padding: "1rem",
                        borderRadius: "6px",
                        border: "1px solid var(--card-border)",
                      }}
                    >
                      <h4
                        className="font-semibold mb-2 flex items-center gap-2"
                        style={{ color: "var(--text-primary)" }}
                      >
                        <ChevronRight size={16} />
                        Key Points:
                      </h4>
                      <ul className="space-y-1">
                        {step.keyPoints.map((point, pIdx) => (
                          <li
                            key={pIdx}
                            className="text-sm flex items-start gap-2"
                            style={{ color: "var(--text-muted)" }}
                          >
                            <span style={{ color: "var(--badge-blue)" }}>
                              •
                            </span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation */}
          <div
            className="flex flex-col sm:flex-row justify-between mt-8 pt-6 gap-4"
            style={{ borderTop: "1px solid var(--card-border)" }}
          >
            <button
              onClick={() => setActivePhase(Math.max(0, activePhase - 1))}
              disabled={activePhase === 0}
              className="aws-badge gray px-6 py-3 disabled:opacity-50 text-center"
            >
              ← Previous Phase
            </button>
            <button
              onClick={() =>
                setActivePhase(Math.min(phases.length - 1, activePhase + 1))
              }
              disabled={activePhase === phases.length - 1}
              className="px-6 py-3 rounded font-medium disabled:opacity-50 text-center"
              style={{
                backgroundColor: "var(--accent-orange)",
                color: "#fff",
              }}
            >
              Next Phase →
            </button>
          </div>
        </div>

        {/* Quick Reference Footer */}
        <div className="aws-section">
          <h2>Quick Reference</h2>
          <div className="aws-grid">
            <div>
              <h4
                className="font-semibold mb-2"
                style={{ color: "var(--accent-orange)" }}
              >
                Essential Commands
              </h4>
              <div className="space-y-2">
                <code className="aws-badge gray block">
                  aws dsql create-cluster
                </code>
                <code className="aws-badge gray block">
                  generate-db-connect-admin-auth-token
                </code>
                <code className="aws-badge gray block">CREATE INDEX ASYNC</code>
              </div>
            </div>
            <div>
              <h4
                className="font-semibold mb-2"
                style={{ color: "var(--accent-orange)" }}
              >
                Key Limits
              </h4>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                • Max row mutations: 3,000/txn
              </p>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                • Max transaction time: 5 min
              </p>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                • Max connections: 10,000
              </p>
            </div>
            <div>
              <h4
                className="font-semibold mb-2"
                style={{ color: "var(--accent-orange)" }}
              >
                Important Pages
              </h4>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                • SQL compatibility: p.41-64
              </p>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                • Troubleshooting: p.317-320
              </p>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                • API reference: p.316
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingGuide;
