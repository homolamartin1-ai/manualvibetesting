# AI Prompts Cheat Sheet for Manual Testers
> 30 ready-to-use prompts for Vibetesting in 2026
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
