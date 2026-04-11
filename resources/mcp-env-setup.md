# MCP Environment Variables Setup
## Vibetesting in 2026 — Course Resources

Set these three environment variables once. The MCP config file reads them automatically —
your Jira credentials never appear in any file you might accidentally share or commit.

---

## Your values

Before running any commands, have these three things ready:

| Variable | Value |
|---|---|
| `JIRA_URL` | Your Jira site URL, e.g. `https://yourname-testing.atlassian.net` |
| `JIRA_USERNAME` | The email you use to log into Jira |
| `JIRA_API_TOKEN` | The API token from id.atlassian.com/manage-profile/security/api-tokens |

---

## Mac

Open Terminal and run these three commands, replacing the example values with your own:

```bash
launchctl setenv JIRA_URL "https://yourname-testing.atlassian.net"
launchctl setenv JIRA_USERNAME "your@email.com"
launchctl setenv JIRA_API_TOKEN "your-api-token-here"
```

### Verify the variables are set

```bash
launchctl getenv JIRA_URL
launchctl getenv JIRA_USERNAME
launchctl getenv JIRA_API_TOKEN
```

Each command should print your value.

> **Note:** These variables reset after a reboot. If you restart your Mac, re-run the three
> `launchctl setenv` commands above before using Claude Desktop with Jira.

### After setting — restart Claude Desktop

Fully quit Claude Desktop (right-click menu bar icon → Quit), then reopen it.

---

## Windows

Open **PowerShell** and run these three commands, replacing the example values with your own:

```powershell
[System.Environment]::SetEnvironmentVariable("JIRA_URL", "https://yourname-testing.atlassian.net", "User")
[System.Environment]::SetEnvironmentVariable("JIRA_USERNAME", "your@email.com", "User")
[System.Environment]::SetEnvironmentVariable("JIRA_API_TOKEN", "your-api-token-here", "User")
```

### Verify the variables are set

```powershell
[System.Environment]::GetEnvironmentVariable("JIRA_URL", "User")
[System.Environment]::GetEnvironmentVariable("JIRA_USERNAME", "User")
[System.Environment]::GetEnvironmentVariable("JIRA_API_TOKEN", "User")
```

The `"User"` scope saves them permanently — no need to repeat after reboot.

### After setting — restart Claude Desktop

Fully quit and reopen Claude Desktop.

---

## Test the connection

Send this message in a new Claude Desktop conversation:

```
List all projects in my Jira account.
```

Claude should respond with your project list. The hammer icon (🔨) near the message input confirms MCP is active.
