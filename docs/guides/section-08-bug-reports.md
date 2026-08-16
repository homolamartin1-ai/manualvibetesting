# Section 8 — Bug Reports (Step-by-Step)

**What you'll produce:** professional bug reports — written two ways: batch reports from
ChatGPT, and code-grounded reports that Cursor files straight into **Jira** (and can even
open a fix for).

**Process step:** Defect reporting · **Tools:** ChatGPT · Cursor + Jira (MCP)

> A great bug report has: a **specific title**, the **environment**, **numbered steps** from
> a known starting point, **expected** and **actual** kept separate, and a **severity +
> priority**. The test: could a developer reproduce it from your steps alone? If not, it's
> not finished.

---

## Before you start
- Your `exploratory-findings.md` from Section 7 (or any rough bug notes)
- ChatGPT open
- Cursor installed, your course folder opened in it, connected to Jira (MCP), project key ready
- Templates to copy: [`resources/bug-report-templates.md`](../../resources/bug-report-templates.md)

---

# PART A — Batch reports with ChatGPT (video Clip 2)

## Step 1 — Write one report first (to see the shape) — paste this

```
Write a professional bug report for this finding: the password field on the TechShop login
page shows characters in plain text instead of masking them.
App: TechShop, tested in Chrome on desktop.
Include: Title, Severity, Priority, Steps to Reproduce (start from the login page),
Expected Result, Actual Result. Keep it concise.
```

**✅ Check:** you get a clean report with separate Expected and Actual lines and a specific
title.

## Step 2 — Now do all of them at once — paste this
Replace the numbered list with your own findings (one sentence each):

```
Write concise bug reports for each of these findings from a TechShop testing session:
1. The password field shows characters in plain text.
2. Empty username and password are accepted at login.
3. The cart total does not update when the quantity changes.
4. The "Proceed to Checkout" button does nothing when clicked.
App: TechShop, Chrome on desktop.
For each: Title, Severity, Steps to Reproduce (start from a logged-in state),
Expected, Actual. Separate each report with a horizontal line.
```

**✅ Check:** you get one report per finding, each separated by a line. Review them — tighten
any vague title or unclear step.

---

# PART B — Code-grounded reports + Jira, with Cursor (video Clip 3)

This is the upgrade: Cursor reads the **actual code**, so the reports point at the real
cause, and it creates the Jira tickets for you.

## Step 1 — Open the folder and the chat panel in Cursor
1. **File → Open Folder** → your course folder.
2. Open Cursor's **chat panel** (right sidebar, or the shortcut on the welcome screen).

## Step 2 — Give it the files, the bugs, and your Jira key — paste this
Replace `TS` with your project key and use your own bug list:

```
Look at techshop/broken-app/app.js and techshop/broken-app/index.html.
I found these bugs during testing:
1. Empty username and password are accepted at login.
2. The cart total does not update when the quantity changes.
3. The "Proceed to Checkout" button does nothing when clicked.
For each bug: write a professional report with Title, Severity, Priority, Steps to
Reproduce, Expected Result, Actual Result, and the exact code location responsible.
Then create each one as a Jira Bug in project TS: label it by feature area, set the
priority to match the severity, and assign it to the current sprint.
```

**✅ Check:** open Jira in your browser → your project → the Bug tickets are there, each one
mentioning the code location. Cursor did the filing for you.

---

# PART C — Get severity and priority right (video Clip 4)

When you're unsure how serious a bug is, paste this:

```
I found this bug: the "Proceed to Checkout" button does nothing when clicked.
The app is an online store used by shoppers to buy products.
What severity and priority would you assign, and why? What's the business risk if it ships
unfixed? Explain your reasoning for each.
```

> **Severity** = how bad technically. **Priority** = how urgent for the business. They're
> different: a broken checkout button can be "medium severity" but "top priority" because it
> stops all sales.

---

## Common mistakes (read if you're stuck)
- **Vague titles** like "checkout broken." Name the exact behaviour: "Proceed to Checkout
  button does not respond to click."
- **Steps that skip the beginning.** Always start from a clear state (logged out, or logged
  in as a specific user) so the developer can reproduce it.
- **Expected and Actual mashed into one sentence.** Keep them as two separate lines.
- **Part B files nothing.** Cursor isn't connected to Jira, or the project key is wrong —
  check your MCP setup and the key.

## Done when
- [ ] You batch-generated bug reports with ChatGPT and reviewed them
- [ ] Cursor filed code-grounded Bug tickets in your Jira project
- [ ] Every report has separate Expected/Actual and a justified severity + priority
- [ ] A developer could reproduce each bug from your steps alone
