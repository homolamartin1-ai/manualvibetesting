# Vibetesting in 2026 — Course Resources

This repository contains all the files you need to follow along with the course.
Download or fork it once and everything is in place for every section.

---

## What is in this repo

```
techshop/
  broken-app/        TechShop demo app — intentionally broken (Sections 4–10)
  fixed-app/         TechShop demo app — all bugs resolved (reference)

capstone/
  booknow-broken/    BookNow capstone app — intentionally broken (Section 12)
  booknow-fixed/     BookNow capstone app — all bugs resolved (Section 12 reference)

docs/                Requirements and bug list for Windsurf demos (Section 5)
resources/           Setup guides, templates, cheat sheets, and reference files
```

**TechShop** is the application you test throughout the main course (Sections 4–10).
**BookNow** is a completely separate app used only for the Section 12 capstone project.
Do not use BookNow until you reach Section 12.

---

## How to get these files

### Option 1 — Download as ZIP (simplest, no GitHub account needed)

1. Click the green **Code** button at the top of this page
2. Click **Download ZIP**
3. Extract the ZIP to your Desktop or Documents folder
4. Open the extracted folder — all files are ready to use

### Option 2 — Fork and clone (recommended if you want to save your own work)

Forking gives you your own copy of this repo. You can commit your test plans, notes,
and scripts to it and build a portfolio as you go through the course.

1. Click **Fork** at the top right of this page
2. GitHub creates a copy under your own account
3. Click the green **Code** button on your fork, copy the HTTPS URL
4. Open Terminal (Mac) or PowerShell (Windows) and run:
   ```
   git clone https://github.com/YOUR-USERNAME/REPO-NAME.git
   ```
5. The folder appears on your machine — open it in VS Code or any editor

**New to Git?** Read `resources/github-setup-guide.md` — it covers every step with screenshots descriptions.

---

## Opening the demo apps

The apps are plain HTML files — no server or install required.

- On **Mac**: right-click `index.html` → Open With → Chrome
- On **Windows**: right-click `index.html` → Open with → Google Chrome

For the main course, open `techshop/broken-app/index.html`.
For the capstone, open `capstone/booknow-broken/index.html`.

Or drag the file directly into a Chrome tab.

---

## Key resource files

| File | Used in |
|---|---|
| `resources/mcp-setup-guide.md` | Section 3 — MCP setup walkthrough |
| `resources/mcp-env-setup.md` | Section 3 — environment variable commands |
| `resources/claude_desktop_config_template.json` | Section 3 — MCP config file |
| `resources/techshop-sprint-requirements.md` | Section 5 — paste into Google Docs for Gemini demo |
| `docs/requirements.md` | Section 5 — Windsurf reads this for test plan generation |
| `docs/bugs.md` | Section 5 — Windsurf reads this for test plan risks |
| `resources/known-bugs.md` | Section 4+ — TechShop intentional bug list |
| `resources/known-bugs-booknow.md` | Section 12 — BookNow intentional bug list |
| `resources/sample-test-cases.md` | Section 6 — test case format reference |
| `resources/bug-report-templates.md` | Section 8 — bug report format reference |
| `resources/ai-prompts-cheatsheet.md` | All sections — prompt library |

---

## Questions or issues

If a file is missing or something does not work as shown in the course, open an issue
in this repository and describe what you expected vs what happened.
