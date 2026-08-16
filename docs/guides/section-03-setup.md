# Section 3 — Setup (Step-by-Step)

**What you'll produce:** every tool installed and working, and your first "vibe test" run
against a real page of HTML.

**How to use this guide:** do one numbered step at a time, top to bottom. After the
important steps there's a **✅ Check** — don't move on until it's true. You do **not** need
to know how to code.

> This is the longest setup in the course. Budget ~30 minutes, tick every box, and you
> never touch it again.

---

## Step 1 — Get the course files onto your computer

1. Open the course repository page on GitHub (the link is in the course resources).
2. Find the green **Code** button near the top right. Click it.
3. In the little menu that opens, click **Download ZIP**.
4. Go to your **Downloads** folder and find the file (ends in `.zip`).
5. **Double-click the ZIP** to unzip it. A normal folder appears.
6. Drag that folder to your **Desktop** so it's easy to find.
7. Open it. You should see folders named `techshop`, `capstone`, `resources`, `docs`.

**✅ Check:** you can open `techshop` → `broken-app` and see three files: `index.html`,
`style.css`, `app.js`. If yes, you have the course files.

> Prefer to save your own work as you go? Use **Fork & clone** instead — the exact steps
> are in [`resources/github-setup-guide.md`](../../resources/github-setup-guide.md). If
> you're new, Download ZIP is completely fine.

---

## Step 2 — Create the three chatbot accounts (video Clip 2)

You'll use all three during the course. All free. Do all three now.

1. **Claude** — go to **claude.ai**, click **Sign up**, create an account.
   - Then also install the **Claude Desktop app** (download from claude.ai/download).
     You need the *desktop app*, not just the website — Sections 6, 8 and 10 connect it to
     Jira, and that only works in the desktop app.
2. **ChatGPT** — go to **chat.openai.com**, sign up.
3. **Gemini** — go to **gemini.google.com**, sign in with a Google account.

**✅ Check:** you can open each of the three, type "hello" in the message box at the
bottom, press Enter, and get a reply. And the **Claude Desktop app** is installed on your
computer (not just the website).

---

## Step 3 — GitHub + GitHub Copilot (video Clip 3)

1. If you don't have one yet, create a free account at **github.com**.
2. Turn on **GitHub Copilot** (there's a free tier for individuals).
3. Full click-by-click walkthrough: [`resources/github-setup-guide.md`](../../resources/github-setup-guide.md).

**✅ Check:** you can log into github.com and Copilot shows as enabled on your account.

---

## Step 4 — Install the three AI editors (video Clips 4–5)

These are text editors with an AI assistant built in. You won't write code — the AI does;
you tell it what to do and check its work.

1. **Cursor** — go to **cursor.com**, click Download, install it, open it, sign in.
2. **Windsurf** — go to **windsurf.com**, download, install, open, sign in.
3. **Antigravity IDE** — install from its website, open it, sign in.

**✅ Check:** all three open, and in each one you can find a **chat panel** (usually a
sidebar on the right, or opened with a keyboard shortcut the app shows on first launch).
That chat panel is where you'll paste prompts later.

---

## Step 5 — (Can wait until Section 6) Connect Claude to Jira with MCP

This lets Claude Desktop create Jira tickets for you automatically. You can do it now or
when you reach Section 6 — it's not needed before then.

- Full guide, including the config file to copy and troubleshooting:
  [`resources/mcp-setup-guide.md`](../../resources/mcp-setup-guide.md).

---

## Step 6 — Your first vibe test (video Clip 7)

This proves everything works and shows you what the course *feels* like.

1. On your Desktop, open the course folder → `techshop` → `broken-app`.
2. **Right-click `index.html` → Open With → your text editor** (or Notepad/TextEdit).
   You'll see the page's HTML code — don't worry about understanding it.
3. Select **all** of it (Ctrl+A / Cmd+A) and **copy** it (Ctrl+C / Cmd+C).
4. Open **Claude** (or ChatGPT). Click in the message box at the bottom.
5. Type this, then paste the copied HTML where it says `[Paste page HTML]`:

```
You are a software tester. Look at this HTML for a login form.
What bugs, usability issues, or missing validations do you see?
Keep your answer to the five most important findings.
[Paste page HTML]
```

6. Press **Enter**. Read the five findings the AI returns.

**✅ Check:** the AI listed five specific problems with the login form (for example: the
password field doesn't hide characters, empty fields aren't validated, etc.). You just
found real bugs without opening a single testing tool — that's vibetesting.

---

## Common mistakes (read if you're stuck)
- **You installed Claude in the browser but not the desktop app.** Jira/MCP in Sections 6,
  8, 10 will fail. Install the **desktop app** now (claude.ai/download).
- **You downloaded the ZIP but tried to open files inside it without unzipping.** You must
  double-click the ZIP to unzip first, then open the normal folder.
- **You "skipped the sign-ups to do later."** Section 5 onward assumes all accounts exist.
  Do all of Step 2 now.
- **You can't find the chat panel in Cursor/Windsurf/Antigravity IDE.** Look for a speech-
  bubble or "Chat"/"Agent" icon in the sidebar, or check the app's welcome screen for the
  keyboard shortcut. That panel is where every prompt goes.

## Done when
- [ ] The course folder is on your Desktop and you can open `techshop/broken-app/index.html`
- [ ] You can log into Claude, ChatGPT, and Gemini
- [ ] The Claude **Desktop app** is installed
- [ ] Cursor, Windsurf, and Antigravity IDE are installed, signed in, and you found the chat panel in each
- [ ] You ran the first-vibe-test prompt and got five findings back
