# 🔒 TECH-IN-MY-STYLE - Security Guide

## Overview

This guide explains how sensitive files are protected in the TECH-IN-MY-STYLE project and best practices for keeping your application secure.

---

## 🛡️ Protected Files

### Files That Are NEVER Committed to Git

#### 1. Environment Variables (.env files)
**Location:** 
- `client/.env`
- `server/.env`
- `server/python-studio/.env`

**Why Protected:**
- Contains API keys (Groq AI)
- Database credentials (MongoDB)
- JWT secrets
- Email passwords
- Other sensitive configuration

**What's Committed Instead:**
- `.env.example` files (templates without actual secrets)

#### 2. Node Modules
**Location:**
- `client/node_modules/`
- `server/node_modules/`
- `server/python-studio/node_modules/`

**Why Protected:**
- Large files (100,000+ files)
- Can be regenerated with `npm install`
- Bloats repository size

#### 3. Build Output
**Location:**
- `client/build/`
- `client/dist/`

**Why Protected:**
- Generated files
- Can be rebuilt with `npm run build`
- Changes on every build

#### 4. Database Files
**Location:**
- `server/data/localdb.json`

**Why Protected:**
- Contains user data
- Privacy concerns
- Can contain sensitive information

#### 5. Log Files
**Location:**
- `*.log`
- `logs/`

**Why Protected:**
- May contain sensitive debug information
- Can be large
- Not needed in repository

---

## 📁 .gitignore Structure

### Root .gitignore
Located at: `.gitignore`

Protects:
- All environment files
- All node_modules
- All build outputs
- All sensitive files across the project

### Client .gitignore
Located at: `client/.gitignore`

Protects:
- Client environment variables
- Client node_modules
- Vite build output
- Client-specific temporary files

### Server .gitignore
Located at: `server/.gitignore`

Protects:
- Server environment variables
- Server node_modules
- Database files
- Temporary uploads
- Log files

---

## 🔑 Environment Variables Management

### Development Environment

#### Client Environment Variables
File: `client/.env` (NOT committed)

```env
# API Configuration
VITE_API_URL=http://localhost:5000
VITE_CLIENT_URL=http://localhost:3000

# AI Configuration
VITE_GROQ_API_KEY=your-groq-api-key-here
VITE_GROQ_API_URL=https://api.groq.com/openai/v1/chat/completions
VITE_GROQ_MODEL=llama-3.3-70b-versatile
```

#### Server Environment Variables
File: `server/.env` (NOT committed)

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-change-this
JWT_EXPIRE=7d

# Email Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-specific-password
EMAIL_FROM=Your Name <your-email@gmail.com>

# Frontend URL
CLIENT_URL=http://localhost:3000
```

### Production Environment

**DO NOT** commit production .env files!

Instead:
1. Set environment variables directly in hosting platform:
   - **Vercel:** Project Settings → Environment Variables
   - **Render:** Service → Environment → Environment Variables

2. Use secure secret management:
   - Vercel: Encrypted environment variables
   - Render: Encrypted environment variables
   - AWS Secrets Manager (for advanced setups)
   - HashiCorp Vault (for enterprise)

---

## 🔐 Security Best Practices

### 1. Never Commit Secrets

❌ **NEVER DO THIS:**
```javascript
// Bad - hardcoded secret
const JWT_SECRET = "my-secret-key-123";
const API_KEY = "sk-1234567890abcdef";
```

✅ **ALWAYS DO THIS:**
```javascript
// Good - use environment variables
const JWT_SECRET = process.env.JWT_SECRET;
const API_KEY = process.env.VITE_GROQ_API_KEY;
```

### 2. Use Strong Secrets

**JWT Secret:**
```bash
# Generate strong JWT secret
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

**Password Requirements:**
- Minimum 12 characters
- Mix of uppercase, lowercase, numbers, symbols
- Use password manager

### 3. Rotate Secrets Regularly

**When to Rotate:**
- Every 90 days (recommended)
- After team member leaves
- After suspected breach
- After accidental exposure

**How to Rotate:**
1. Generate new secret
2. Update in environment variables
3. Update in hosting platform
4. Test thoroughly
5. Remove old secret

### 4. Limit Access

**Principle of Least Privilege:**
- Only give access to those who need it
- Use separate credentials for different environments
- Revoke access when no longer needed

**Database Access:**
- Use IP whitelisting (MongoDB Atlas)
- Create separate users for different services
- Use read-only users where possible

### 5. Monitor for Exposed Secrets

**Tools to Use:**
- GitHub Secret Scanning (automatic)
- GitGuardian
- TruffleHog
- git-secrets

**If Secret is Exposed:**
1. Immediately rotate the secret
2. Update all services using it
3. Review access logs for unauthorized use
4. Document the incident

---

## 🚨 What to Do If You Accidentally Commit Secrets

### Immediate Actions

1. **Rotate the Secret Immediately**
   - Change the password/key/token
   - Update in all services

2. **Remove from Git History**
   ```bash
   # WARNING: This rewrites history
   # Coordinate with team before doing this
   
   # Using BFG Repo-Cleaner (recommended)
   bfg --replace-text passwords.txt
   git reflog expire --expire=now --all
   git gc --prune=now --aggressive
   
   # Or using git filter-branch
   git filter-branch --force --index-filter \
     "git rm --cached --ignore-unmatch path/to/file" \
     --prune-empty --tag-name-filter cat -- --all
   ```

3. **Force Push (if necessary)**
   ```bash
   git push origin --force --all
   git push origin --force --tags
   ```

4. **Notify Team**
   - Inform all team members
   - Ask them to re-clone repository
   - Update their local .env files

5. **Review Access Logs**
   - Check if secret was used
   - Look for unauthorized access
   - Document findings

---

## 📋 Security Checklist

### Before Committing Code

- [ ] No .env files in commit
- [ ] No API keys in code
- [ ] No passwords in code
- [ ] No database credentials in code
- [ ] No hardcoded secrets
- [ ] .gitignore is up to date
- [ ] Sensitive files are ignored

### Before Deploying

- [ ] Environment variables set in hosting platform
- [ ] Production secrets are different from development
- [ ] Database access is restricted (IP whitelist)
- [ ] HTTPS is enabled
- [ ] CORS is properly configured
- [ ] Rate limiting is enabled (recommended)
- [ ] Error messages don't expose sensitive info

### Regular Maintenance

- [ ] Review access logs monthly
- [ ] Rotate secrets every 90 days
- [ ] Update dependencies regularly
- [ ] Review .gitignore quarterly
- [ ] Audit user access quarterly
- [ ] Test backup and recovery procedures

---

## 🔍 Verifying Your Setup

### Check What Will Be Committed

```bash
# See what files will be committed
git status

# See what files are tracked
git ls-files

# Check if .env is ignored
git check-ignore -v .env
git check-ignore -v client/.env
git check-ignore -v server/.env

# See what would be committed (dry run)
git add --dry-run .
```

### Verify .gitignore is Working

```bash
# This should show .env files are ignored
git status --ignored

# Check specific file
git check-ignore -v server/.env
# Should output: server/.gitignore:6:.env    server/.env
```

### Test Before Pushing

```bash
# Search for potential secrets in staged files
git diff --cached | grep -i "password\|secret\|key\|token"

# Search entire repository
git grep -i "password\|secret\|key\|token"
```

---

## 📚 Environment Variables Reference

### Client Variables (Vite)

**IMPORTANT:** All client environment variables must be prefixed with `VITE_`

| Variable | Purpose | Example | Required |
|----------|---------|---------|----------|
| VITE_API_URL | Backend API URL | http://localhost:5000 | Yes |
| VITE_CLIENT_URL | Frontend URL | http://localhost:3000 | Yes |
| VITE_GROQ_API_KEY | Groq AI API key | gsk_... | Yes |
| VITE_GROQ_API_URL | Groq API endpoint | https://api.groq.com/... | Yes |
| VITE_GROQ_MODEL | AI model name | llama-3.3-70b-versatile | Yes |

### Server Variables

| Variable | Purpose | Example | Required |
|----------|---------|---------|----------|
| PORT | Server port | 5000 | Yes |
| NODE_ENV | Environment | production | Yes |
| MONGODB_URI | Database connection | mongodb+srv://... | Yes |
| JWT_SECRET | JWT signing key | random-64-char-string | Yes |
| JWT_EXPIRE | Token expiration | 7d | Yes |
| EMAIL_HOST | SMTP host | smtp.gmail.com | Yes |
| EMAIL_PORT | SMTP port | 587 | Yes |
| EMAIL_USER | Email address | your@email.com | Yes |
| EMAIL_PASSWORD | Email password | app-specific-password | Yes |
| EMAIL_FROM | From address | Name <email@email.com> | Yes |
| CLIENT_URL | Frontend URL | https://app.vercel.app | Yes |

### Python Studio Variables

| Variable | Purpose | Example | Required |
|----------|---------|---------|----------|
| USE_DOCKER | Enable Docker | false | No |
| EXECUTION_TIMEOUT | Timeout (seconds) | 30 | No |
| PYTHONUNBUFFERED | Python output | 1 | No |

---

## 🛠️ Tools and Resources

### Secret Management Tools

1. **Development:**
   - dotenv (Node.js)
   - python-dotenv (Python)
   - direnv (Shell)

2. **Production:**
   - Vercel Environment Variables
   - Render Environment Variables
   - AWS Secrets Manager
   - HashiCorp Vault
   - Azure Key Vault

### Security Scanning Tools

1. **Git Secret Scanning:**
   - GitHub Secret Scanning (built-in)
   - GitGuardian
   - TruffleHog
   - git-secrets

2. **Dependency Scanning:**
   - npm audit
   - Snyk
   - Dependabot
   - WhiteSource

3. **Code Analysis:**
   - SonarQube
   - ESLint security plugins
   - Bandit (Python)

---

## 📞 Security Incident Response

### If You Discover a Security Issue

1. **Do NOT** create a public GitHub issue
2. **Do NOT** discuss publicly
3. **DO** rotate affected secrets immediately
4. **DO** notify team privately
5. **DO** document the incident
6. **DO** review and improve security practices

### Contact Information

For security concerns:
- Email: techinmystyle@gmail.com
- Subject: [SECURITY] Brief description

---

## ✅ Quick Security Checklist

### Daily
- [ ] Review git status before committing
- [ ] Check no secrets in code

### Weekly
- [ ] Review access logs
- [ ] Check for dependency updates

### Monthly
- [ ] Review environment variables
- [ ] Check for exposed secrets (GitHub)
- [ ] Update dependencies

### Quarterly
- [ ] Rotate secrets
- [ ] Audit user access
- [ ] Review .gitignore
- [ ] Security training

### Annually
- [ ] Full security audit
- [ ] Penetration testing
- [ ] Update security policies

---

## 🎓 Security Training Resources

### Recommended Reading
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Node.js Security Best Practices](https://nodejs.org/en/docs/guides/security/)
- [MongoDB Security Checklist](https://docs.mongodb.com/manual/administration/security-checklist/)

### Online Courses
- [Web Security on Udemy](https://www.udemy.com/topic/web-security/)
- [OWASP WebGoat](https://owasp.org/www-project-webgoat/)
- [HackerOne CTF](https://www.hackerone.com/for-hackers/hacker-101)

---

## 📝 Summary

**Key Takeaways:**

1. ✅ Never commit .env files
2. ✅ Never commit node_modules
3. ✅ Never hardcode secrets
4. ✅ Use environment variables
5. ✅ Rotate secrets regularly
6. ✅ Use strong passwords
7. ✅ Monitor for exposed secrets
8. ✅ Keep .gitignore up to date
9. ✅ Review before committing
10. ✅ Test security regularly

**Your project is now protected with:**
- ✅ Comprehensive .gitignore files
- ✅ Environment variable templates
- ✅ Security best practices
- ✅ Protected sensitive files

---

*Security Guide Created: April 12, 2026*  
*Keep your secrets safe! 🔒*
