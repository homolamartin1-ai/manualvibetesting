# AI Prompts Cheat Sheet for Manual Testers
> 51 ready-to-use prompts for Vibetesting in 2026
> Copy, paste, and adapt these for your own projects.

---

## CATEGORY 1: Test Case Generation

**Prompt 1 — Basic test case generation**
```
I'm testing a [feature name] in a [type of app] application.
Generate 10 test cases covering positive, negative, and edge cases.
Format as a table with columns: ID | Title | Preconditions | Steps | Expected Result | Priority (High/Medium/Low)
```

**Prompt 2 — Edge cases only**
```
I'm testing a [feature]. I already have happy path and basic negative tests.
Focus only on edge cases: boundary values, special characters, empty states, 
very long inputs, concurrent actions, and unexpected user behavior.
Give me 8 edge case test scenarios.
```

**Prompt 3 — From a screenshot or UI description**
```
Here is a description of a login form: [describe UI or paste HTML snippet]
Based on this UI, generate a complete set of test cases.
Include validation rules you would expect to be implemented.
```

**Prompt 4 — Risk-based test prioritization**
```
I have these [N] test cases for [feature]. 
Classify each as High, Medium, or Low priority based on:
- Business impact if this fails
- Likelihood of a bug existing here
- User-facing visibility
Return the updated table with a Priority column added.
[Paste your test case table]
```

**Prompt 5 — Test cases for a user story**
```
User story: "As a customer, I want to add items to my shopping cart so that I can purchase multiple products in one order."
Generate acceptance criteria and test cases that verify this story is complete.
Format: Gherkin (Given / When / Then) for the acceptance criteria, 
and a standard table for the test cases.
```

---

## CATEGORY 2: Exploratory Testing

**Prompt 6 — Test charter generation**
```
I'm about to do a 60-minute exploratory testing session on [feature/area of app].
Write 3 focused test charters. Each charter should have:
- Mission statement (what to explore)
- Risk areas (what could go wrong)
- Key questions to answer during the session
```

**Prompt 7 — Follow-up areas after finding a bug**
```
During exploratory testing I found that [describe bug briefly].
What related areas of the application should I explore next?
What other bugs could be connected to this root cause?
Give me 5 follow-up investigation areas.
```

**Prompt 8 — Heuristics-based exploration guide**
```
I'm doing exploratory testing on a [type of feature].
Using common testing heuristics (SFDIPOT, FEW HICCUPPS, or RCRCRC),
suggest what areas, behaviors, and conditions I should explore.
Format as a checklist I can use during my session.
```

**Prompt 9 — Persona-based testing ideas**
```
I'm testing a [type of application]. 
Give me 5 distinct user personas (e.g. power user, first-time user, mobile user, 
elderly user, user with slow connection) and for each persona, describe:
- Their goals and frustrations
- 2 specific test scenarios from their perspective
```

**Prompt 10 — Session debrief assistant**
```
I just finished a 45-minute exploratory testing session on [feature].
Here are my raw notes: [paste notes]
Summarize:
1. What was covered
2. What bugs were found (brief titles)
3. What was not tested (gaps)
4. Recommended follow-up sessions
```

---

## CATEGORY 3: Bug Report Writing

**Prompt 11 — Notes to professional bug report**
```
Here are my rough testing notes about a bug I found:
[paste your raw notes]

Write a professional bug report with these sections:
Title, Environment, Severity, Priority, Steps to Reproduce (numbered), 
Expected Result, Actual Result, and Notes.
Keep the language clear and neutral.
```

**Prompt 12 — Title improvement**
```
Here are 5 bug report titles I wrote. 
Make each one more specific, action-oriented, and searchable.
Avoid vague words like "issue", "problem", "broken", or "doesn't work".
[paste your titles]
```

**Prompt 13 — Severity and priority assessment**
```
I found this bug: [brief description of the bug]
The application is [describe what the app does and who uses it].
Assess:
1. Severity (Critical/High/Medium/Low) — technical impact
2. Priority (Critical/High/Medium/Low) — business urgency
Explain your reasoning for each rating.
```

**Prompt 14 — Steps to reproduce refinement**
```
My steps to reproduce are unclear. A developer said they could not reproduce this bug.
Here is my current step list: [paste steps]
Rewrite the steps to be:
- More precise and unambiguous
- Starting from the absolute beginning (fresh browser, logged out state)
- Including any preconditions that might matter
```

**Prompt 15 — Bug report for accessibility issue**
```
I found an accessibility issue: [describe it]
Write a bug report specifically for an accessibility defect.
Include: WCAG criteria violated, impact on users with disabilities, 
severity from an accessibility standpoint, and recommended fix.
```

---

## CATEGORY 4: Test Plan Creation

**Prompt 16 — One-page test plan**
```
Create a one-page test plan for testing [feature or release].
Include:
- Scope (what is in/out)
- Test approach (exploratory, scripted, or both)
- Test types (functional, regression, UI, etc.)
- Entry criteria (what must be true before testing starts)
- Exit criteria (what must be true to call testing done)
- Risks and mitigations
```

**Prompt 17 — Regression test scope after a fix**
```
A developer fixed this bug: [describe the fix]
What areas of the application should be regression tested?
List specific features and user flows that could have been 
inadvertently affected by this change.
```

**Prompt 18 — Test estimation**
```
I need to estimate how long it will take to test [feature].
Here are the test cases I have: [paste list or count]
Here is my context: [e.g. "I am one tester, exploratory approach, 
no automation, web app on 2 browsers"]
Give me a testing effort estimate in hours, with your assumptions explained.
```

**Prompt 19 — Risk-based test prioritization for a sprint**
```
We have 3 days for testing before release. Here are all the features in scope:
[list features]
Prioritize them by risk. For each, explain what could go wrong and 
what the business impact would be. Give me a testing order recommendation.
```

**Prompt 20 — Bug triage assistant**
```
Here is a list of open bugs with brief descriptions:
[paste bug list]
Help me triage them:
1. Group by functional area
2. Identify potential duplicates
3. Flag any that look Critical or release-blocking
4. Suggest which 3 to fix first based on user impact
```

---

## CATEGORY 5: Understanding Requirements

**Prompt 21 — Requirement ambiguity detection**
```
Here is a requirement or user story:
[paste requirement]
Identify any ambiguities, missing information, or unstated assumptions.
List questions I should ask the product owner before writing test cases.
```

**Prompt 22 — Acceptance criteria generation**
```
Here is a feature description or user story:
[paste story]
Write clear, testable acceptance criteria in Gherkin format (Given/When/Then).
Cover the main success scenario and at least 3 failure/edge scenarios.
```

**Prompt 23 — Understand a feature from UI alone**
```
Here is the HTML source of a page in our application:
[paste HTML]
Based only on this UI, describe:
1. What this page is for
2. All user actions available
3. What validations you would expect to be in place
4. Any obvious UX or accessibility issues you can spot
```

**Prompt 24 — Translate technical spec to test ideas**
```
Here is a technical specification written for developers:
[paste spec or section]
I am a tester without deep technical knowledge.
Explain what this feature does in plain language, 
and give me 5 test ideas based on this spec.
```

**Prompt 25 — Changelog to regression test list**
```
Here is the changelog for version [X.X] of our application:
[paste changelog]
Based on these changes, generate a prioritized list of regression test areas.
For each area, explain why the change might have introduced a regression risk.
```

---

## CATEGORY 6: Prompt Iteration (Section 4 · Clip 6 Demo)

These are the exact prompts used in the Clip 6 live demo. Use them as a template for
any feature — replace the TechShop-specific details with your own app.

**Prompt 26 — Initial four-part prompt (Clip 5 → Clip 6 starting point)**
```
You are a senior QA engineer with experience testing e-commerce applications.

The feature under test is the TechShop login form. It accepts a username and password.
Valid credentials are any registered user. The form should reject empty fields, show an
error message for wrong credentials, and mask the password input.
Known issue: BUG-002 — empty fields are currently not validated.

Generate 5 test cases covering:
- 1 happy path (valid login)
- 2 negative validation scenarios (wrong credentials, empty fields)
- 1 edge case (special characters in username)
- 1 test for the known bug BUG-002

Format as a table: ID | Title | Preconditions | Steps | Expected Result | Priority
```

**Prompt 27 — Fix a UI mismatch in the output**
```
In test case [TC-ID], step [N] says "[what AI wrote]" but in TechShop
the button text is actually "[correct text]".
Update that step to match the real UI.
```

**Prompt 28 — Fix a wrong priority**
```
Update the priority of [TC-ID] from [current priority] to [correct priority].
[Reason — e.g. empty field validation is High priority in our organisation, not Low.]
```

**Prompt 29 — Extend with additional edge cases (same conversation)**
```
Add 2 more edge cases to the test set:
- A password that contains only spaces
- A username with special characters: < > " '
Keep the same table format and continue the ID numbering.
```

**Prompt 30 — Fix vague expected results**
```
The expected results in [TC-ID] and [TC-ID] are too vague — they just say
"error message displayed". Update them to specify the exact error text
the form should show for each scenario.
```

---

## CATEGORY 7: Understanding the Application (Section 3–4)

These prompts are used when you first encounter an application and need to understand
what it does and what should be validated — with or without a requirements document.

**Prompt 31 — First vibe test: spot bugs from HTML source (Section 3 · Clip 7)**
```
You are a software tester. Look at this HTML for a login form.
What bugs, usability issues, or missing validations do you see?
Keep your answer to the five most important findings.
[Paste page HTML]
```

**Prompt 32 — Feature inventory from HTML and JavaScript (Section 4 · Clip 3)**
```
Based on this HTML and JavaScript, describe all the features and
user interactions on this page. Also list any validations you would
expect a well-built version of this app to have.
[Paste index.html content]
[Paste app.js content]
```

---

## CATEGORY 8: Test Plan Generation (Section 5)

**Prompt 33 — Test plan from requirements document — Gemini (Section 5 · Clip 2)**
```
Based on the requirements document I attached, write a concise test plan
for the current sprint.
Features in scope: [list features].
Out of scope: [list exclusions].
Tester: [headcount, days available, browser/environment].
Include: scope, approach, entry criteria, exit criteria, prioritisation, risks.
Exit criteria must be specific — all High tests executed, zero Priority 1 bugs
open, max two Priority 2 bugs open with developer acknowledgement.
```

**Prompt 34 — Rewrite risks section with specific project-grounded risks (Section 5 · Clip 2)**
```
Rewrite the risks section with three specific risks.
First: [Bug ID] — [description] — may block [area] tests until resolved.
Second: [environment constraint — e.g. no staging, all tests run on local file].
Third: [session/state constraint — e.g. cart state not persisted across sessions].
```

**Prompt 35 — Agentic test plan from repo files — Windsurf (Section 5 · Clip 3)**
```
Read the requirements in [path/requirements.md] and bug list in [path/bugs.md].
Generate a sprint test plan covering: scope, approach, entry criteria, exit criteria,
prioritization, and risks.
Exit criteria: all High tests executed, zero Priority 1 bugs open,
max two Priority 2 bugs open.
Note [BUG-ID] as a test blocker for [area] scenarios.
Save as [path/test-plan-sprint-1.md]
```

---

## CATEGORY 9: Scenario-First Test Case Design (Section 6)

Two-step approach: generate all scenario titles first → select the ones you want →
convert to full test cases. Keeps scope in your control.

**Prompt 36 — Generate all positive test scenarios, titles only (Section 6 · Clip 4)**
```
You are a QA engineer testing [App Name], a [type] application.
Based on the requirements and app code I have attached, generate all positive
test scenarios for each of these features: [feature 1], [feature 2], [feature 3], [feature 4].
List every scenario where the application should work correctly when used as intended.
Present as a numbered list grouped by feature — scenario titles only, no steps yet.
```

**Prompt 37 — Convert selected scenarios to full test cases — chatbot (Section 6 · Clip 4)**
```
Turn scenarios [list the numbers you selected] into full test cases.
Format each as: TC ID, Title, Preconditions, Steps numbered one per line,
Expected Result, Priority. Group by feature.
```

**Prompt 38 — Create test case Tasks directly in Jira via MCP — Claude Desktop (Section 6 · Clip 5)**
```
Turn scenarios [the numbers you selected] into Jira Tasks in project [PROJECT KEY].
Each task: summary, preconditions, numbered steps, expected result,
label by feature name, priority [High/Medium/Low].
Assign to the current sprint.
```

**Prompt 39 — Auto-fix a bug and open a pull request — GitHub Copilot (Section 6 · Clip 7)**
```
The [feature] in [file path] [describes the bug — what it accepts or does wrong].
Find the relevant code, write a fix that [describes correct behaviour],
and open a PR against main.
Title: Fix: [short fix description]
```

---

## CATEGORY 10: Autonomous Exploratory Testing (Section 7)

**Prompt 40 — Antigravity: run a full autonomous exploratory session (Section 7 · Clip 1)**
```
Run an exploratory testing session on the [App Name] application in [path/to/app].
Open app in the browser. Explore all user-facing features — [list features].
Test interactions, check validations, probe edge cases, and surface any bugs,
missing functionality, or unexpected behaviour you find.
Report each finding as a short title and one-sentence description.
```

**Prompt 41 — Convert Antigravity session findings to bug reports — Claude (Section 7 · Clip 3)**
```
I just finished an exploratory testing session on [feature/app name].
Here are the session findings from Antigravity:
[Paste exported session notes]
Convert each confirmed finding into a professional bug report with:
Title, Environment, Steps to Reproduce starting from a logged-in state,
Expected Result, Actual Result, Severity.
Keep each report concise and precise.
```

---

## CATEGORY 11: Bug Report Workflows (Section 8)

**Prompt 42 — Single bug report from rough notes — ChatGPT (Section 8 · Clip 2)**
```
Write a professional bug report for this finding: [describe bug in plain language].
App: [App Name], [environment — browser, OS].
Include: Title, Severity, Priority, Steps to Reproduce starting from [starting state],
Expected Result, Actual Result.
Keep it concise.
```

**Prompt 43 — Batch bug reports from multiple findings — ChatGPT (Section 8 · Clip 2)**
```
Write concise bug reports for each of these findings from a [feature] testing session.
[Number each finding — one sentence each]
App: [App Name], [browser, OS].
Format: Title, Severity, Steps from [starting state with preconditions],
Expected, Actual.
Separate each with a horizontal rule.
```

**Prompt 44 — Code-grounded bug reports and Jira Bug tickets — Cursor + MCP (Section 8 · Clip 3)**
```
Look at [file path 1] and [file path 2].
I found the following bugs during testing:
[Number each bug — one sentence each]
For each bug, write a professional bug report including Title, Severity, Priority,
Steps to Reproduce, Expected Result, Actual Result, and the relevant code location.
Then create each as a Jira Bug issue in project [PROJECT KEY],
label by feature area, set priority to match severity, assign to current sprint.
```

**Prompt 45 — Severity and priority with business risk reasoning (Section 8 · Clip 4)**
```
I found this bug: [brief description].
The application is [describe what the app does and who uses it].
What severity and priority would you assign?
What is the business risk if this ships unfixed?
Explain your reasoning for each rating.
```

---

## CATEGORY 12: Verification and Regression Testing (Section 9)

**Prompt 46 — Generate verification checklist from bug list (Section 9 · Clip 2)**
```
Here is a list of bugs that were fixed in a web app.
For each bug, write a three-step verification procedure.
[Paste bug titles or IDs with brief descriptions]
```

**Prompt 47 — Regression scope after a specific fix (Section 9 · Clip 3)**
```
A developer fixed a [describe the fix — e.g. discount calculation bug]
in the [area] of a [type of app].
What other areas of the app should I regression test to make sure the fix
did not introduce new problems?
```

**Prompt 48 — Prioritise regression areas by risk (Section 9 · Clip 3)**
```
From this regression list, which [N] areas are highest risk given that only
[describe the exact change that was made]?
Explain your reasoning.
[Paste regression list from the previous prompt]
```

---

## CATEGORY 13: Test Summary Reports (Section 10)

**Prompt 49 — Test report from manually gathered data — Claude web (Section 10 · Clip 2)**
```
Write a professional test summary report based on the following testing data.
Application: [App Name].
Testing period: [X days].
Test environment: [browser, environment description].
Test execution: total [N], executed [N], passed [N], failed [N],
blocked [N] ([reason]), not executed [N] ([reason]).
Defect summary: total [N], Critical [N], High [N], Medium [N], Low [N],
resolved [N], still open [N] ([ticket IDs]).
Write: executive summary, scope, execution summary, defect summary,
outstanding risks, and a go/no-go recommendation.
Keep it professional but readable for a non-technical stakeholder.
```

**Prompt 50 — Make go/no-go conditional — follow-up (Section 10 · Clip 2)**
```
Update the conclusion to make it conditional.
Recommend go-ahead for release if [BUG-ID] and [BUG-ID] are resolved before deployment,
with [BUG-ID] tracked as a known issue for the next sprint.
```

**Prompt 51 — Agentic test report from live Jira via MCP — Claude Desktop (Section 10 · Clip 3)**
```
Read all issues in Jira project [PROJECT KEY] for [sprint name].
Count test case Tasks by label status — how many passed, failed, blocked, not executed.
Count Bug issues by priority — Critical, High, Medium, Low.
List which bugs are resolved and which are still open with their ticket numbers.
Then generate a professional test summary report including: executive summary,
execution summary with pass rate, defect summary by severity, outstanding risks
from open bugs, and a go/no-go recommendation with rationale.
Save the report as [filename.md] in my project folder.
```
