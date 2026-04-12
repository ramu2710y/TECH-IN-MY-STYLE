# ⚡ Quick Start Deployment Guide

**Time Required:** 20-30 minutes  
**Difficulty:** Beginner-friendly

---

## 🎯 What You'll Deploy

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│  YOUR WEBSITE (Vercel)                             │
│  https://your-app.vercel.app                       │
│                                                     │
│  ↓ talks to ↓                                      │
│                                                     │
│  YOUR API (Render)                                 │
│  https://your-backend.onrender.com                 │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

## 📦 What You Need

1. ✅ GitHub account (you have this)
2. ✅ Your code on GitHub (done: https://github.com/ramu2710y/TECH-IN-MY-STYLE)
3. ⏳ Render account (we'll create)
4. ⏳ Vercel account (we'll create)
5. ⏳ Groq API key (we'll get)

---

## 🚀 Deployment in 6 Steps

### STEP 1: Create Accounts (5 min)

#### 1.1 Render (Backend Hosting)
```
1. Go to: https://render.com
2. Click "Get Started"
3. Sign up with GitHub
4. Done! ✓
```

#### 1.2 Vercel (Frontend Hosting)
```
1. Go to: https://vercel.com
2. Click "Sign Up"
3. Sign up with GitHub
4. Authorize Vercel
5. Done! ✓
```

#### 1.3 Groq (AI API for Python Course)
```
1. Go to: https://console.groq.com
2. Sign up / Log in
3. Click "API Keys"
4. Click "Create API Key"
5. Copy the key (starts with gsk_...)
6. Save it somewhere safe
7. Done! ✓
```

---

### STEP 2: Deploy Backend (10 min)

#### 2.1 Create Service on Render

```
1. Go to: https://dashboard.render.com
2. Click "New +" → "Web Service"
3. Click "Connect account" (if needed)
4. Find: ramu2710y/TECH-IN-MY-STYLE
5. Click "Connect"
```

#### 2.2 Configure Service

Fill in these fields:

| Field | Value |
|-------|-------|
| Name | `tech-in-my-style-backend` |
| Region | `Oregon` (or closest) |
| Branch | `main` |
| Root Directory | `server` |
| Runtime | `Node` |
| Build Command | `npm install` |
| Start Command | `npm start` |
| Plan | `Free` (or Starter $7/mo) |

#### 2.3 Add Environment Variables

Click "Advanced" → "Add Environment Variable"

Add these 5 variables:

```
NODE_ENV = production
PORT = 5000
CLIENT_URL = http://localhost:3000
JWT_SECRET = techinmystyle_super_secret_jwt_key_2025_production_ready
JWT_EXPIRE = 7d
```

#### 2.4 Deploy

```
1. Click "Create Web Service"
2. Wait 3-5 minutes
3. Watch the logs
4. When you see "Your service is live at..."
5. COPY THE URL! (e.g., https://tech-in-my-style-backend.onrender.com)
```

#### 2.5 Test Backend

Open terminal and run:

```bash
# Replace with YOUR backend URL
curl https://tech-in-my-style-backend.onrender.com/api/health
```

Should return:
```json
{"status":"Server is running","dbMode":"json","timestamp":"..."}
```

✅ **Backend is live!**

---

### STEP 3: Deploy Frontend (5 min)

#### 3.1 Import to Vercel

```
1. Go to: https://vercel.com/dashboard
2. Click "Add New..." → "Project"
3. Find: ramu2710y/TECH-IN-MY-STYLE
4. Click "Import"
```

#### 3.2 Configure Project

| Field | Value |
|-------|-------|
| Framework Preset | `Vite` |
| Root Directory | `client` |
| Build Command | `npm run build` |
| Output Directory | `build` |
| Install Command | `npm install` |

#### 3.3 Add Environment Variables

Click "Environment Variables" and add:

```
VITE_API_URL = https://YOUR-BACKEND-URL.onrender.com
VITE_CLIENT_URL = https://your-app.vercel.app
VITE_GROQ_API_KEY = YOUR_GROQ_API_KEY
VITE_GROQ_API_URL = https://api.groq.com/openai/v1/chat/completions
VITE_GROQ_MODEL = llama-3.3-70b-versatile
```

**Important:** Replace:
- `YOUR-BACKEND-URL.onrender.com` with your actual Render URL from Step 2
- `YOUR_GROQ_API_KEY` with your actual Groq API key from Step 1

#### 3.4 Deploy

```
1. Click "Deploy"
2. Wait 2-3 minutes
3. When you see "Your project is live at..."
4. COPY THE URL! (e.g., https://tech-in-my-style-abc123.vercel.app)
```

✅ **Frontend is live!**

---

### STEP 4: Update Frontend URL (2 min)

Now that you have your Vercel URL, update it:

#### 4.1 In Vercel

```
1. Go to your Vercel project
2. Click "Settings" → "Environment Variables"
3. Find VITE_CLIENT_URL
4. Click "Edit"
5. Replace with YOUR actual Vercel URL
6. Click "Save"
7. Go to "Deployments" tab
8. Click "..." on latest → "Redeploy"
9. Wait 1-2 minutes
```

---

### STEP 5: Connect Backend to Frontend (2 min)

#### 5.1 Update Backend CORS

```
1. Go to: https://dashboard.render.com
2. Click on: tech-in-my-style-backend
3. Click "Environment" tab
4. Find CLIENT_URL
5. Click "Edit"
6. Replace with YOUR Vercel URL
7. Click "Save Changes"
8. Wait 1-2 minutes for auto-redeploy
```

---

### STEP 6: Test Everything (5 min)

#### 6.1 Open Your Website

Go to your Vercel URL: `https://your-app.vercel.app`

#### 6.2 Test Registration

```
1. Click "Sign Up" or "Register"
2. Fill in:
   - Username: testuser
   - Email: your-email@example.com
   - Password: Test123!
3. Click "Register"
4. Should see success message ✓
```

#### 6.3 Test Login

```
1. Click "Login"
2. Enter your credentials
3. Click "Login"
4. Should be logged in ✓
```

#### 6.4 Test Courses

```
1. Click "Courses" in navigation
2. All courses should be visible ✓
3. Click "Python In My Style"
4. Course should load ✓
```

#### 6.5 Check Console

```
1. Press F12 (open Developer Tools)
2. Go to "Console" tab
3. Should see NO red errors ✓
```

---

## 🎉 SUCCESS!

### Your Live URLs:

**Website (Frontend):**
```
https://your-app.vercel.app
```

**API (Backend):**
```
https://your-backend.onrender.com
```

### What You Deployed:

✅ Full-stack web application  
✅ User authentication system  
✅ 20+ interactive course modules  
✅ Responsive design  
✅ AI-powered Python course  
✅ Accessible worldwide!

---

## 📊 Your Setup

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│  ✅ Frontend: Vercel (Free)                        │
│     - React + Vite                                 │
│     - Global CDN                                   │
│     - Automatic HTTPS                              │
│     - 100GB bandwidth/month                        │
│                                                     │
│  ✅ Backend: Render (Free)                         │
│     - Express.js API                               │
│     - User authentication                          │
│     - JSON database                                │
│     - Sleeps after 15 min (wakes on request)       │
│                                                     │
│  💰 Total Cost: $0/month                           │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

## 🔧 Common Issues

### "Cannot connect to server"
**Cause:** Backend is sleeping (free tier)  
**Fix:** Wait 30 seconds, refresh page

### CORS errors in console
**Cause:** CLIENT_URL mismatch  
**Fix:** 
1. Go to Render → Environment
2. Update CLIENT_URL to exact Vercel URL
3. Wait for redeploy

### Build failed on Vercel
**Cause:** Missing environment variables  
**Fix:**
1. Go to Vercel → Settings → Environment Variables
2. Verify all VITE_* variables are set
3. Redeploy

---

## 🚀 Next Steps

### Upgrade to Production (Optional)

**Render Starter Plan: $7/month**
- ✅ No sleep (always on)
- ✅ Faster response times
- ✅ Better reliability
- ✅ 512MB RAM

**To upgrade:**
```
1. Go to Render → Your service
2. Click "Settings"
3. Click "Upgrade to Starter"
4. Confirm payment
```

### Add Custom Domain (Optional)

**Buy domain:** Namecheap, GoDaddy, etc. ($10-15/year)

**Add to Vercel:**
```
1. Go to Vercel → Settings → Domains
2. Click "Add"
3. Enter your domain
4. Follow DNS configuration steps
5. Wait for SSL certificate (automatic)
```

---

## 📚 Resources

- **Detailed Guide:** See `DEPLOY_NOW.md`
- **Checklist:** See `DEPLOYMENT_CHECKLIST.md`
- **Full Documentation:** See `DEPLOYMENT_GUIDE.md`

---

## 🎓 What You Learned

✅ How to deploy a full-stack application  
✅ How to use Render for backend hosting  
✅ How to use Vercel for frontend hosting  
✅ How to configure environment variables  
✅ How to connect frontend and backend  
✅ How to test and verify deployments  

---

## 🌟 Share Your Success!

Your website is now live and accessible to anyone in the world!

**Share it:**
- Add to your portfolio
- Share on LinkedIn
- Share on Twitter
- Show to friends and family
- Add to your resume

---

**Congratulations on deploying your first full-stack application!** 🎉

*Deployed on: April 13, 2026*
