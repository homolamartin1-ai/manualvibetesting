# MCP Setup Guide — Connecting Claude to Jira
## Vibetesting in 2026 — Course Resources

This guide connects Claude Desktop to your Jira project using the Model Context Protocol (MCP).
Once done, Claude can create Jira tickets, read your project data, and generate reports directly —
no copy-paste required.

**Time to complete:** ~10 minutes
**Requires:** Claude Desktop app (not the browser version)

---

## Step 1 — Generate your Jira API Token

1. Go to **id.atlassian.com/manage-profile/security/api-tokens**
2. Click **Create API token**
3. Name it: `MCP Course`
4. Click **Create**
5. **Copy the token immediately** — you cannot view it again after closing this dialog

---

## Step 2 — Set environment variables

Follow the instructions in `resources/mcp-env-setup.md` to set your three environment variables:

- `JIRA_URL` — your Jira site URL, e.g. `https://yourname-testing.atlassian.net`
- `JIRA_USERNAME` — the email you use to log into Jira
- `JIRA_API_TOKEN` — the token you copied in Step 1

The config file reads these variables automatically — your credentials never appear in any file
you might accidentally share or commit to GitHub.

---

## Step 3 — Install uv (Python package runner)

The Jira MCP server runs via `uvx` (included with uv). Install it once.

**Mac:**
Open Terminal (Spotlight → Terminal) and run:
```
curl -LsSf https://astral.sh/uv/install.sh | sh
```
Then restart Terminal.

**Windows:**
Open PowerShell and run:
```
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
```
Then restart PowerShell.

Verify it worked: `uvx --version` — you should see a version number.

---

## Step 4 — Copy the config to Claude Desktop

The config template is already filled in — it reads your credentials from the environment
variables you set in Step 2. You do not need to edit it.

**Mac:**
```bash
mkdir -p ~/Library/Application\ Support/Claude
cp /path/to/course-repo/resources/claude_desktop_config_template.json \
   ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

Or manually:
1. Open Finder
2. Press **Cmd + Shift + G** and paste: `~/Library/Application Support/Claude/`
3. Copy `claude_desktop_config_template.json` into that folder
4. Rename the copy to `claude_desktop_config.json`

If a `claude_desktop_config.json` already exists, open both files and add the `"atlassian"` block
inside the existing `"mcpServers"` object instead of replacing the whole file.

**Windows:**
1. Press **Win + R**, type `%APPDATA%\Claude\` and press Enter
2. Copy `claude_desktop_config_template.json` into that folder
3. Rename it to `claude_desktop_config.json` (same merge rule applies if the file already exists)

---

## Step 5 — Restart Claude Desktop

Fully quit Claude Desktop (not just close the window — right-click the tray icon and Quit).
Reopen it.

In any Claude conversation, you should now see a small hammer icon (🔨) near the message
input — this confirms MCP tools are active.

---

## Step 6 — Test the connection

Send this message to Claude:

```
List all projects in my Jira account.
```

Claude should respond with your project list including the TECH project. If it does, the
connection is working.

---

## Troubleshooting

**Claude does not show the hammer icon:**
- Make sure you fully quit and restarted Claude Desktop
- Check that the config file is named exactly `claude_desktop_config.json` (not `.txt` or `_template`)
- Check that the JSON is valid — use jsonlint.com to paste and validate it

**Claude says it cannot connect to Jira:**
- Double-check your site URL includes `https://` and ends with `.atlassian.net`
- Confirm the API token was copied in full — they are long strings
- Make sure the email matches exactly what you use to log into Jira
- Run `echo $JIRA_URL` in Terminal to confirm env vars are set (see mcp-env-setup.md)

**uvx command not found:**
- Restart your terminal after installing uv
- On Mac: make sure `~/.local/bin` is in your PATH

---

## What Claude can do with this connection

Once connected, Claude can:
- Create Jira tickets (Test, Bug, Task issue types)
- Read all tickets in a project or sprint
- Update ticket status, add comments, set priority
- List open bugs by severity
- Read sprint data for test report generation

You will use this in Sections 6, 8, and 10.
