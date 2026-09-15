# Notes

## Learner preferences (from me.md + observed)

- Address as "Ian" at least once per reply. Casual, brief.
- Concise and technical. Skip basics, skip filler, skip preamble.
- Polyglot; **Go confirmed** for this workspace. AWS-native.
- Simplicity-first: minimum that solves the problem. No speculative abstraction.
- Wants a thinking partner who pushes back, not a yes-machine.
- Flag real tradeoffs. Have opinions.
- Learns iteratively — ship a working draft, iterate.

## Teaching implications

- Keep lessons SHORT and dense. Ian has low tolerance for padding.
- Lead with the concept and its tradeoff, not narrative build-up.
- Every claim cited to source (Cadence docs, Go client, samples).
- Quizzes test judgment (e.g. "which code belongs in a workflow vs an activity?"),
  not trivia recall.
- Ian is greenfield on durable execution but senior in Go and agent systems. Do NOT
  teach goroutines/channels/interfaces. DO teach the durable-execution mental model
  from scratch — it is genuinely new and counterintuitive.
- Constant anchor: his 7-stage research-assistant-workflow. Map every Cadence concept
  onto a stage. Contrast with the ICM/folder model he already built.

## Cadence-specific footguns to surface early (from best-practices FAQ)

- Determinism: no `time.Now()`, no `rand`, no raw goroutines, no direct network calls
  inside workflow code. All of that goes in activities or via Cadence's workflow APIs.
  This is the #1 source of confusion for newcomers — teach it as a feature, not a rule.
- The docs' headline example is Java. Always give Ian Go signatures, verified against
  the Go client/samples, never the Java surface syntax.

## Working notes

- Workspace created 2026-09-14 at
  ~/Developer/1-Projects/sandbox/learn-cadence-go (learn- convention, sibling in sandbox).
  Sandbox location resolves /sandbox/shared/* so the nav bar + dark-mode toggle load.
- Assets copied from learn-fullstack-agent (course.css, quiz.js, copy-button.js/css).
- Mission CONFIRMED (Cadence + Go + research-workflow target).
- Sources read in depth so far: Concepts/Workflows, Concepts/Activities, Concepts/Events,
  Go client Intro + Worker service + Starting workflows. Verified Go API surface:
  worker.New(service, Domain, TaskList)+RegisterWorkflow/Activity+Start;
  client.StartWorkflow(ctx, StartWorkflowOptions{ID, TaskList, ExecutionStartToCloseTimeout}, fn, args);
  workflow.GetSignalChannel + client.SignalWorkflow / SignalWithStartWorkflow.
- Go determinism footgun confirmed from docs: use workflow.Channel / workflow.Selector,
  NOT native chan / select, inside workflow code. Emphasized in Lessons 3 & 4.
- Lessons 0001–0006 shipped (workflow-vs-activity, activities-in-depth, run-it-locally,
  signals-human-gate, timers-and-child-workflows, hands-on-run-it). Glossary updated with
  all new terms. Index: 6 live, grouped Foundations / Structure & running / Reference.
- Sources for 5-6: Go client Sleep (workflow.Sleep durable, no time.Sleep), Go client
  Child workflows (ExecuteChildWorkflow, ChildWorkflowOptions, ParentClosePolicy
  Terminate/RequestCancel/Abandon, activity-vs-child-vs-standalone decision table),
  Get Started (SQLite quickstart — NO Docker: make bins, install-schema-sqlite,
  cadence-server --zone sqlite start, Web UI :8088). Corrected earlier docker-compose note.
- Nav chain verified unbroken 1→6; HTML ALL CHECKS PASSED (tags, links, non-ascii).
- Open decision for Ian: build the proof in a throwaway scratch module first, or straight
  inside research-assistant-workflow. Lean: scratch-then-port. Lesson 6 assumes scratch.
- Next natural step: pair with Ian to write the 2-stage durable slice (Lesson 6 Step 6),
  OR Lesson 7 synthesis (map full 7 stages, decide Cadence vs ICM with evidence).
