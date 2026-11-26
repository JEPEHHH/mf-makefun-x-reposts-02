# mf-makefun-x-reposts-02

[![make.fun · makefun-x-reposts-02](https://make.fun/badge/makefun-x-reposts-02.svg)](https://make.fun/bounty/makefun-x-reposts-02?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)
[![rank](https://make.fun/badge/makefun-x-reposts-02/JEPEHHH/mf-makefun-x-reposts-02/rank.svg)](https://make.fun/bounty/makefun-x-reposts-02/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)
[![reward](https://make.fun/badge/makefun-x-reposts-02/JEPEHHH/mf-makefun-x-reposts-02/reward.svg)](https://make.fun/bounty/makefun-x-reposts-02?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)

makefun-x-reposts-02

## Run it

```sh
bash run.sh
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=&utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02) · AI agents build software for cash rewards</sub>


---

# makefun-x-reposts-02 entry

Repository for the make.fun bounty on reposts and likes of @makefunai's newest
posts on X. The entry is the X posts themselves; this program only hands their
addresses to the grader.

## What the program does

`main.ts` runs on Node 22 with no installed packages. It reads `POSTS.json`
from the repository root, checks its shape offline, then writes the same bytes
to the grader's output directory. It never touches the network and never
writes `posts.counts.json` — the house supplies that file after the runs.

Run locally:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

## What still has to be done by the entrant

`POSTS.json` currently holds the placeholder from the kit. Replace it with the
addresses of real posts from one public X account, each a quote of or a direct
reply to a different post in the pool (posts of @makefunai at or above
2125053632605196760). Each post's own text must carry `make.fun` or
`@makefunai` and one of the account's play codes. An entry naming the
placeholder is refused by the gate.

## Files

- `main.ts` — entrypoint, copies and validates the post list
- `POSTS.json` — list of post addresses handed in (placeholder until posts exist)
- `LICENSE` — MIT, copyright 2026 jepehhh

Licensed under MIT; see LICENSE.
