# Section 5 — Build a Test Plan (Step-by-Step)

**What you'll produce:** a **sprint test plan** — a short document that says what you'll
test, how, when you're "done," and what could go wrong. You'll build it twice: the easy way
(Gemini chatbot) and the automated way (Windsurf reads your files and writes it).

**Process step:** Test planning · **Tools:** Gemini · Windsurf

> A "test plan" sounds formal but it's just: scope, approach, entry criteria, exit
> criteria, priorities, risks. The AI writes it; you make sure it's specific.

---

# PART A — The easy way: Gemini + Google Docs (video Clip 2)

## Step 1 — Put the requirements into a Google Doc
1. Open [`resources/techshop-sprint-requirements.md`](../../resources/techshop-sprint-requirements.md)
   and copy everything.
2. Go to **docs.google.com**, click **Blank document**, and paste it in. This is the "spec"
   Gemini will read.

## Step 2 — Open Gemini and attach the doc
1. Go to **gemini.google.com**.
2. Attach the Google Doc (use the **+**/attach button and pick the doc), **or** just paste
   the requirements text straight into the message box.

## Step 3 — Ask for the plan (paste this exactly)

```
Based on the requirements I gave you, write a concise test plan for the current sprint.
Features in scope: login, product catalog, shopping cart, checkout.
Out of scope: payment gateway, email notifications, mobile layout.
Tester: 1 tester, 3 days, testing in Chrome on desktop.
Include these sections: scope, approach, entry criteria, exit criteria, prioritisation, risks.
Make the exit criteria specific: all High-priority tests executed, zero Priority 1 bugs
open, and no more than two Priority 2 bugs open with developer acknowledgement.
```

Press **Enter**.

**✅ Check:** Gemini returns a plan with all six sections, and the exit criteria mention
actual numbers (not just "testing is complete").

## Step 4 — Fix the risks so they're real (paste in the SAME chat)
The first draft's risks are usually generic and useless. Replace them:

```
Rewrite the risks section with three specific risks:
1. BUG-011 — the "Proceed to Checkout" button is unresponsive — may block all checkout
   tests until it's fixed.
2. There is no staging environment — all testing runs against a local HTML file.
3. Cart contents are not saved if the page is refreshed.
```

**✅ Check:** the risks now name real things (the blocker bug, the local-file limitation),
not vague worries.

## Step 5 — Save it
Keep the Google Doc, or copy the plan into a file called `test-plan-sprint-1.md` in your
course folder.

---

# PART B — The automated way: Windsurf reads your repo (video Clip 3)

This time the AI reads the files itself and writes the plan as a file — no copy-paste.

## Step 1 — Open the course folder inside Windsurf
1. Open **Windsurf**.
2. **File → Open Folder** → choose your course folder (the one with `techshop`, `docs`,
   etc.). Now Windsurf's AI can see your files.

## Step 2 — Open the chat/agent panel
Find the **Chat** or **Cascade/Agent** panel (right-hand sidebar, or the shortcut shown on
Windsurf's welcome screen). This is where you type.

## Step 3 — Ask it to read the files and write the plan (paste this)

```
Read the requirements in docs/requirements.md and the bug list in docs/bugs.md.
Write a sprint test plan with these sections: scope, approach, entry criteria,
exit criteria, prioritisation, and risks.
Exit criteria: all High-priority tests executed, zero Priority 1 bugs open,
no more than two Priority 2 bugs open.
Note BUG-011 as a blocker for the checkout tests.
Save the plan as docs/test-plan-sprint-1.md
```

Press **Enter**. Windsurf will read the files and create the plan file for you (it may ask
you to **Accept** the new file — do that after you read it).

**✅ Check:** a new file `docs/test-plan-sprint-1.md` exists in your folder, and it flags
BUG-011 as a blocker.

## Step 4 — Read it before you accept
Open the file. Confirm: scope matches, exit criteria have real numbers, BUG-011 is flagged.
The whole skill of this course is **reviewing what the AI produced** — don't just accept it
blindly.

---

## Common mistakes (read if you're stuck)
- **Risks left generic** ("testing may take longer than planned"). Real risks name real
  things — do Part A, Step 4.
- **You opened Windsurf but not the folder.** Then it can't read `docs/requirements.md` and
  will make things up. Use **File → Open Folder** first (Part B, Step 1).
- **You accepted Windsurf's file without reading it.** Always read it first.

## Done when
- [ ] Gemini produced a plan with **specific** risks and numeric exit criteria
- [ ] Windsurf created `docs/test-plan-sprint-1.md` from your repo files
- [ ] You read the Windsurf plan and confirmed BUG-011 is flagged as a blocker
