# Section 9 — Verification & Regression (Step-by-Step)

**What you'll produce:** proof that the reported bugs are actually fixed (re-tested against
the **fixed** app), plus a check that the fixes didn't break anything else.

**Process step:** Verification and regression · **Tool:** Claude

> **Big change this section:** until now you tested `techshop/broken-app`. Now you test
> `techshop/fixed-app` — the version where the bugs are supposedly resolved. Your job is to
> confirm that.

---

## Step 1 — Open the FIXED app (video Clip 1)
1. Open your course folder → `techshop` → **`fixed-app`**.
2. **Double-click `index.html`.** It opens in the browser. It looks identical to the broken
   app — the difference is that the bugs should be gone.

**✅ Check:** the app opens and you know you're in **fixed-app**, not broken-app.

## Step 2 — Get a verification checklist from Claude (video Clip 2)
1. Get your list of reported bugs (from Sections 7–8, or open
   [`resources/known-bugs.md`](../../resources/known-bugs.md)).
2. Open **Claude** and paste this, with your bug list:

```
Here is a list of bugs that were fixed in a web app. For each bug, write a short 3-step
procedure I can follow to verify it is actually fixed.
[Paste your bug titles / IDs with a one-line description each]
```

**✅ Check:** you get a tiny 3-step check for each bug — the exact clicks to confirm it's
gone.

## Step 3 — Run the checklist against the fixed app
Go bug by bug. For each one:
1. Do the 3 steps in `techshop/fixed-app`.
2. Mark **Pass** (the bug is gone) or **Fail** (still there).
3. In Jira, mark the ticket **verified/closed** if it passed, or **re-open** it if it failed.

**✅ Check:** every reported bug has a Pass or Fail recorded.

## Step 4 — Work out what else might have broken (video Clip 3)
Fixing one thing can break another. For a significant fix, paste this into Claude:

```
A developer fixed the cart discount calculation in an e-commerce web app.
What other areas of the app should I regression test to make sure that fix did not
introduce new problems? List specific features and user flows.
```

Then narrow it down:

```
From that list, which 3 areas are the highest risk, given that ONLY the cart discount
calculation was changed? Explain your reasoning briefly.
[Paste the list from the previous answer]
```

**✅ Check:** you have a short, prioritised list of things to re-test.

## Step 5 — Re-test the top regression areas
Test those top 3 areas in the fixed app. Confirm the fix didn't break the cart total, the
checkout flow, or anything connected to it.

**✅ Check:** the high-risk areas still work correctly after the fix.

---

## Common mistakes (read if you're stuck)
- **You're testing the broken app by mistake.** Nothing will pass. Make sure you opened
  `techshop/fixed-app`.
- **You verified the bug but skipped regression.** That's how a fix quietly breaks something
  else. Do Steps 4–5.
- **You marked a bug "verified" without actually re-doing the steps.** Verify for real,
  every time.

## Done when
- [ ] You generated a verification checklist for every reported bug
- [ ] You re-tested each bug in `techshop/fixed-app` and recorded Pass/Fail
- [ ] You produced a regression list and re-tested the top-risk areas
- [ ] Jira tickets are updated (verified or re-opened)
