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

### Set the variables (run once)

Open Terminal and run these three commands, replacing the example values with your own:

```bash
echo 'export JIRA_URL="https://yourname-testing.atlassian.net"' >> ~/.zshrc
echo 'export JIRA_USERNAME="your@email.com"' >> ~/.zshrc
echo 'export JIRA_API_TOKEN="your-api-token-here"' >> ~/.zshrc
```

If you use bash instead of zsh (older Macs), replace `~/.zshrc` with `~/.bash_profile` in all three commands.

### Apply immediately (without restarting Terminal)

```bash
source ~/.zshrc
```

### Verify the variables are set

```bash
echo $JIRA_URL
echo $JIRA_USERNAME
echo $JIRA_API_TOKEN
```

Each command should print your value. If you see a blank line, the variable is not set — re-run the export commands and source again.

---

## Windows

### Set the variables (run once)

Open **PowerShell as Administrator** and run these three commands, replacing the example values with your own:

```powershell
[System.Environment]::SetEnvironmentVariable("JIRA_URL", "https://yourname-testing.atlassian.net", "User")
[System.Environment]::SetEnvironmentVariable("JIRA_USERNAME", "your@email.com", "User")
[System.Environment]::SetEnvironmentVariable("JIRA_API_TOKEN", "your-api-token-here", "User")
```

The `"User"` scope means the variables are saved permanently for your user account — you only need to run this once.

### Verify the variables are set

```powershell
[System.Environment]::GetEnvironmentVariable("JIRA_URL", "User")
[System.Environment]::GetEnvironmentVariable("JIRA_USERNAME", "User")
[System.Environment]::GetEnvironmentVariable("JIRA_API_TOKEN", "User")
```

Each command should print your value. If you see nothing, re-run the SetEnvironmentVariable commands.

### Apply to the current session (without restarting PowerShell)

```powershell
$env:JIRA_URL = [System.Environment]::GetEnvironmentVariable("JIRA_URL", "User")
$env:JIRA_USERNAME = [System.Environment]::GetEnvironmentVariable("JIRA_USERNAME", "User")
$env:JIRA_API_TOKEN = [System.Environment]::GetEnvironmentVariable("JIRA_API_TOKEN", "User")
```

---

## After setting variables — restart Claude Desktop

Environment variables are read when Claude Desktop launches. After setting them:

1. Fully quit Claude Desktop (right-click tray icon → Quit on Mac, or from the taskbar on Windows)
2. Reopen Claude Desktop
3. Send this message to test: **List all projects in my Jira account**

Claude should respond with your project list. The hammer icon (🔨) near the message input confirms MCP is active.

---

## Why environment variables?

The `claude_desktop_config.json` file is stored on your computer and could be accidentally
shared or backed up to cloud storage. Environment variables keep your Jira URL, email, and
API token out of any file — they live only in your system's memory and user profile.
