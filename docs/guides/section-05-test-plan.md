# Section 5 — Build a Test Plan (Step-by-Step)

**What you'll produce:** a **sprint test plan** — scope, approach, entry/exit criteria,
prioritisation, and risks — built two ways: the chatbot way (Gemini) and the agentic way
(Windsurf).

**Process step:** Test planning · **Tools:** Gemini (chatbot) · Windsurf (agentic + PR)

---

## Before you start
- Gemini open (gemini.google.com) and a Google account (for Google Docs)
- Windsurf installed, with the repo folder opened in it
- The file [`resources/techshop-sprint-requirements.md`](../../resources/techshop-sprint-requirements.md)

---

## Part A — The chatbot way (Gemini + Google Docs) — Clip 2

### Step 1 — Put the requirements in Google Docs
1. Open [`resources/techshop-sprint-requirements.md`](../../resources/techshop-sprint-requirements.md).
2. Copy its contents into a new Google Doc (this is the "spec" Gemini will read).

### Step 2 — Generate the plan
In Gemini, attach or paste the requirements doc, then use **Prompt 33**:

```
Based on the requirements document I attached, write a concise test plan
for the current sprint.
Features in scope: login, product catalog, shopping cart, checkout.
Out of scope: [list anything you're not testing].
Tester: 1 tester, 3 days, Chrome on desktop.
Include: scope, approach, entry criteria, exit criteria, prioritisation, risks.
Exit criteria must be specific — all High tests executed, zero Priority 1 bugs
open, max two Priority 2 bugs open with developer acknowledgement.
```

### Step 3 — Make the risks real (not generic) — Clip 2 follow-up
Generic risks are useless. In the **same** Gemini chat, use **Prompt 34** to ground them:

```
Rewrite the risks section with three specific risks.
First: BUG-011 — the "Proceed to Checkout" button is unresponsive — may block all
checkout tests until resolved.
Second: no staging environment — all tests run against a local HTML file.
Third: cart state is not persisted across sessions.
```

### Step 4 — Save the plan
Save the finished plan (Google Doc, or export to `test-plan-sprint-1.md` in your repo).

---

## Part B — The agentic way (Windsurf reads the repo) — Clip 3

This time the AI reads the repo files itself and raises the plan as a pull request — no
copy-paste.

### Step 1 — Open the repo in Windsurf
Open your cloned repo folder in Windsurf so its agent can see the files.

### Step 2 — Ask it to read the files and write the plan
Use **Prompt 35** in Windsurf's agent:

```
Read the requirements in docs/requirements.md and bug list in docs/bugs.md.
Generate a sprint test plan covering: scope, approach, entry criteria, exit criteria,
prioritization, and risks.
Exit criteria: all High tests executed, zero Priority 1 bugs open,
max two Priority 2 bugs open.
Note BUG-011 as a test blocker for checkout scenarios.
Save as docs/test-plan-sprint-1.md
```

### Step 3 — Review and accept
Windsurf writes the file (and can open a pull request). **Read it before accepting** —
check the scope matches, the exit criteria are specific, and BUG-011 is flagged as a
blocker. Accept the change / merge the PR when it's right.

---

## Common mistakes
- **Leaving the risks generic** ("testing might take longer than expected"). Real risks
  name real things — the blocker bug, the missing staging env. That's Step 3 of Part A.
- **Running Windsurf without opening the repo folder** → the agent can't read
  `docs/requirements.md` and will guess. Open the folder first.
- **Accepting Windsurf's PR without reading it** → the whole skill is reviewing AI output.

## Done when
- [ ] You have a Gemini-generated plan with **specific** risks
- [ ] Windsurf generated `test-plan-sprint-1.md` from the repo files
- [ ] You read and accepted/merged the Windsurf plan
- [ ] Both plans have concrete exit criteria and flag BUG-011 as a blocker
