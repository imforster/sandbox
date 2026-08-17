# Mission: Practical tuicr Fluency

## Why
Use `tuicr` to make code review faster, more precise, and easier to combine with coding agents. The goal is not to memorize every keybinding; it is to confidently run a review, leave useful comments, export or submit them, and use the review CLI when an agent is part of the loop.

## Success looks like
- Open `tuicr` on local changes, a commit range, or a PR/MR without hesitation.
- Navigate a diff, filter files, add line/file/range/review comments, and mark files or hunks reviewed.
- Export a review to clipboard/stdout or submit it to GitHub, GitLab, Bitbucket, or Azure DevOps when configured.
- Use `tuicr review list`, `comments`, and `add` to connect an agent to an active review session.
- Maintain a small personal workflow checklist for high-signal code reviews.

## Constraints
- Lessons should be short, interactive, and usable as refreshers.
- The course should assume comfort with command-line tools and code review, but not prior `tuicr` experience.
- Practice should emphasize retrieval and real review workflows over passive reading.

## Out of scope
- Deep Rust internals of the `tuicr` codebase.
- Building a competing review tool.
- Full code-review theory beyond what is needed to use `tuicr` well.
