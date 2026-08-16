# Section 10 — Test Reports (Step-by-Step)

**What you'll produce:** a **test summary report** — the document a manager reads to decide
"ship or don't ship." You'll build it two ways: from numbers you supply (Claude), and pulled
automatically from **Jira** (Claude Desktop).

**Process step:** Test closure and reporting · **Tools:** Claude · Claude Desktop + Jira (MCP)

> A test report answers: what did we test, what passed, what's still broken, and should we
> release? It must be readable by a non-technical person.

---

# PART A — The manual way: Claude with your numbers (video Clip 2)

## Step 1 — Gather your numbers
Write down:
- Test cases: total, how many executed, passed, failed, blocked, not executed.
- Bugs: total, how many Critical / High / Medium / Low, how many fixed vs still open (with
  ticket IDs).

(If you don't have exact numbers, estimate from your Jira project — the point is to practise
the report.)

## Step 2 — Generate the report — paste this (fill in your numbers)

```
Write a professional test summary report from this data.
Application: TechShop. Testing period: 3 days. Environment: Chrome on desktop, local file.
Test execution: total 40, executed 36, passed 30, failed 6, blocked 2 (BUG-011 blocked
checkout), not executed 2 (ran out of time).
Defects: total 8 — Critical 1, High 3, Medium 3, Low 1. Resolved 5, still open 3
(BUG-004, BUG-008, BUG-011).
Write these sections: executive summary, scope, execution summary, defect summary,
outstanding risks, and a go/no-go recommendation.
Keep it professional but readable for a non-technical stakeholder.
```

**✅ Check:** you get a full report with all the sections and a clear recommendation.

## Step 3 — Make the recommendation useful (paste in the SAME chat)
A flat "no-go" isn't helpful. Make it conditional:

```
Rewrite the conclusion as a conditional recommendation: recommend release IF BUG-011 and
BUG-004 are fixed before deployment, with BUG-008 tracked as a known issue for next sprint.
```

**✅ Check:** the recommendation now says exactly what must happen before release.

---

# PART B — The automatic way: read straight from Jira (video Clip 3)

No manual counting — the AI reads your Jira project and writes the report.

## Step 1 — Use the Claude Desktop app (connected to Jira)
Make sure Claude **Desktop** is connected to Jira (see
[`resources/mcp-setup-guide.md`](../../resources/mcp-setup-guide.md)).

## Step 2 — Ask it to build the report from Jira — paste this
Replace `TS` with your project key and the sprint name with yours:

```
Read all the issues in Jira project TS for Sprint 1.
Count the test-case Tasks by status — passed, failed, blocked, not executed.
Count the Bug issues by priority — Critical, High, Medium, Low.
List which bugs are resolved and which are still open, with their ticket numbers.
Then write a professional test summary report with: executive summary, execution summary
with pass rate, defect summary by severity, outstanding risks from the open bugs, and a
go/no-go recommendation with reasoning.
Save it as test-summary-sprint-1.md in my project folder.
```

**✅ Check:** the AI reports real counts from your Jira project and saves a
`test-summary-sprint-1.md` file. Compare it to your Part A version — this one is grounded in
live data.

---

## Common mistakes (read if you're stuck)
- **A vague recommendation** ("seems mostly fine"). Make it conditional and specific — which
  bugs block release, which are acceptable known issues (Part A, Step 3).
- **Written for engineers.** The reader is a decision-maker — keep it plain and readable.
- **Part B does nothing.** Claude Desktop isn't connected to Jira, or the project key/sprint
  name is wrong. Fix the MCP connection and the names.

## Done when
- [ ] You produced a report from your own data with a conditional go/no-go
- [ ] (Automatic) Claude Desktop pulled the numbers from Jira and saved a report file
- [ ] The report has: executive summary, execution summary, defect summary, risks, recommendation
