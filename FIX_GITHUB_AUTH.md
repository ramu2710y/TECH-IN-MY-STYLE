# 🔧 Fix GitHub Authentication Issue

## ⚠️ Problem

Git is using cached credentials from account `Ramu-2003` instead of `ramu2710y`.

## ✅ Solution (Choose One)

---

## Option 1: Clear Credentials Manually (Easiest)

### Step 1: Open Windows Credential Manager

1. Press `Windows + R`
2. Type: `control /name Microsoft.CredentialManager`
3. Press Enter

### Step 2: Remove GitHub Credentials

1. Click on **"Windows Credentials"**
2. Scroll down to find entries with **"github"** or **"git"**
3. Click on each one and select **"Remove"**
4. Remove ALL GitHub-related credentials

### Step 3: Try Push Again

```bash
git push -u origin main
```

Now it will ask for credentials. Enter:
- Username: `ramu2710y`
- Password: `<your personal access token>`

---

## Option 2: Use GitHub CLI (Recommended)

### Step 1: Install GitHub CLI

Download from: https://cli.github.com/

Or using winget:
```bash
winget install --id GitHub.cli
```

### Step 2: Login

```bash
gh auth login
```

Follow prompts:
- Select: **GitHub.com**
- Select: **HTTPS**
- Authenticate: **Login with a web browser**
- Copy the code and press Enter
- Browser opens → Paste code → Authorize

### Step 3: Push

```bash
git push -u origin main
```

---

## Option 3: Use Personal Access Token

### Step 1: Get Token

1. Go to: https://github.com/settings/tokens/new
2. Note: "TECH-IN-MY-STYLE"
3. Expiration: 90 days
4. Check: `repo` (Full control of private repositories)
5. Click: "Generate token"
6. **COPY THE TOKEN** (looks like: `ghp_xxxxx...`)

### Step 2: Update Remote URL with Token

```bash
# Remove old remote
git remote remove origin

# Add new remote with token embedded
git remote add origin https://ramu2710y:<YOUR_TOKEN>@github.com/ramu2710y/TECH-IN-MY-STYLE.git

# Push
git push -u origin main
```

**Note:** Replace `<YOUR_TOKEN>` with your actual token.

---

## Option 4: Use SSH (Most Secure)

### Step 1: Generate SSH Key

```bash
ssh-keygen -t ed25519 -C "ramu211022y@gmail.com"
```

Press Enter for default location, then enter passphrase (optional).

### Step 2: Copy SSH Key

```bash
# Display key
cat ~/.ssh/id_ed25519.pub

# Or copy to clipboard
cat ~/.ssh/id_ed25519.pub | clip
```

### Step 3: Add to GitHub

1. Go to: https://github.com/settings/keys
2. Click: "New SSH key"
3. Title: "TECH-IN-MY-STYLE"
4. Paste the key
5. Click: "Add SSH key"

### Step 4: Change Remote to SSH

```bash
# Remove HTTPS remote
git remote remove origin

# Add SSH remote
git remote add origin git@github.com:ramu2710y/TECH-IN-MY-STYLE.git

# Test connection
ssh -T git@github.com

# Push
git push -u origin main
```

---

## Option 5: Use GitHub Desktop (No Command Line)

### Step 1: Download and Install

Download: https://desktop.github.com/

### Step 2: Sign In

1. Open GitHub Desktop
2. File → Options → Accounts
3. Sign in with: `ramu2710y` account

### Step 3: Add Repository

1. File → Add Local Repository
2. Choose: `C:\Users\gopav\OneDrive\Desktop\TECH-IN-MY-STYLE`
3. Click: "Add Repository"

### Step 4: Publish

1. Click: "Publish repository"
2. Uncheck "Keep this code private" (if you want it public)
3. Click: "Publish repository"

Done! ✅

---

## 🔍 Verify Which Account is Being Used

```bash
# Check current credentials
git config --list | grep user

# Should show:
# user.name=ramu2710y
# user.email=ramu211022y@gmail.com
```

---

## 🆘 Still Having Issues?

### Check if repository exists:

1. Go to: https://github.com/ramu2710y/TECH-IN-MY-STYLE
2. If it doesn't exist, create it:
   - Go to: https://github.com/new
   - Repository name: `TECH-IN-MY-STYLE`
   - Click: "Create repository"

### Force authentication:

```bash
# This will force Git to ask for credentials again
git config --global --unset credential.helper
git push -u origin main
```

---

## ✅ After Successful Push

You should see:

```
Enumerating objects: 568, done.
Counting objects: 100% (568/568), done.
Delta compression using up to X threads
Compressing objects: 100% (XXX/XXX), done.
Writing objects: 100% (568/568), XXX MiB | XXX MiB/s, done.
Total 568 (delta XXX), reused 0 (delta 0)
remote: Resolving deltas: 100% (XXX/XXX), done.
To https://github.com/ramu2710y/TECH-IN-MY-STYLE.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

Then verify: https://github.com/ramu2710y/TECH-IN-MY-STYLE

---

## 📝 Summary

**Quickest Solution:**
1. Open Credential Manager (Windows + R → `control /name Microsoft.CredentialManager`)
2. Remove all GitHub credentials
3. Run: `git push -u origin main`
4. Enter: username `ramu2710y` and your token

**Or use GitHub Desktop** - No command line needed!

---

*Fix Guide Created: April 12, 2026*  
*Choose the method that works best for you!* 🚀
