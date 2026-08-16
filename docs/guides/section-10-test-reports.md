# Section 10 — Test Reports (Step-by-Step)

**What you'll produce:** a **test summary report** — execution stats, defect summary,
outstanding risks, and a go/no-go recommendation — built two ways: from data you supply
(Claude), and pulled live from **Jira** (Claude Desktop / GitHub Copilot via MCP).

**Process step:** Test closure and reporting · **Tools:** Claude (chatbot) · Claude Desktop / Copilot (agentic — reads Jira)

---

## Before you start
- Your testing results (how many cases passed/failed, bugs by severity) — or your Jira project
- Claude open; Claude **Desktop** connected to Jira for the agentic way
- Your Jira **project key** and sprint name

---

## What a test report is for (Clip 1)
It's the document a manager or stakeholder reads to decide **ship or don't ship**. It
summarises what was tested, what passed, what's still broken, and your recommendation. It
must be readable by a non-technical person.

## Part A — The chatbot way (Claude, you supply the data) — Clip 2

### Step 1 — Gather your numbers
Count: total test cases, executed, passed, failed, blocked, not executed; and bugs by
severity (Critical/High/Medium/Low), how many resolved vs still open.

### Step 2 — Generate the report
Use **Prompt 49**, filling in your numbers:

```
Write a professional test summary report based on the following testing data.
Application: TechShop.
Testing period: 3 days.
Test environment: Chrome on desktop, local HTML file.
Test execution: total [N], executed [N], passed [N], failed [N],
blocked [N] (BUG-011 blocked checkout), not executed [N] (reason).
Defect summary: total [N], Critical [N], High [N], Medium [N], Low [N],
resolved [N], still open [N] (ticket IDs).
Write: executive summary, scope, execution summary, defect summary,
outstanding risks, and a go/no-go recommendation.
Keep it professional but readable for a non-technical stakeholder.
```

### Step 3 — Make the recommendation conditional (Clip 2 follow-up)
A blunt "no-go" is rarely useful. Use **Prompt 50** to make it actionable:

```
Update the conclusion to make it conditional.
Recommend go-ahead for release if BUG-011 and BUG-004 are resolved before deployment,
with BUG-008 tracked as a known issue for the next sprint.
```

## Part B — The agentic way (reads Jira live) — Clip 3

No manual counting — the AI reads your Jira project and builds the report itself. In
**Claude Desktop** (or GitHub Copilot) connected to Jira, use **Prompt 51**:

```
Read all issues in Jira project [PROJECT KEY] for [sprint name].
Count test case Tasks by label status — how many passed, failed, blocked, not executed.
Count Bug issues by priority — Critical, High, Medium, Low.
List which bugs are resolved and which are still open with their ticket numbers.
Then generate a professional test summary report including: executive summary,
execution summary with pass rate, defect summary by severity, outstanding risks
from open bugs, and a go/no-go recommendation with rationale.
Save the report as test-summary-sprint-1.md in my project folder.
```

The AI pulls the real numbers from Jira, writes the report, and saves it to your repo.
Compare it to your Part A version — the agentic one is grounded in live data.

---

## Common mistakes
- **A vague go/no-go** ("looks mostly fine"). Make it conditional and specific — which bugs
  block release, which are acceptable known issues (Step 3).
- **Writing for engineers, not stakeholders** → the report is for a decision-maker. Plain language.
- **Part B without Jira connected** → nothing to read. Confirm MCP is set up.

## Done when
- [ ] You produced a report from your own data with a conditional go/no-go
- [ ] (Agentic) Claude/Copilot pulled the numbers from Jira and saved a report to the repo
- [ ] The report has: exec summary, execution summary, defect summary, risks, recommendation
