# GitHub Setup Guide
## Vibetesting in 2026 — Course Resources

This guide covers how to get the course files onto your machine using GitHub.
If you just want the files without any GitHub setup, use the ZIP download option in the README.

---

## Option A — Download as ZIP (no account needed)

1. Go to the course GitHub repository (link in the course resources section on Udemy)
2. Click the green **Code** button near the top right
3. Click **Download ZIP**
4. Find the downloaded ZIP file (usually in your Downloads folder)
5. Double-click to extract it
6. Move the extracted folder to your Desktop or Documents
7. Done — open any file directly from the folder

---

## Option B — Fork the repository (recommended)

Forking creates your own copy of the repo under your GitHub account.
Benefits: you can save your own test plans, scripts, and notes to it as you go through the course,
building a real portfolio of testing work by the end.

### Step 1 — Create a GitHub account

Go to **github.com** and click **Sign up**.
Use your email or sign in with Google. The free account gives you unlimited public and private repos.

### Step 2 — Fork the repo

1. Open the course repository on GitHub (link from Udemy)
2. Click **Fork** in the top right corner
3. On the next screen, click **Create fork**
4. GitHub creates a copy at `github.com/YOUR-USERNAME/REPO-NAME`

### Step 3 — Install Git (if not already installed)

**Mac:**
Open Terminal and run:
```
git --version
```
If Git is not installed, macOS will prompt you to install it. Click Install and follow the steps.

**Windows:**
Download Git from **git-scm.com/download/win** and run the installer.
Accept all defaults. When done, open **Git Bash** from the Start menu.

### Step 4 — Clone your fork to your machine

1. Go to your fork on GitHub (`github.com/YOUR-USERNAME/REPO-NAME`)
2. Click the green **Code** button
3. Make sure **HTTPS** is selected and copy the URL shown
4. Open Terminal (Mac) or Git Bash (Windows)
5. Navigate to where you want the folder, for example your Desktop:
   ```
   cd ~/Desktop
   ```
6. Run the clone command with your copied URL:
   ```
   git clone https://github.com/YOUR-USERNAME/REPO-NAME.git
   ```
7. A new folder appears on your Desktop with all the course files inside

### Step 5 — Open in VS Code (optional)

If you have VS Code installed:
```
code REPO-NAME
```
Or open VS Code, go to File → Open Folder, and select the cloned folder.

---

## Saving your own work back to GitHub

As you complete sections of the course, you can save your test plans, Jira exports,
and prompt notes to your fork.

### Add and commit a file

```
git add filename.md
git commit -m "Add sprint 1 test plan"
```

### Push to GitHub — authentication on first push

When you run `git push` for the first time, Git needs to verify who you are.
There are two ways to authenticate: HTTPS (username + token) or SSH (key pair).

---

#### Option 1 — HTTPS with a Personal Access Token (simpler, recommended for beginners)

GitHub no longer accepts your account password over HTTPS. You need a **Personal Access Token** instead.

**Generate a token:**
1. Go to **github.com → Settings → Developer settings → Personal access tokens → Tokens (classic)**
2. Click **Generate new token (classic)**
3. Give it a name like `course-push`
4. Set expiration to 90 days
5. Check the **repo** scope
6. Click **Generate token** and copy it immediately — you cannot see it again

**Use the token when pushing:**
```
git push
```
When prompted:
- **Username:** your GitHub username
- **Password:** paste your Personal Access Token (not your account password)

**Save credentials so you are not prompted every time (Mac):**
```
git config --global credential.helper osxkeychain
```

**Save credentials so you are not prompted every time (Windows):**
```
git config --global credential.helper manager
```

After saving, Git remembers the token and you will not be asked again on that machine.

---

#### Option 2 — SSH key (more secure, no token needed after setup)

SSH uses a key pair stored on your machine. Once set up, `git push` works silently — no password, no token.

**Step 1 — Generate an SSH key**

Open Terminal (Mac) or Git Bash (Windows) and run:
```
ssh-keygen -t ed25519 -C "your@email.com"
```
Press Enter three times to accept the default file location and skip the passphrase.

This creates two files in `~/.ssh/`:
- `id_ed25519` — your private key (never share this)
- `id_ed25519.pub` — your public key (this goes to GitHub)

**Step 2 — Copy the public key**

Mac:
```
cat ~/.ssh/id_ed25519.pub | pbcopy
```

Windows (Git Bash):
```
cat ~/.ssh/id_ed25519.pub | clip
```

**Step 3 — Add the key to GitHub**
1. Go to **github.com → Settings → SSH and GPG keys**
2. Click **New SSH key**
3. Give it a title like `my laptop`
4. Paste the public key into the Key field
5. Click **Add SSH key**

**Step 4 — Switch your clone to use SSH**

When you cloned earlier you used the HTTPS URL. Switch it to SSH:
```
git remote set-url origin git@github.com:YOUR-USERNAME/REPO-NAME.git
```

**Step 5 — Test the connection**
```
ssh -T git@github.com
```
You should see: `Hi YOUR-USERNAME! You've successfully authenticated.`

Now `git push` works with no prompts.

---

Your file now appears in your GitHub repo. After you complete the capstone in Section 12,
your repo will contain a full testing portfolio — test plan, test cases, bug reports,
and a test report — which you can link from your CV or LinkedIn.

---

## Staying up to date with the original repo

If the course repo is updated with new files or fixes after you forked it:

1. Add the original repo as a remote (do this once):
   ```
   git remote add upstream https://github.com/ORIGINAL-OWNER/REPO-NAME.git
   ```
2. Fetch and merge updates:
   ```
   git fetch upstream
   git merge upstream/main
   ```

---

## Troubleshooting

**"git: command not found" on Mac**
Run `git --version` again — it should have triggered the install prompt.
If not, install Xcode Command Line Tools: `xcode-select --install`

**Clone fails with "Authentication failed"**
GitHub no longer accepts your account password. Use a Personal Access Token or switch to SSH.
See the "Push to GitHub — authentication on first push" section above for step-by-step instructions.

**Folder already exists error**
You already have a folder with that name. Either delete it or clone into a different location.
