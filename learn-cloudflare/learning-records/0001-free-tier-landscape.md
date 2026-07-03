# 0001: Cloudflare Free Tier Landscape

**Date:** 2026-07-02  
**Lesson:** 0001-the-free-tier-map  
**Status:** Presented

## What Was Learned

The user received a complete map of Cloudflare's free-tier services beyond static hosting:

- Workers: serverless compute (100K req/day, 10ms CPU)
- KV: key-value store (100K reads/day, 1K writes/day, 1GB)
- D1: SQL database (5M reads/day, 100K writes/day, 5GB)
- R2: object storage (10GB, zero egress)
- Durable Objects: stateful coordination (100K req/day)
- Queues: message passing (10K ops/day)
- Vectorize: vector search (30M queried dims/month)
- Security: DDoS, SSL, basic WAF — all included free

## Key Insights

- CPU time ≠ duration. Network wait is free; only processing counts.
- R2's zero-egress model is unique — no other cloud offers this at the free tier.
- The security layer comes for free by running on Cloudflare's network — no separate configuration.
- The free tier is best suited for personal projects, prototypes, and low-traffic tools.

## Zone of Proximal Development

The user has the landscape. Next logical step: hands-on deployment of a first Worker to make the concepts concrete. They should experience the deploy cycle before learning individual storage systems.

## Open Questions

- Which project type interests the user most? (API? full-stack? automation?)
- Does the user have a Cloudflare account already?
- What's their comfort level with JavaScript/TypeScript?
