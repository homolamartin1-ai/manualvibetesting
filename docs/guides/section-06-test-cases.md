# Section 6 — Test Case Design (Step-by-Step)

**What you'll produce:** a set of test cases (positive, negative, edge) — first as a
document via Claude, then created directly as Tasks in **Jira** via GitHub Copilot / Claude
Desktop. Plus a first taste of the full agentic loop (trace a bug → fix → pull request).

**Process step:** Test design · **Tools:** Claude (chatbot) · GitHub Copilot / Claude Desktop (agentic + Jira)

---

## Before you start
- Claude open, and Claude **Desktop** connected to Jira (see [`resources/mcp-setup-guide.md`](../../resources/mcp-setup-guide.md))
- A Jira project created — note its **project key** (e.g. `TS`)
- Your `feature-inventory.md` from Section 4, and the app code
- GitHub Copilot enabled (for the fix-and-PR step)

---

## The method: scenarios first, then full cases
Don't ask for full test cases in one shot — you lose control of scope. Instead:
**generate scenario titles → pick the ones you want → convert those to full cases.**

## Step 1 — Generate all positive scenario titles (Clip 4)
In Claude, attach the requirements and app code, then use **Prompt 36**:

```
You are a QA engineer testing TechShop, an e-commerce application.
Based on the requirements and app code I have attached, generate all positive
test scenarios for each of these features: login, product catalog, shopping cart, checkout.
List every scenario where the application should work correctly when used as intended.
Present as a numbered list grouped by feature — scenario titles only, no steps yet.
```

You get a numbered list. **You decide** which scenarios matter — that's your judgment, not
the AI's.

## Step 2 — Convert the ones you chose to full test cases (Clip 4)
Pick the scenario numbers you want, then **Prompt 37**:

```
Turn scenarios [list the numbers you selected] into full test cases.
Format each as: TC ID, Title, Preconditions, Steps numbered one per line,
Expected Result, Priority. Group by feature.
```

Review each case. Fix anything wrong using the small edit prompts (Prompts 27–30 in the
cheat sheet) — e.g. correct a button label, fix a vague expected result, bump a priority.

## Step 3 — Add negative and edge cases
Repeat Steps 1–2 asking for **negative** and **edge** scenarios (invalid input, empty
fields, boundaries, special characters). Aim for a balance — not just happy paths.

## Step 4 — Create the cases directly in Jira (Clip 5)
Now the agentic way — no copy-paste. In **Claude Desktop** (connected to Jira via MCP),
use **Prompt 38** (replace `[PROJECT KEY]` with yours):

```
Turn scenarios [the numbers you selected] into Jira Tasks in project [PROJECT KEY].
Each task: summary, preconditions, numbered steps, expected result,
label by feature name, priority [High/Medium/Low].
Assign to the current sprint.
```

Switch to Jira in your browser — the Tasks are there. That's the agentic workflow: the AI
did the data entry for you.

## Step 5 — See the full agentic loop: fix a bug and open a PR (Clip 7)
With GitHub Copilot (repo open), use **Prompt 39**:

```
The [feature] in [file path] [describe the bug — what it accepts or does wrong].
Find the relevant code, write a fix that [describes correct behaviour],
and open a PR against main.
Title: Fix: [short fix description]
```

Copilot traces the bug in the code, writes a fix, and opens a pull request. You **review**
the PR — you don't have to write code, but you decide if the fix is right.

---

## Common mistakes
- **Asking for 40 full test cases at once** → unreviewable wall of text. Use the
  scenarios-first method so you stay in control.
- **Claude Desktop not connected to Jira** → Step 4 fails. Set up MCP first
  ([`resources/mcp-setup-guide.md`](../../resources/mcp-setup-guide.md)).
- **Forgetting the project key** → the Jira tasks land nowhere. Get it from your Jira project URL.
- **Merging the Copilot PR blind** → always read the fix.

## Done when
- [ ] You generated scenario titles and chose which to build
- [ ] You have full positive, negative, and edge test cases (reviewed)
- [ ] Test case Tasks exist in your Jira project, assigned to the sprint
- [ ] You watched Copilot trace a bug, fix it, and open a PR — and you reviewed it
