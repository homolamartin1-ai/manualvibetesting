# Section 9 — Verification & Regression (Step-by-Step)

**What you'll produce:** a verification checklist for your bugs, re-tested against the
**fixed** app, plus a regression scope — what else might have broken.

**Process step:** Verification and regression · **Tool:** Claude

---

## Before you start
- Your list of reported bugs (from Sections 7–8, or [`resources/known-bugs.md`](../../resources/known-bugs.md))
- The **fixed** app: `techshop/fixed-app`
- Claude open

> Note the switch: up to now you tested `broken-app`. Verification runs against
> `fixed-app` — the version where the bugs are supposedly resolved.

---

## Step 1 — Open the fixed app (Clip 1)
Open `techshop/fixed-app/index.html` in your browser. It looks the same as the broken app —
your job is to confirm each reported bug is actually gone.

## Step 2 — Generate a verification checklist (Clip 2)
Hand Claude your bug list with **Prompt 46**:

```
Here is a list of bugs that were fixed in a web app.
For each bug, write a three-step verification procedure.
[Paste bug titles or IDs with brief descriptions]
```

You get a short, repeatable check per bug — the exact steps to prove it's fixed.

## Step 3 — Run the checklist against the fixed app
Go bug by bug. For each:
- Follow the three verification steps in `techshop/fixed-app`.
- **Pass** = the bug is gone. **Fail** = it's still there (re-open the ticket).
- Record the result next to each bug (in Jira, mark the ticket verified/resolved).

## Step 4 — Work out the regression scope (Clip 3)
A fix can break something else. For each significant fix, use **Prompt 47**:

```
A developer fixed a discount calculation bug in the shopping cart of an e-commerce app.
What other areas of the app should I regression test to make sure the fix
did not introduce new problems?
```

Then prioritise what to actually re-test with **Prompt 48**:

```
From this regression list, which 3 areas are highest risk given that only
the cart discount calculation was changed?
Explain your reasoning.
[Paste regression list from the previous prompt]
```

## Step 5 — Re-test the high-risk areas
Test the top regression areas in the fixed app. Confirm the fix didn't break the cart
total, the checkout flow, or anything connected.

---

## Common mistakes
- **Verifying against the broken app by accident** → nothing will pass. Use `fixed-app`.
- **Only checking the bug itself, never the regression scope** → the classic way a fix
  ships one bug and creates another. Do Steps 4–5.
- **Marking a bug "verified" without actually re-running the steps** → verify for real.

## Done when
- [ ] You generated a verification checklist for every reported bug
- [ ] You re-tested each in `techshop/fixed-app` and recorded pass/fail
- [ ] You produced a regression scope and re-tested the highest-risk areas
- [ ] Tickets are updated (verified / re-opened) in Jira
