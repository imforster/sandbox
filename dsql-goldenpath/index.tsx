import React, { useState } from 'react';
import { Check, ChevronRight, Book, Code, Shield, Zap, Globe, Database } from 'lucide-react';

const OnboardingGuide = () => {
  const [activePhase, setActivePhase] = useState(0);
  const [completedSteps, setCompletedSteps] = useState({});

  const toggleStep = (phaseIdx, stepIdx) => {
    const key = `${phaseIdx}-${stepIdx}`;
    setCompletedSteps(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const phases = [
    {
      title: "Phase 1: Core Concepts",
      icon: Book,
      color: "bg-aws-blue",
      duration: "30 min",
      steps: [
        {
          title: "What is Aurora DSQL?",
          content: "Serverless, distributed PostgreSQL-compatible database with 99.99% single-region availability",
          keyPoints: [
            "No infrastructure to manage",
            "Automatic scaling",
            "Active-active architecture",
            "PostgreSQL version 16 compatible"
          ],
          page: "p.1"
        },
        {
          title: "Key Architecture Differences",
          content: "Understanding how Aurora DSQL differs from traditional PostgreSQL",
          keyPoints: [
            "Optimistic Concurrency Control (OCC) - lock-free",
            "Asynchronous DDL operations",
            "Distributed storage across 3 AZs",
            "No heap storage - all data indexed"
          ],
          page: "p.40"
        },
        {
          title: "Region & Multi-Region Setup",
          content: "Available regions and multi-region capabilities",
          keyPoints: [
            "11 AWS regions available",
            "Multi-region clusters for 99.999% availability",
            "Witness regions for quorum (no endpoints)",
            "Must create within same region set"
          ],
          page: "p.2-4"
        }
      ]
    },
    {
      title: "Phase 2: Quick Start",
      icon: Zap,
      color: "bg-aws-orange",
      duration: "45 min",
      steps: [
        {
          title: "Prerequisites Setup",
          content: "Install required tools and configure IAM",
          keyPoints: [
            "IAM permissions: dsql:CreateCluster, dsql:DbConnectAdmin",
            "Install PostgreSQL 17 client (psql)",
            "AWS CLI configured",
            "Python 3.8+ (for token generation)"
          ],
          page: "p.6"
        },
        {
          title: "Create Your First Cluster",
          content: "Console or CLI cluster creation",
          keyPoints: [
            "Console: DSQL → Create Cluster → Single-Region",
            "Default: AWS owned encryption key",
            "Optional: Custom KMS key, deletion protection",
            "Cluster becomes ACTIVE in ~2 minutes"
          ],
          page: "p.12"
        },
        {
          title: "Connect to Cluster",
          content: "Generate token and connect with psql",
          keyPoints: [
            "Generate token: aws dsql generate-db-connect-admin-auth-token",
            "Token valid for 15 min (default) to 1 week",
            "Connect: PGSSLMODE=require psql -h <endpoint> -U admin",
            "Connection lasts up to 1 hour"
          ],
          page: "p.13, 24-27"
        },
        {
          title: "Run Sample SQL",
          content: "Test with basic operations",
          keyPoints: [
            "CREATE SCHEMA, CREATE TABLE with UUID primary key",
            "CREATE INDEX ASYNC for existing tables",
            "INSERT, SELECT, JOIN operations",
            "PostgreSQL syntax works with compatibility limits"
          ],
          page: "p.14-15"
        }
      ]
    },
    {
      title: "Phase 3: Authentication & Security",
      icon: Shield,
      color: "bg-blue-600",
      duration: "1 hour",
      steps: [
        {
          title: "IAM Authentication Flow",
          content: "How IAM integrates with PostgreSQL roles",
          keyPoints: [
            "IAM provides authentication tokens",
            "PostgreSQL roles control database permissions",
            "admin role: pre-configured, use dsql:DbConnectAdmin",
            "Custom roles: create with CREATE ROLE, grant IAM with AWS IAM GRANT"
          ],
          page: "p.19-23, 36-38"
        },
        {
          title: "Create Custom Database Roles",
          content: "Set up non-admin users",
          keyPoints: [
            "1. CREATE ROLE myuser WITH LOGIN",
            "2. AWS IAM GRANT myuser TO 'arn:aws:iam::...:role/MyRole'",
            "3. GRANT permissions (SELECT, INSERT, etc.)",
            "4. IAM policy: dsql:DbConnect action"
          ],
          page: "p.36-38"
        },
        {
          title: "Encryption & KMS",
          content: "Data protection at rest and in transit",
          keyPoints: [
            "Default: AWS owned KMS key (free)",
            "Optional: Customer managed key (KMS charges apply)",
            "All connections require TLS 1.2+",
            "Encryption status: ENABLED, UPDATING, KMS_KEY_INACCESSIBLE"
          ],
          page: "p.230-251"
        },
        {
          title: "Resource-Based Policies",
          content: "Fine-grained cluster access control",
          keyPoints: [
            "Block public internet access (require VPC)",
            "Restrict by Organization/OU",
            "Example: Deny if aws:SourceVpc is null",
            "Separate policy per region in multi-region clusters"
          ],
          page: "p.265-283"
        }
      ]
    },
    {
      title: "Phase 4: Working with Data",
      icon: Database,
      color: "bg-green-600",
      duration: "1.5 hours",
      steps: [
        {
          title: "Primary Key Strategy",
          content: "Critical design decision for performance",
          keyPoints: [
            "Use random keys (UUID) for high-write tables",
            "Avoid monotonic integers (creates hot partition)",
            "Max 1 KiB combined key size, max 8 columns",
            "Cannot change primary key after creation"
          ],
          page: "p.67-68"
        },
        {
          title: "Asynchronous Indexes",
          content: "Non-blocking index creation",
          keyPoints: [
            "CREATE INDEX ASYNC on table(columns)",
            "Returns job_id immediately",
            "Monitor with: SELECT * FROM sys.jobs WHERE job_id='...'",
            "Use sys.wait_for_job() to block until complete"
          ],
          page: "p.68-74"
        },
        {
          title: "Supported SQL Features",
          content: "What works and what doesn't",
          keyPoints: [
            "✓ Joins, CTEs, subqueries, window functions",
            "✓ CREATE TABLE, ALTER TABLE, indexes, views",
            "✗ Triggers, foreign keys, sequences, partitions",
            "✗ Temporary tables, TRUNCATE, extensions"
          ],
          page: "p.41-64"
        },
        {
          title: "Transaction Management",
          content: "Understanding OCC and limits",
          keyPoints: [
            "Optimistic concurrency - no locks/deadlocks",
            "Max 5 min transaction time, 3,000 row mutations",
            "Conflicts return OCC error - retry with exponential backoff",
            "Can't mix DDL and DML in same transaction"
          ],
          page: "p.65-66"
        }
      ]
    },
    {
      title: "Phase 5: Multi-Region & Advanced",
      icon: Globe,
      color: "bg-aws-orange",
      duration: "1 hour",
      steps: [
        {
          title: "Multi-Region Cluster Setup",
          content: "High availability across regions",
          keyPoints: [
            "Create cluster 1 with witness region",
            "Create cluster 2 in different region, reference cluster 1",
            "Update cluster 1 with cluster 2 ARN",
            "Both become ACTIVE - two endpoints, one logical database"
          ],
          page: "p.16-18, 134-194"
        },
        {
          title: "AWS PrivateLink Integration",
          content: "Private connectivity without public IPs",
          keyPoints: [
            "Two endpoint types: management (API) and connection (psql)",
            "Get service name: aws dsql get-vpc-endpoint-service-name",
            "Create VPC endpoint with service name",
            "Hostname format: <cluster>.<service-id>.<region>.on.aws"
          ],
          page: "p.294-303"
        },
        {
          title: "Backup & Restore",
          content: "Integration with AWS Backup",
          keyPoints: [
            "Full cluster backups via AWS Backup",
            "On-demand and scheduled backups",
            "Cross-region/cross-account copy",
            "Restore creates new cluster (source preserved)"
          ],
          page: "p.206-208"
        },
        {
          title: "Monitoring & Troubleshooting",
          content: "CloudWatch metrics and common issues",
          keyPoints: [
            "Metrics: ReadDPU, WriteDPU, ComputeDPU, OccConflicts",
            "CloudTrail logs all API calls and connections",
            "Common errors: OC000 (conflict), OC001 (schema conflict)",
            "Connection timeout: check security groups, token expiry"
          ],
          page: "p.209-217, 317-320"
        }
      ]
    },
    {
      title: "Phase 6: Production Readiness",
      icon: Code,
      color: "bg-aws-light-blue",
      duration: "2 hours",
      steps: [
        {
          title: "Driver & ORM Integration",
          content: "Connect from applications",
          keyPoints: [
            "Drivers: psycopg, node-postgres, pgjdbc, pg (Ruby)",
            "ORMs: SQLAlchemy (Python), Sequelize (JS), Hibernate (Java)",
            "JDBC wrapper: handles IAM token auto-refresh",
            "Never use localStorage/sessionStorage in artifacts"
          ],
          page: "p.197-205"
        },
        {
          title: "Schema Design Best Practices",
          content: "Optimize for distributed architecture",
          keyPoints: [
            "Denormalize when appropriate (no foreign keys)",
            "Use INCLUDE columns in indexes for covering queries",
            "Keep row size under 2 MiB",
            "Max 1,000 tables, 24 indexes per table"
          ],
          page: "p.312-315"
        },
        {
          title: "Query Optimization",
          content: "Reading EXPLAIN plans",
          keyPoints: [
            "Index Only Scan: best (no table lookup)",
            "Index Scan: good (includes lookup)",
            "Full Scan: use only for small tables",
            "Check filters: Index Cond > Storage Filter > QP Filter"
          ],
          page: "p.85-91"
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
            "✓ Monitor sys.jobs for failed async operations"
          ],
          page: "p.305-307"
        }
      ]
    }
  ];

  const getCompletionPercentage = (phaseIdx) => {
    const phaseSteps = phases[phaseIdx].steps.length;
    const completed = Object.keys(completedSteps).filter(
      key => key.startsWith(`${phaseIdx}-`) && completedSteps[key]
    ).length;
    return Math.round((completed / phaseSteps) * 100);
  };

  return (
    <div className="min-h-screen aws-gradient-bg p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="rounded border-l-4 shadow-lg p-8 mb-8" style={{backgroundColor: 'var(--aws-card-bg)', borderLeftColor: 'var(--aws-accent)'}}>
          <h1 className="text-4xl font-bold text-primary mb-3">
            Aurora DSQL Onboarding Guide
          </h1>
          <p className="text-subtext text-lg mb-4">
            Structured learning path from zero to production-ready
          </p>
          <div className="flex gap-4 text-sm">
            <div className="bg-blue-600 px-4 py-2 rounded-md">
              <span className="font-semibold text-white">Total Time:</span>
              <span className="ml-2 text-white">~7 hours</span>
            </div>
            <div className="bg-green-600 px-4 py-2 rounded-md">
              <span className="font-semibold text-white">Format:</span>
              <span className="ml-2 text-white">Hands-on + Reference</span>
            </div>
            <div className="bg-slate-700 px-4 py-2 rounded-md">
              <span className="font-semibold text-white">Difficulty:</span>
              <span className="ml-2 text-white">Beginner → Advanced</span>
            </div>
          </div>
        </div>

        {/* Phase Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {phases.map((phase, idx) => {
            const Icon = phase.icon;
            const completion = getCompletionPercentage(idx);
            return (
              <button
                key={idx}
                onClick={() => setActivePhase(idx)}
                className={`p-6 rounded border transition-all aws-card-hover ${
                  activePhase === idx ? 'shadow-lg' : 'shadow hover:shadow-lg'
                }`}
                style={{
                  backgroundColor: 'var(--aws-card-bg)',
                  borderColor: activePhase === idx ? 'var(--aws-accent)' : 'var(--aws-border)'
                }}
              >
                <div className="flex items-start gap-4">
                  <div className={`${phase.color} p-3 rounded-lg`}>
                    <Icon className="text-white" size={24} />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="font-bold text-aws-dark mb-1">
                      {phase.title}
                    </h3>
                    <p className="text-sm text-aws-gray mb-2">
                      {phase.duration}
                    </p>
                    {completion > 0 && (
                      <div className="w-full bg-aws-gray-light rounded-full h-2">
                        <div
                          className="bg-aws-orange h-2 rounded-full transition-all"
                          style={{ width: `${completion}%` }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Phase Content */}
        <div className="rounded border shadow-lg p-8" style={{backgroundColor: 'var(--aws-card-bg)', borderColor: 'var(--aws-border)'}}>
          <div className="flex items-center gap-4 mb-6 pb-6 border-b" style={{borderBottomColor: 'var(--aws-border)'}}>
            {(() => {
              const Icon = phases[activePhase].icon;
              return (
                <Icon
                  className={`${phases[activePhase].color.replace('bg-', 'text-')}`}
                  size={32}
                />
              );
            })()}
            <div>
              <h2 className="text-3xl font-bold text-primary">
                {phases[activePhase].title}
              </h2>
              <p className="text-subtext">
                Estimated time: {phases[activePhase].duration}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {phases[activePhase].steps.map((step, stepIdx) => {
              const isCompleted = completedSteps[`${activePhase}-${stepIdx}`];
              return (
                <div
                  key={stepIdx}
                  className={`border-2 rounded-lg p-6 transition-all ${
                    isCompleted
                      ? 'border-aws-orange bg-aws-orange-light'
                      : 'border-aws-gray-light hover:border-aws-gray'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <button
                      onClick={() => toggleStep(activePhase, stepIdx)}
                      className={`mt-1 flex-shrink-0 w-6 h-6 rounded border-2 flex items-center justify-center transition-all ${
                        isCompleted
                          ? 'bg-aws-orange border-aws-orange'
                          : 'border-aws-gray hover:border-aws-orange'
                      }`}
                    >
                      {isCompleted && <Check className="text-white" size={16} />}
                    </button>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-primary">
                          {stepIdx + 1}. {step.title}
                        </h3>
                        <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded">
                          {step.page}
                        </span>
                      </div>
                      
                      <p className="text-slate-600 mb-4">{step.content}</p>
                      
                      <div className="bg-slate-50 rounded-md p-4">
                        <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                          <ChevronRight size={16} />
                          Key Points:
                        </h4>
                        <ul className="space-y-2">
                          {step.keyPoints.map((point, pIdx) => (
                            <li
                              key={pIdx}
                              className="text-sm text-slate-700 flex items-start gap-2"
                            >
                              <span className="text-blue-600 mt-1">•</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation */}
          <div className="flex justify-between mt-8 pt-6 border-t">
            <button
              onClick={() => setActivePhase(Math.max(0, activePhase - 1))}
              disabled={activePhase === 0}
              className="px-6 py-3 rounded-lg font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-slate-200 text-slate-700 hover:bg-slate-300"
            >
              ← Previous Phase
            </button>
            <button
              onClick={() =>
                setActivePhase(Math.min(phases.length - 1, activePhase + 1))
              }
              disabled={activePhase === phases.length - 1}
              className="px-6 py-3 rounded-lg font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-blue-500 text-white hover:bg-blue-600"
            >
              Next Phase →
            </button>
          </div>
        </div>

        {/* Quick Reference Footer */}
        <div className="mt-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Quick Reference</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Essential Commands</h4>
              <code className="text-sm bg-white/20 px-2 py-1 rounded block mb-1">
                aws dsql create-cluster
              </code>
              <code className="text-sm bg-white/20 px-2 py-1 rounded block mb-1">
                generate-db-connect-admin-auth-token
              </code>
              <code className="text-sm bg-white/20 px-2 py-1 rounded block">
                CREATE INDEX ASYNC
              </code>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Key Limits</h4>
              <p className="text-sm">• Max row mutations: 3,000/txn</p>
              <p className="text-sm">• Max transaction time: 5 min</p>
              <p className="text-sm">• Max connections: 10,000</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Important Pages</h4>
              <p className="text-sm">• SQL compatibility: p.41-64</p>
              <p className="text-sm">• Troubleshooting: p.317-320</p>
              <p className="text-sm">• API reference: p.316</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingGuide;
