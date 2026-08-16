# Section 7 — Exploratory Testing with Antigravity IDE (Step-by-Step)

**What you'll produce:** a list of bugs and oddities that Antigravity IDE finds by driving
the app for you — which you'll then turn into draft bug reports for Section 8.

**Process step:** Test execution · **Tools:** Antigravity IDE · Claude

> Exploratory testing = structured investigation, not scripted steps. You (and the AI) poke
> at the app looking for problems. Antigravity IDE can run the whole session itself and
> report what it finds.

---

## Before you start
- **Antigravity IDE** open, with your course folder opened in it
  (**File → Open Folder** → your course folder)
- You'll point it at `techshop/broken-app`

---

## Step 1 — Open the chat/agent panel in Antigravity IDE
Find the **Agent / Chat** panel (a sidebar, or a shortcut shown on the welcome screen).
That's where you'll type the instruction below.

**✅ Check:** you can see a text box where you can type an instruction to the AI agent.

## Step 2 — Tell it to run an exploratory session (video Clip 1) — paste this

```
Run an exploratory testing session on the TechShop app in the folder techshop/broken-app.
Open the app in the browser and explore every user-facing feature: login, product catalog,
shopping cart, and checkout.
Try normal actions, invalid input, empty fields, and edge cases. Look for bugs, missing
validation, wrong calculations, and anything that behaves unexpectedly.
Report each finding as a short title plus a one-sentence description.
```

Press **Enter**. Antigravity IDE will open the app and click through it on its own. Watch —
it's testing the app live.

**✅ Check:** it produces a list of findings, each a short title + one sentence (e.g.
"Password shown in plain text — the login field does not mask characters").

## Step 3 — Review the findings yourself (this is the real skill)
Go through the list. For **each** finding, decide:
- ✅ **Real bug** → keep it.
- ❌ **Actually intended behaviour the AI misread** → cross it out.
- ❓ **Not sure** → note it and check it yourself in the browser.

The AI *surfaces* things; **you decide** what's a real bug. A machine can't tell a bug from
a feature without you.

**✅ Check:** you have a shortlist of confirmed real findings.

## Step 4 — Save the session findings
Copy the confirmed findings into a file called **`exploratory-findings.md`** in your course
folder. (If Antigravity IDE has an export button, use it.) These are the raw material for
Section 8.

## Step 5 — Turn the findings into draft bug reports (video Clip 3/4)
1. Open **Claude**.
2. Paste this, then paste your findings where shown:

```
I just finished an exploratory testing session on TechShop.
Here are my confirmed findings:
[Paste your findings from exploratory-findings.md]

Turn each finding into a professional bug report with: Title, Environment, Steps to
Reproduce (starting from a logged-in state), Expected Result, Actual Result, and Severity.
Keep each report short and precise.
```

**✅ Check:** you now have a draft bug report for each finding. Section 8 will polish these
and file them in Jira.

---

## Optional — if you'd rather explore manually with the AI helping
Ask Claude for **test charters** ("Write 3 exploratory test charters for the TechShop
checkout — each with a mission, risk areas, and key questions"), or ask "I found bug X —
what related areas should I explore next?"

---

## Common mistakes (read if you're stuck)
- **You kept every finding as a bug.** Some are intended behaviour — confirm each one
  yourself (Step 3).
- **You didn't save the findings.** Then Section 8 has nothing to work from. Save
  `exploratory-findings.md`.
- **You pointed it at the wrong folder.** It must be `techshop/broken-app` (not `fixed-app`,
  not `capstone`).

## Done when
- [ ] Antigravity IDE ran a session on `techshop/broken-app` and reported findings
- [ ] You reviewed each finding and kept only the real ones
- [ ] You saved `exploratory-findings.md`
- [ ] You turned the findings into draft bug reports with Claude
