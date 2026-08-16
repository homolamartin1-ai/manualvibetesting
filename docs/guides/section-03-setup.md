# Section 3 — Setup (Step-by-Step)

**What you'll produce:** every tool installed and working, and your first "vibe test" run
against a real page of HTML.

> You only do this section once. It's the longest setup in the course — take it slowly,
> tick each box, and you'll never touch it again.

---

## Before you start
- A computer with internet (Mac, Windows, or Linux)
- A web browser
- ~30 minutes

You do **not** need to know how to code.

---

## Step 1 — Get the course files
You need the repo on your machine. Easiest way (no GitHub account needed):

1. Go to the course repository on GitHub.
2. Click the green **Code** button → **Download ZIP**.
3. Extract the ZIP to your Desktop.
4. Open the folder — you'll see `techshop/`, `capstone/`, `resources/`, `docs/`.

> Want to save your own work and build a portfolio? Use **Fork and clone** instead —
> full steps are in [`resources/github-setup-guide.md`](../../resources/github-setup-guide.md).

## Step 2 — Create the conversational AI accounts (Clip 2)
Sign up (free tier) for each — you'll use all three:
1. **Claude** — claude.ai (also install the **Claude Desktop app**, needed for Jira/MCP later)
2. **ChatGPT** — chat.openai.com
3. **Gemini** — gemini.google.com

> Install the **Claude Desktop app**, not just the browser version — Sections 6, 8 and 10
> connect it to Jira, and that only works in the desktop app.

## Step 3 — GitHub + GitHub Copilot (Clip 3)
1. Create a free **GitHub** account.
2. Enable **GitHub Copilot** (free tier for individuals).
Full walkthrough: [`resources/github-setup-guide.md`](../../resources/github-setup-guide.md).

## Step 4 — Install the agentic editors (Clips 4–5)
1. **Cursor** — cursor.com → download → install → sign in.
2. **Windsurf** — windsurf.com → download → install → sign in.
3. **Antigravity** — install from its site → sign in.

These are code editors with an AI agent built in. You won't write code — the agent does;
you direct and review.

## Step 5 — (Optional now, needed in Section 6) Connect Jira via MCP
This lets Claude Desktop create Jira tickets for you automatically. You can do it now or
when you reach Section 6. Full guide with the config file and troubleshooting:
[`resources/mcp-setup-guide.md`](../../resources/mcp-setup-guide.md).

## Step 6 — Your first vibe test (Clip 7)
This proves everything works and shows you what "vibetesting" feels like.

1. Open `techshop/broken-app/index.html` in a text editor (or view its source).
2. Copy the HTML of the login form.
3. Open Claude (or ChatGPT) and paste **Prompt 31**:

```
You are a software tester. Look at this HTML for a login form.
What bugs, usability issues, or missing validations do you see?
Keep your answer to the five most important findings.
[Paste page HTML]
```

4. Read the five findings the AI returns. You just found real issues in the app without
   opening a single test tool. That's the whole idea of the course.

---

## Common mistakes
- **Using Claude in the browser instead of the desktop app** → Jira/MCP won't work later. Install the desktop app now.
- **Skipping the free-tier sign-ups** thinking you'll "do it later" → Section 5 onward assumes they're ready. Do them now.
- **Downloading the ZIP but never extracting it** → you can't open files inside a zipped folder. Extract first.

## Done when
- [ ] The repo folder is on your Desktop and you can open `techshop/broken-app/index.html`
- [ ] You can log into Claude, ChatGPT, and Gemini
- [ ] Claude **Desktop app** is installed
- [ ] Cursor, Windsurf, and Antigravity are installed and signed in
- [ ] You ran Prompt 31 and got five findings back
