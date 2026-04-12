# ⚡ Deploy Frontend NOW - Quick Guide

**Time:** 10 minutes  
**Platform:** Vercel

---

## 🎯 Before You Start

**You need:**
- ✅ Backend URL: `https://tech-in-my-style-backend.onrender.com`
- ✅ Groq API Key: `gsk_...`

---

## 🚀 Quick Steps

### 1️⃣ Go to Vercel (1 minute)
- Open: https://vercel.com/dashboard
- Click **"Add New..."** → **"Project"**
- Import: `ramu2710y/TECH-IN-MY-STYLE`

### 2️⃣ Configure Project (1 minute)

**Copy these settings:**

```
Framework Preset: Vite
Root Directory: client
Build Command: npm run build
Output Directory: build
Install Command: npm install
```

### 3️⃣ Add Environment Variables (3 minutes)

Click **"Environment Variables"** and add these 5:

```
VITE_API_URL=https://tech-in-my-style-backend.onrender.com
VITE_CLIENT_URL=https://your-app.vercel.app
VITE_GROQ_API_KEY=your_groq_api_key_here
VITE_GROQ_API_URL=https://api.groq.com/openai/v1/chat/completions
VITE_GROQ_MODEL=llama-3.3-70b-versatile
```

**Important:** 
- Replace `VITE_API_URL` with YOUR backend URL
- Replace `VITE_GROQ_API_KEY` with YOUR Groq API key

### 4️⃣ Deploy (3 minutes)
- Click **"Deploy"**
- Wait for build
- Copy your URL: `https://your-app.vercel.app`

### 5️⃣ Update Frontend URL (2 minutes)

**In Vercel:**
1. Settings → Environment Variables
2. Edit `VITE_CLIENT_URL`
3. Replace with YOUR Vercel URL
4. Deployments → Redeploy

**In Render:**
1. Go to backend service
2. Environment → Edit `CLIENT_URL`
3. Replace with YOUR Vercel URL
4. Save (auto-redeploys)

### 6️⃣ Test (2 minutes)

Open your website and test:
- [ ] Homepage loads
- [ ] Register new user
- [ ] Login works
- [ ] Courses page loads
- [ ] No console errors (F12)

---

## ✅ Done!

**Your Website:**
```
https://your-app.vercel.app
```

**Share it with the world!** 🌍

---

## 📋 Environment Variables Checklist

When adding variables, check each one:

- [ ] `VITE_API_URL` = Your backend URL
- [ ] `VITE_CLIENT_URL` = Your Vercel URL (update after deploy)
- [ ] `VITE_GROQ_API_KEY` = Your Groq API key
- [ ] `VITE_GROQ_API_URL` = `https://api.groq.com/openai/v1/chat/completions`
- [ ] `VITE_GROQ_MODEL` = `llama-3.3-70b-versatile`

---

## 🔧 Quick Fixes

### Build Failed?
- Check Root Directory is `client`
- Check Build Command is `npm run build`
- View logs in Vercel

### CORS Errors?
- Update `CLIENT_URL` in Render backend
- Must match Vercel URL exactly
- No trailing slash

### Can't Login?
- Check `VITE_API_URL` is correct
- Test backend: `curl https://your-backend.onrender.com/api/health`
- Wait 30s if backend is sleeping

---

## 📚 Need More Help?

See detailed guide: `FRONTEND_DEPLOYMENT_STEPS.md`

---

**Let's deploy! 🚀**
