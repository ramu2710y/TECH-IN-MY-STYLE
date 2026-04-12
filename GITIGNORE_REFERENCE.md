# 📝 .gitignore Quick Reference

## What's Protected in Your Project

### 🔒 NEVER Committed (Protected)

```
✅ .env files (all environments)
✅ node_modules/ (all locations)
✅ build/ and dist/ (build output)
✅ data/localdb.json (local database)
✅ *.log (log files)
✅ temp/ (temporary files)
✅ .DS_Store (macOS files)
✅ Thumbs.db (Windows files)
✅ .vscode/ (IDE settings)
✅ .idea/ (IDE settings)
✅ coverage/ (test coverage)
✅ *.bak, *.backup (backup files)
```

### ✅ Always Committed (Kept)

```
✅ .env.example (template files)
✅ package.json (dependencies list)
✅ package-lock.json (lock file)
✅ vercel.json (Vercel config)
✅ render.yaml (Render config)
✅ Dockerfile (Docker config)
✅ requirements.txt (Python deps)
✅ *.md (documentation)
✅ src/ (source code)
✅ public/ (public assets)
✅ .gitignore (this file!)
```

---

## 📁 .gitignore Files Created

### 1. Root .gitignore
**Location:** `.gitignore`  
**Protects:** Entire project

### 2. Client .gitignore
**Location:** `client/.gitignore`  
**Protects:** Frontend files

### 3. Server .gitignore
**Location:** `server/.gitignore`  
**Protects:** Backend files

---

## 🔍 Quick Commands

### Check What's Ignored
```bash
# See all ignored files
git status --ignored

# Check if specific file is ignored
git check-ignore -v .env
git check-ignore -v client/.env
git check-ignore -v server/.env

# List all tracked files
git ls-files
```

### Verify Before Committing
```bash
# See what will be committed
git status

# See changes to be committed
git diff --cached

# Dry run (see what would be added)
git add --dry-run .
```

### Search for Secrets
```bash
# Search staged files for potential secrets
git diff --cached | grep -i "password\|secret\|key\|token"

# Search entire repository
git grep -i "password\|secret\|key\|token"
```

---

## 🚨 Emergency: If You Committed Secrets

### Step 1: Rotate the Secret IMMEDIATELY
```bash
# Change the password/key/token in:
# - MongoDB Atlas
# - Email provider
# - API provider (Groq)
# - JWT secret
```

### Step 2: Remove from Git History
```bash
# Remove file from git (keeps local copy)
git rm --cached path/to/file

# Commit the removal
git commit -m "Remove sensitive file"

# Push
git push
```

### Step 3: Update .env Files
```bash
# Update with new secrets
nano client/.env
nano server/.env

# Verify they're ignored
git status
# Should NOT show .env files
```

---

## 📋 Pre-Commit Checklist

Before every `git commit`:

- [ ] Run `git status` - no .env files shown
- [ ] Run `git diff --cached` - no secrets visible
- [ ] Check no hardcoded API keys in code
- [ ] Check no passwords in code
- [ ] Verify .gitignore is working

---

## 🎯 Common Scenarios

### Scenario 1: New Environment Variable
```bash
# 1. Add to .env (NOT committed)
echo "NEW_VAR=value" >> server/.env

# 2. Add to .env.example (IS committed)
echo "NEW_VAR=your-value-here" >> server/.env.example

# 3. Document in README
# 4. Update deployment guide
```

### Scenario 2: New Developer Setup
```bash
# 1. Clone repository
git clone https://github.com/username/tech-in-my-style.git

# 2. Copy example files
cp client/.env.example client/.env
cp server/.env.example server/.env

# 3. Fill in actual values
nano client/.env
nano server/.env

# 4. Install dependencies
cd client && npm install
cd ../server && npm install
```

### Scenario 3: Deploying to Production
```bash
# DO NOT commit production .env files!

# Instead, set environment variables in:
# - Vercel Dashboard (for frontend)
# - Render Dashboard (for backend)
```

---

## 🔐 Security Reminders

### ❌ NEVER Commit:
- `.env` files
- API keys
- Passwords
- Database credentials
- JWT secrets
- Email passwords
- Private keys
- Certificates

### ✅ ALWAYS Commit:
- `.env.example` files
- Source code
- Configuration files
- Documentation
- Package files
- Public assets

---

## 📊 File Status Reference

| File/Folder | Status | Reason |
|-------------|--------|--------|
| `.env` | ❌ Ignored | Contains secrets |
| `.env.example` | ✅ Tracked | Template only |
| `node_modules/` | ❌ Ignored | Too large, regenerable |
| `package.json` | ✅ Tracked | Dependency list |
| `build/` | ❌ Ignored | Generated files |
| `src/` | ✅ Tracked | Source code |
| `*.log` | ❌ Ignored | Log files |
| `*.md` | ✅ Tracked | Documentation |
| `data/localdb.json` | ❌ Ignored | User data |
| `temp/` | ❌ Ignored | Temporary files |
| `.DS_Store` | ❌ Ignored | macOS system file |
| `vercel.json` | ✅ Tracked | Config file |

---

## 🛠️ Useful Git Commands

### View Ignored Files
```bash
# Show all ignored files
git status --ignored

# Show ignored files in specific directory
git status --ignored client/
```

### Untrack File (Keep Local Copy)
```bash
# Stop tracking file but keep it locally
git rm --cached filename

# Stop tracking directory
git rm -r --cached directory/
```

### Force Add Ignored File (Rare)
```bash
# Only if you really need to commit an ignored file
git add -f filename
```

### Clean Untracked Files
```bash
# See what would be deleted
git clean -n

# Delete untracked files
git clean -f

# Delete untracked files and directories
git clean -fd
```

---

## 📞 Need Help?

### Check These Files:
1. `SECURITY_GUIDE.md` - Comprehensive security guide
2. `DEPLOYMENT_GUIDE.md` - Deployment instructions
3. `.gitignore` - Root ignore rules
4. `client/.gitignore` - Client ignore rules
5. `server/.gitignore` - Server ignore rules

### Common Issues:

**Issue:** `.env` file is showing in `git status`
```bash
# Solution: Verify .gitignore includes .env
cat .gitignore | grep ".env"

# If not there, add it
echo ".env" >> .gitignore
```

**Issue:** `node_modules` is showing in `git status`
```bash
# Solution: Remove from tracking
git rm -r --cached node_modules/
git commit -m "Remove node_modules from tracking"
```

**Issue:** Already committed secrets
```bash
# Solution: See SECURITY_GUIDE.md
# Section: "What to Do If You Accidentally Commit Secrets"
```

---

## ✅ Verification Checklist

Run these commands to verify your setup:

```bash
# 1. Check .gitignore exists
ls -la | grep gitignore

# 2. Verify .env is ignored
git check-ignore -v .env
git check-ignore -v client/.env
git check-ignore -v server/.env

# 3. Verify node_modules is ignored
git check-ignore -v node_modules
git check-ignore -v client/node_modules
git check-ignore -v server/node_modules

# 4. Check what's tracked
git ls-files | grep -E "\.env$|node_modules"
# Should return nothing

# 5. Check status
git status
# Should not show .env or node_modules
```

---

## 🎉 You're Protected!

Your project now has:
- ✅ Comprehensive .gitignore files
- ✅ Protected sensitive files
- ✅ Excluded large files
- ✅ Clean repository structure

**Remember:** Always check `git status` before committing!

---

*Quick Reference Created: April 12, 2026*  
*Keep your repository clean and secure! 🔒*
