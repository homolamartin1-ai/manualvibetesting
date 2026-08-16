# Section 11 — Capstone: BookNow (Step-by-Step)

**What you'll produce:** the whole testing cycle, run by **you**, on an app you've never
seen — BookNow. This is where you prove you can do it without being led clip by clip.

**The app:** `capstone/booknow-broken` (the one you test) and `capstone/booknow-fixed` (the
one you verify against). BookNow is a **hotel booking app**: log in → search for rooms →
see results → fill a booking form → get a confirmation.

> Don't open BookNow until now. Don't look at the bug list until you've **finished** —
> finding the bugs yourself is the whole point.

---

## How to do this section
You've already learned every step. Now you repeat the cycle on BookNow, using the **same
detailed guides** you followed for TechShop — just swap the app folder to
`capstone/booknow-broken`. Work through these phases in order:

### Phase 1 — Understand the app → follow [Section 4 guide](section-04-understand-app.md)
- Open `capstone/booknow-broken/index.html` in your browser and click through it.
- Copy `index.html` and `app.js`, and ask Claude to describe the features (same prompt as
  Section 4). Save a `booknow-feature-inventory.md`.

### Phase 2 — Test plan → follow [Section 5 guide](section-05-test-plan.md)
- Write a sprint test plan for BookNow (Gemini or Windsurf). Ground the risks in what you
  actually see in the app.

### Phase 3 — Test cases → follow [Section 6 guide](section-06-test-cases.md)
- Scenario titles first, pick the ones you want, then full cases. Cover positive, negative,
  and edge. File them in Jira if you want the full workflow.

### Phase 4 — Exploratory → follow [Section 7 guide](section-07-exploratory.md)
- Run Antigravity IDE on `capstone/booknow-broken`. **Review every finding yourself** and
  keep only the real bugs.

### Phase 5 — Bug reports → follow [Section 8 guide](section-08-bug-reports.md)
- Turn findings into reports (ChatGPT), or code-grounded Jira bugs (Cursor). Get severity
  and priority right.

### Phase 6 — Verify & regression → follow [Section 9 guide](section-09-verification.md)
- Verify each bug against `capstone/booknow-fixed`. Check what else the fixes might affect.

### Phase 7 — Test report → follow [Section 10 guide](section-10-test-reports.md)
- Produce a test summary report for BookNow with a clear, conditional go/no-go.

---

## How to know you did it right (self-check)
Judge your **process**, not the number of bugs:
- [ ] You built a feature inventory and a test plan with grounded (specific) risks
- [ ] Your test cases cover positive, negative, and edge — not just happy paths
- [ ] You explored with Antigravity IDE and confirmed each finding yourself
- [ ] Your bug reports could be reproduced by a developer from the steps alone
- [ ] You verified fixes against `booknow-fixed` and checked regression
- [ ] You wrote a test summary report with a clear, conditional go/no-go

## Only AFTER you finish
Compare what you found to the reference list in
[`resources/known-bugs-booknow.md`](../../resources/known-bugs-booknow.md). What you **missed**
is your best lesson — look at how you could have caught it.

> If you did this without me leading you, you've just run the full professional testing
> workflow, independently, on an unfamiliar app. That's the job. Well done.

---

**Stuck at any phase?** Open the matching section guide linked above — it has the exact
prompts and clicks. Still stuck? Ask in the community:
https://discord.gg/txCPTbdzJs
