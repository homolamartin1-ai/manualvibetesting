# MCP Setup Guide — Connecting Claude to Jira
## Vibetesting in 2026 — Course Resources

Connects Claude Desktop to your Jira project. Once done, Claude can create tickets, read
project data, and generate reports directly — no copy-paste required.

**Time to complete:** ~10 minutes
**Requires:** Claude Desktop app (not the browser version)

---

## Step 1 — Generate your Jira API Token

1. Go to **id.atlassian.com/manage-profile/security/api-tokens**
2. Click **Create API token**
3. Name it: `MCP Course`
4. Click **Create**
5. **Copy the token immediately** — you cannot view it again after closing

---

## Step 2 — Install uv

The MCP server runs via `uvx` (included with uv).

**Mac** — open Terminal and run:
```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.zshrc && source ~/.zshrc
```

**Windows** — open PowerShell and run:
```powershell
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
```

Verify: `uvx --version` — you should see a version number.

---

## Step 3 — Add your credentials to the config file

Open the file `resources/claude_desktop_config_template.json` in any text editor and
replace the three placeholder values with your own:

```json
"env": {
  "JIRA_URL": "https://YOUR-SITE.atlassian.net",
  "JIRA_USERNAME": "your@email.com",
  "JIRA_API_TOKEN": "your-api-token-here"
}
```

Save the file.

> **Keep this file private.** Do not commit it to GitHub or share it — it contains your API token.

---

## Step 4 — Copy the config to Claude Desktop

**Mac:**
```bash
mkdir -p ~/Library/Application\ Support/Claude
cp /path/to/course-repo/resources/claude_desktop_config_template.json \
   ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

Or via Finder: press **Cmd + Shift + G**, paste `~/Library/Application Support/Claude/`,
copy the file there and rename it to `claude_desktop_config.json`.

**Windows:**
Press **Win + R**, type `%APPDATA%\Claude\`, copy the file there and rename it to
`claude_desktop_config.json`.

> If `claude_desktop_config.json` already exists, open it and add the `"atlassian"` block
> inside the existing `"mcpServers"` object — do not replace the whole file.

---

## Step 5 — Restart Claude Desktop

Fully quit Claude Desktop (right-click the tray/menu bar icon → Quit — do not just close
the window). Reopen it and open a new conversation.

---

## Step 6 — Test the connection

Open a new conversation and send:

```
List all projects in my Jira account.
```

Claude should respond with your project list. MCP is active and working.

---

## Troubleshooting

**0 projects or "no tools available":**
- Make sure you edited the credentials in the config file before copying it
- Double-check JIRA_URL includes `https://` and ends with `.atlassian.net`
- Confirm the API token is complete — they are long strings, easy to cut short
- Validate the JSON at jsonlint.com — a missing comma breaks the whole file

**uvx not found:**
- On Mac: run `echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.zshrc && source ~/.zshrc`
- Fully quit and reopen Claude Desktop after fixing PATH

---

## What Claude can do with this connection

- Create Jira tickets (Task, Bug issue types)
- Read all tickets in a project or sprint
- Update ticket status, add comments, set priority
- Generate test reports from sprint data

You will use this in Sections 6, 8, and 10.
