# Section 6 — Test Case Design (Step-by-Step)

**What you'll produce:** a set of test cases (positive, negative, and edge) — first as a
document with Claude, then created automatically as tickets in **Jira**. Plus a first look
at the full loop: the AI finds a bug in the code, fixes it, and opens a pull request.

**Process step:** Test design · **Tools:** Claude · Claude Desktop + Jira (MCP) · GitHub Copilot

> **The method (important):** don't ask for 40 finished test cases at once — you'll get an
> unreadable wall. Instead: **(1) get a list of scenario titles → (2) pick the ones you
> want → (3) turn those into full test cases.** You stay in control of scope.

---

## Before you start
- Claude open (and, for Step 5, the **Claude Desktop app** connected to Jira)
- Your `feature-inventory.md` from Section 4
- A Jira project. Note its **project key** — the short code in front of ticket numbers,
  e.g. in `TS-14` the key is **`TS`**. (Find it in your Jira project's URL or settings.)

---

## Step 1 — Get a list of positive scenario titles (video Clip 4)
1. Open **Claude**. Attach or paste your `feature-inventory.md` (and, if you like, the app
   code from Section 4).
2. Paste this:

```
You are a QA engineer testing TechShop, an e-commerce web app.
Based on the requirements and app details I gave you, list all the POSITIVE test
scenarios for each of these features: login, product catalog, shopping cart, checkout.
A positive scenario is one where the app should work correctly when used as intended.
Give me a numbered list, grouped by feature. Scenario TITLES ONLY — no steps yet.
```

**✅ Check:** you get a numbered list like "1. Log in with valid credentials, 2. …",
grouped by feature. No full steps yet — that's correct.

## Step 2 — Pick the ones you want, then get full test cases (video Clip 4)
1. Decide which scenario numbers matter (e.g. 1, 2, 5, 7). **This choice is your judgment.**
2. Paste this (put your chosen numbers in):

```
Turn scenarios 1, 2, 5, 7 into full test cases.
Format each as: TC ID, Title, Preconditions, Steps (numbered, one action per line),
Expected Result, Priority (High/Medium/Low). Group them by feature.
```

**✅ Check:** each scenario is now a full test case with numbered steps and a priority.

## Step 3 — Add negative and edge cases
Repeat Steps 1–2, but ask for **negative** scenarios (invalid input, empty fields, wrong
password) and **edge** scenarios (boundaries, very long input, special characters like
`< > " '`). You want a mix — not just happy paths. Fix anything wrong with a quick follow-up
like: *"In TC-03, the button text should be 'Log In', not 'Sign In' — update that step."*

**✅ Check:** you now have positive, negative, and edge cases, and you've reviewed them for
accuracy against the real app.

## Step 4 — (One-time) Connect Claude Desktop to Jira
If you haven't yet, follow [`resources/mcp-setup-guide.md`](../../resources/mcp-setup-guide.md)
to connect the **Claude Desktop app** to your Jira project. This is what lets Claude create
tickets for you.

**✅ Check:** in the Claude Desktop app, you can ask "list my Jira projects" and it responds
with your project (not an error). If it errors, re-check the MCP guide.

## Step 5 — Create the test cases in Jira automatically (video Clip 5)
In the **Claude Desktop app** (not the website), paste this — replace `TS` with your key:

```
Create Jira Tasks in project TS for these test cases: [paste the test cases from Step 2–3].
For each task: a clear summary, the preconditions, the numbered steps, and the expected
result. Add a label for the feature name, set the priority (High/Medium/Low), and assign
it to the current sprint.
```

**✅ Check:** open Jira in your browser → your project → the new Task tickets are there, in
the current sprint. The AI just did all the data entry.

## Step 6 — See the full agentic loop: find a bug, fix it, open a PR (video Clip 7)
1. Open **GitHub Copilot** (with the repo open).
2. Paste this (adjust the bug description to a real one you found):

```
In techshop/broken-app/app.js, the login form currently accepts empty username and
password fields instead of rejecting them.
Find the code responsible, write a fix that rejects empty fields with an error message,
and open a pull request against main.
Title the PR: Fix: reject empty login fields
```

3. Copilot finds the code, writes a fix, and opens a **pull request**. Open the PR and
   **read the change** — you don't have to write code, but you decide if the fix looks right.

**✅ Check:** a pull request exists with a code change, and you understood roughly what it
changed.

---

## Common mistakes (read if you're stuck)
- **You asked for all test cases at once.** Use the scenarios-first method (Steps 1–2) so
  the output is reviewable.
- **Step 5 does nothing / errors.** You're probably in the Claude **website**, not the
  **desktop app**, or MCP isn't connected. Do Step 4 first, in the desktop app.
- **The Jira tickets went nowhere.** Wrong project key. Get the exact key (e.g. `TS`) from
  your Jira project and use it in the prompt.
- **You merged the Copilot PR without reading it.** Always open and read the change first.

## Done when
- [ ] You generated scenario titles and chose which to build
- [ ] You have full positive, negative, and edge test cases, reviewed for accuracy
- [ ] Test-case Tasks exist in your Jira project, in the current sprint
- [ ] You watched Copilot trace a bug, fix it, and open a PR — and you read the PR
