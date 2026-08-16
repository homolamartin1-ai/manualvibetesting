# Section 11 — Capstone: BookNow (Step-by-Step)

**What you'll produce:** the entire testing cycle, run by you, on a **new app you've never
seen** — BookNow. This is where you prove you can do it without being led clip by clip.

**App:** `capstone/booknow-broken` (test this) and `capstone/booknow-fixed` (verify against this)

> Don't open BookNow until now, and don't peek at the bug list until you've finished — the
> whole point is to find them yourself.

---

## Before you start
- Everything from Sections 3–10 set up (tools, Jira, MCP)
- Your prompts cheat sheet ([`resources/ai-prompts-cheatsheet.md`](../../resources/ai-prompts-cheatsheet.md))
- BookNow is a **hotel booking app** — login, search, booking form, confirmation

---

## Run the full process yourself
Do the same cycle you learned, now start to finish, on BookNow:

### 1. Understand the app (like Section 4)
- Click through `capstone/booknow-broken` yourself.
- Use **Prompt 32** on its `index.html` + `app.js` to get a feature inventory.

### 2. Plan (like Section 5)
- Use **Prompt 33/35** to write a sprint test plan for BookNow. Ground the risks in what
  you actually see.

### 3. Design test cases (like Section 6)
- Scenarios first (**Prompt 36**), pick, then full cases (**Prompt 37**).
- File them in Jira (**Prompt 38**) if you want the full workflow.

### 4. Explore (like Section 7)
- Run Antigravity on `capstone/booknow-broken` (**Prompt 40**).
- Review the findings — keep the real bugs, discard misreads.

### 5. Report bugs (like Section 8)
- Turn findings into reports (**Prompt 43**), or code-grounded Jira bugs with Cursor (**Prompt 44**).
- Get severity/priority right (**Prompt 45**).

### 6. Verify & regress (like Section 9)
- Verify each bug against `capstone/booknow-fixed` (**Prompt 46**).
- Work out and test the regression scope (**Prompts 47–48**).

### 7. Report (like Section 10)
- Produce a test summary report with a go/no-go (**Prompt 49–51**).

---

## How to know you did it right (self-check)
Judge your **process**, not a bug count:
- [ ] You built a feature inventory and a test plan with grounded risks
- [ ] Your test cases cover positive, negative, and edge — not just happy paths
- [ ] You explored with Antigravity and confirmed each finding yourself
- [ ] Your bug reports are reproducible from the steps alone
- [ ] You verified fixes against `booknow-fixed` and checked regression
- [ ] You wrote a test summary report with a clear, conditional go/no-go

## Only when you're finished
Compare what you found against the reference list in
[`resources/known-bugs-booknow.md`](../../resources/known-bugs-booknow.md). See what you
caught and what you missed — the misses are your best learning.

> If you completed this without me leading you, you've done the full professional testing
> workflow independently on an unfamiliar app. That's the job.
