# ⚡ Deploy Backend NOW - Quick Guide

**Time:** 10 minutes  
**Platform:** Render

---

## 🎯 Quick Steps

### 1️⃣ Push Code (30 seconds)
```bash
git add .
git commit -m "Ready for backend deployment"
git push origin main
```

### 2️⃣ Go to Render (30 seconds)
- Open: https://dashboard.render.com
- Click **"New +"** → **"Web Service"**
- Connect: `ramu2710y/TECH-IN-MY-STYLE`

### 3️⃣ Configure Service (2 minutes)

**Copy and paste these settings:**

```
Name: tech-in-my-style-backend
Region: Oregon
Branch: main
Root Directory: server
Runtime: Node
Build Command: npm install
Start Command: npm start
Plan: Free
```

### 4️⃣ Add Environment Variables (3 minutes)

Click **"Advanced"** → **"Add Environment Variable"**

**Copy these 6 variables:**

```
NODE_ENV=production
PORT=5000
CLIENT_URL=http://localhost:3000
PYTHON_STUDIO_URL=https://tech-in-my-style-python-studio.onrender.com
JWT_SECRET=techinmystyle_super_secret_jwt_key_2025_production_ready
JWT_EXPIRE=7d
```

### 5️⃣ Deploy (5 minutes)
- Click **"Create Web Service"**
- Wait for deployment
- Copy your URL: `https://tech-in-my-style-backend.onrender.com`

### 6️⃣ Test (1 minute)
```bash
curl https://tech-in-my-style-backend.onrender.com/api/health
```

Should return:
```json
{"status":"Server is running","dbMode":"json","timestamp":"..."}
```

---

## ✅ Done!

**Your Backend URL:**
```
https://tech-in-my-style-backend.onrender.com
```

**Next:** Deploy Frontend to Vercel
- See: `DEPLOY_NOW.md` - Step 4

---

## 📋 Environment Variables Checklist

When adding variables, check each one:

- [ ] `NODE_ENV` = `production`
- [ ] `PORT` = `5000`
- [ ] `CLIENT_URL` = `http://localhost:3000`
- [ ] `PYTHON_STUDIO_URL` = `https://tech-in-my-style-python-studio.onrender.com`
- [ ] `JWT_SECRET` = `techinmystyle_super_secret_jwt_key_2025_production_ready`
- [ ] `JWT_EXPIRE` = `7d`

---

## 🔧 If Something Goes Wrong

### Build Failed?
- Check "Logs" tab in Render
- Verify `Root Directory` is `server`
- Verify `Build Command` is `npm install`

### Can't Access Backend?
- Wait 30 seconds (free tier wakes from sleep)
- Check URL is correct
- Try health check: `/api/health`

### Need Help?
- See detailed guide: `BACKEND_DEPLOYMENT_STEPS.md`
- Check Render logs for errors

---

**Let's deploy! 🚀**
