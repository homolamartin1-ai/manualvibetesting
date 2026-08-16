# Section 7 — Exploratory Testing with Antigravity IDE (Step-by-Step)

**What you'll produce:** findings from an AI-assisted exploratory testing session — a list
of bugs and oddities Antigravity IDE surfaces by driving the app, which you'll turn into bug
reports in Section 8.

**Process step:** Test execution · **Tools:** Antigravity IDE (session co-pilot) · Claude (documentation)

---

## Before you start
- Antigravity IDE installed and signed in, with the repo folder open
- The path to the app: `techshop/broken-app`

---

## What exploratory testing is (Clip 1)
Not scripted test cases — this is structured investigation. You (and the AI) explore the
app looking for problems, guided by a **charter** (a mission: what to explore and what
could go wrong). Antigravity IDE can both suggest charters and run the session itself.

## Step 1 — Run an autonomous exploratory session (Clip 1/3)
In Antigravity IDE, use **Prompt 40** (point it at the app folder):

```
Run an exploratory testing session on the TechShop application in techshop/broken-app.
Open app in the browser. Explore all user-facing features — login, product catalog,
shopping cart, checkout.
Test interactions, check validations, probe edge cases, and surface any bugs,
missing functionality, or unexpected behaviour you find.
Report each finding as a short title and one-sentence description.
```

Antigravity IDE opens the app, clicks through it, and reports findings — each as a title + one
line. Watch what it does; it's testing the app live.

## Step 2 — Review the findings (your judgment)
Read every finding. For each, decide:
- **Real bug?** Keep it.
- **Expected behaviour the AI misread?** Discard it.
- **Needs a closer look?** Note it for follow-up.

The AI surfaces; **you confirm**. This is the core skill — the machine can't tell a bug
from intended behaviour without you.

## Step 3 — Export the session notes
Have Antigravity IDE export or copy out its session findings. Save them (e.g.
`exploratory-findings.md`). These are the raw material for Section 8's bug reports.

## Step 4 — Turn findings into draft bug reports (Clip 3/4)
Hand the exported notes to Claude with **Prompt 41**:

```
I just finished an exploratory testing session on TechShop.
Here are the session findings from Antigravity IDE:
[Paste exported session notes]
Convert each confirmed finding into a professional bug report with:
Title, Environment, Steps to Reproduce starting from a logged-in state,
Expected Result, Actual Result, Severity.
Keep each report concise and precise.
```

You now have draft bug reports. Section 8 polishes them and files them in Jira.

---

## Optional: guide your own exploration
If you want to explore manually with AI as co-pilot, these help:
- **Prompt 6** — generate test charters
- **Prompt 7** — what to explore next after finding a bug
- **Prompt 8** — heuristics-based checklist (SFDIPOT, FEW HICCUPPS)

---

## Common mistakes
- **Accepting every Antigravity IDE finding as a bug** → some are intended behaviour. Confirm each yourself (Step 2).
- **Not saving the session notes** → you'll have nothing to feed Section 8. Export them.
- **Pointing Antigravity IDE at the wrong folder** → it explores the wrong app. Use `techshop/broken-app`.

## Done when
- [ ] Antigravity IDE ran a session on `techshop/broken-app` and reported findings
- [ ] You reviewed each finding and kept only the real ones
- [ ] You saved `exploratory-findings.md`
- [ ] You converted them to draft bug reports with Prompt 41
