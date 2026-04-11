# MCP Credentials Setup
## Vibetesting in 2026 — Course Resources

This guide shows how to add your Jira credentials to the Claude Desktop config file so
MCP can connect to your Jira account.

---

## Step 1 — Generate your Jira API Token

1. Go to **id.atlassian.com/manage-profile/security/api-tokens**
2. Click **Create API token**
3. Name it: `MCP Course`
4. Click **Create**
5. **Copy the token immediately** — you cannot view it again after closing this dialog

---

## Step 2 — Edit the config file

Open this file in any text editor (VS Code, Notepad, TextEdit):

**Mac:** `~/Library/Application Support/Claude/claude_desktop_config.json`
**Windows:** `%APPDATA%\Claude\claude_desktop_config.json`

Find the `env` block and replace the three placeholder values with your own:

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

## Step 3 — Restart Claude Desktop

Fully quit Claude Desktop (right-click menu bar icon → Quit on Mac, taskbar on Windows).
Reopen it.

---

## Step 4 — Test the connection

Open a new conversation and send:

```
List all projects in my Jira account.
```

Claude should respond with your project list. The hammer icon (🔨) near the message input
confirms MCP tools are active.

---

## Troubleshooting

**Claude says 0 projects or no tools available:**
- Make sure you fully quit and restarted Claude Desktop after saving the config
- Double-check the JIRA_URL includes `https://` and ends with `.atlassian.net`
- Confirm the API token is complete — they are long strings, easy to cut off
- Check the email matches exactly what you log into Jira with
- Validate the JSON is valid at jsonlint.com (a missing comma breaks the whole file)

**Hammer icon not visible:**
- Open a brand new conversation (Cmd+N on Mac) — the icon only appears in new chats
- The connection may still work even without the icon — just try sending the test message
