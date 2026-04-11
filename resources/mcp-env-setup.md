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

On Mac, Claude Desktop is a GUI app — it does not read environment variables from your
terminal profile (`.zshrc`). You must use `launchctl` to set variables at the system level
so that all apps including Claude Desktop can read them.

### Set the variables (run once in Terminal)

Replace the example values with your own:

```bash
launchctl setenv JIRA_URL "https://yourname-testing.atlassian.net"
launchctl setenv JIRA_USERNAME "your@email.com"
launchctl setenv JIRA_API_TOKEN "your-api-token-here"
```

> **Note:** `launchctl setenv` takes effect immediately for newly launched apps, but does
> not survive a reboot. To make them permanent across reboots, also add them to your
> `~/.zshrc` (for terminal use) AND re-run the `launchctl` commands after each reboot,
> or follow the LaunchAgent approach below.

### Make permanent across reboots (recommended)

Add to `~/.zshrc` for terminal sessions:

```bash
echo 'export JIRA_URL="https://yourname-testing.atlassian.net"' >> ~/.zshrc
echo 'export JIRA_USERNAME="your@email.com"' >> ~/.zshrc
echo 'export JIRA_API_TOKEN="your-api-token-here"' >> ~/.zshrc
source ~/.zshrc
```

And create a LaunchAgent so Claude Desktop picks them up after reboot:

```bash
cat > ~/Library/LaunchAgents/com.vibetesting.jira-env.plist << 'EOF'
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key>
  <string>com.vibetesting.jira-env</string>
  <key>ProgramArguments</key>
  <array>
    <string>/bin/sh</string>
    <string>-c</string>
    <string>
      launchctl setenv JIRA_URL "YOUR_JIRA_URL" &amp;&amp;
      launchctl setenv JIRA_USERNAME "YOUR_EMAIL" &amp;&amp;
      launchctl setenv JIRA_API_TOKEN "YOUR_API_TOKEN"
    </string>
  </array>
  <key>RunAtLoad</key>
  <true/>
</dict>
</plist>
EOF
```

Replace `YOUR_JIRA_URL`, `YOUR_EMAIL`, and `YOUR_API_TOKEN` with your real values, then load it:

```bash
launchctl load ~/Library/LaunchAgents/com.vibetesting.jira-env.plist
```

### Verify the variables are set

```bash
launchctl getenv JIRA_URL
launchctl getenv JIRA_USERNAME
launchctl getenv JIRA_API_TOKEN
```

Each command should print your value. If you see a blank line, re-run the `launchctl setenv` commands.

### After setting — restart Claude Desktop

Fully quit Claude Desktop (right-click menu bar icon → Quit), then reopen it.

---

## Windows

The Windows installer sets variables at the user account level — all apps including GUI
apps can read them automatically.

### Set the variables (run once)

Open **PowerShell** and run these three commands, replacing the example values with your own:

```powershell
[System.Environment]::SetEnvironmentVariable("JIRA_URL", "https://yourname-testing.atlassian.net", "User")
[System.Environment]::SetEnvironmentVariable("JIRA_USERNAME", "your@email.com", "User")
[System.Environment]::SetEnvironmentVariable("JIRA_API_TOKEN", "your-api-token-here", "User")
```

The `"User"` scope saves them permanently for your account — run this once.

### Verify the variables are set

```powershell
[System.Environment]::GetEnvironmentVariable("JIRA_URL", "User")
[System.Environment]::GetEnvironmentVariable("JIRA_USERNAME", "User")
[System.Environment]::GetEnvironmentVariable("JIRA_API_TOKEN", "User")
```

### After setting — restart Claude Desktop

Fully quit and reopen Claude Desktop. The variables are read at launch.

---

## Test the connection

Send this message in a new Claude Desktop conversation:

```
List all projects in my Jira account.
```

Claude should respond with your project list. The hammer icon (🔨) near the message input confirms MCP is active.
