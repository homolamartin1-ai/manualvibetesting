# Section 8 — Bug Reports (Step-by-Step)

**What you'll produce:** professional bug reports — written two ways: batch reports from
ChatGPT, and code-grounded reports filed straight into **Jira** by Cursor (which also traces
the root cause and can open a fix PR).

**Process step:** Defect reporting · **Tools:** ChatGPT (chatbot) · Cursor (agentic + Jira + auto-fix)

---

## Before you start
- Your `exploratory-findings.md` from Section 7 (or any rough bug notes)
- ChatGPT open
- Cursor installed with the repo open, connected to Jira (MCP) — your project key ready
- Blank template + examples: [`resources/bug-report-templates.md`](../../resources/bug-report-templates.md)

---

## What makes a great bug report (Clip 1)
A specific **title**, the **environment**, numbered **steps to reproduce** (from a known
starting state), separate **expected** and **actual** results, and a justified
**severity/priority**. If a developer can't reproduce it from your steps alone, it isn't
done.

## Part A — Batch reports with ChatGPT (Clip 2)

### Step 1 — One report, to see the shape
Use **Prompt 42** for a single finding:

```
Write a professional bug report for this finding: [describe bug in plain language].
App: TechShop, Chrome on desktop.
Include: Title, Severity, Priority, Steps to Reproduce starting from a logged-in state,
Expected Result, Actual Result.
Keep it concise.
```

### Step 2 — All of them at once
Use **Prompt 43** to batch every finding from your session:

```
Write concise bug reports for each of these findings from a checkout testing session.
[Number each finding — one sentence each]
App: TechShop, Chrome on desktop.
Format: Title, Severity, Steps from [starting state with preconditions],
Expected, Actual.
Separate each with a horizontal rule.
```

Review each report. Tighten vague titles (Prompt 12) and unclear steps (Prompt 14) if needed.

## Part B — Code-grounded reports + Jira, with Cursor (Clip 3)

This is the agentic upgrade: Cursor reads the actual code, so the reports point at the real
cause, and it files them in Jira for you.

### Step 1 — Give Cursor the files and the findings
In Cursor (repo open), use **Prompt 44** (replace `[PROJECT KEY]`):

```
Look at techshop/broken-app/app.js and techshop/broken-app/index.html.
I found the following bugs during testing:
[Number each bug — one sentence each]
For each bug, write a professional bug report including Title, Severity, Priority,
Steps to Reproduce, Expected Result, Actual Result, and the relevant code location.
Then create each as a Jira Bug issue in project [PROJECT KEY],
label by feature area, set priority to match severity, assign to current sprint.
```

### Step 2 — Check Jira
Open Jira in the browser — the Bug issues are there, each pointing at the code location.

## Part C — Get severity and priority right (Clip 4)
When unsure, use **Prompt 45**:

```
I found this bug: [brief description].
The application is an e-commerce store used by online shoppers.
What severity and priority would you assign?
What is the business risk if this ships unfixed?
Explain your reasoning for each rating.
```

Severity = technical impact; Priority = business urgency. They're not the same — a
cosmetic bug on the checkout button can be low severity but high priority.

---

## Common mistakes
- **Vague titles** ("checkout broken"). Name the exact behaviour ("Proceed to Checkout
  button does not respond to click").
- **Steps that skip the start** → the developer can't reproduce. Always start from a known
  state (logged out, or logged in as X).
- **Mashing expected and actual into one sentence** → keep them as separate fields.
- **Cursor not connected to Jira** → Part B won't file tickets. Check your MCP setup.

## Done when
- [ ] You batch-generated bug reports with ChatGPT and reviewed them
- [ ] Cursor filed code-grounded Bug issues in your Jira project
- [ ] Each report has separate expected/actual and a justified severity + priority
- [ ] A developer could reproduce every bug from your steps alone
