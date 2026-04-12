# 🔧 Fix Connection Error - ERR_CONNECTION_REFUSED

## ❌ Error You're Seeing:

```
localhost:5000/api/auth/login:1  Failed to load resource: net::ERR_CONNECTION_REFUSED
```

## 🎯 What This Means:

Your frontend is trying to connect to `http://localhost:5000` (local backend), but:
- Either your local backend is not running
- Or you want to connect to your deployed backend on Render

---

## ✅ Solution 1: Run Backend Locally (For Local Development)

If you want to test everything locally:

### Step 1: Start Backend Server

Open a **new terminal** and run:

```bash
cd server
npm start
```

You should see:
```
🚀 Server running on port 5000
🌐 API: http://localhost:5000/api
❤️  Health: http://localhost:5000/api/health
```

### Step 2: Keep Backend Running

Leave this terminal open and running.

### Step 3: Start Frontend (in another terminal)

Open **another terminal** and run:

```bash
cd client
npm run dev
```

### Step 4: Test

Open: `http://localhost:3000`

Now your frontend will connect to your local backend! ✅

---

## ✅ Solution 2: Connect to Deployed Backend (For Testing Deployment)

If you want to test with your deployed backend on Render:

### Step 1: Update client/.env

Edit `client/.env` and change:

**From:**
```env
VITE_API_URL=http://localhost:5000
```

**To:**
```env
VITE_API_URL=https://tech-in-my-style-backend.onrender.com
```

**Replace with YOUR actual backend URL from Render!**

### Step 2: Restart Frontend

Stop your frontend (Ctrl+C) and restart:

```bash
npm run dev
```

### Step 3: Test

Open: `http://localhost:3000`

Now your local frontend will connect to your deployed backend! ✅

**Note:** First request might take 30 seconds if backend is sleeping (free tier).

---

## ✅ Solution 3: Use Environment-Specific Files (Best Practice)

Create separate environment files:

### For Local Development: `client/.env.local`

Create `client/.env.local`:

```env
# Local Development
VITE_API_URL=http://localhost:5000
VITE_CLIENT_URL=http://localhost:3000
VITE_GROQ_API_KEY=your_groq_api_key_here
VITE_GROQ_API_URL=https://api.groq.com/openai/v1/chat/completions
VITE_GROQ_MODEL=llama-3.3-70b-versatile
```

### For Production Testing: `client/.env.production.local`

Create `client/.env.production.local`:

```env
# Production Testing
VITE_API_URL=https://tech-in-my-style-backend.onrender.com
VITE_CLIENT_URL=http://localhost:3000
VITE_GROQ_API_KEY=your_groq_api_key_here
VITE_GROQ_API_URL=https://api.groq.com/openai/v1/chat/completions
VITE_GROQ_MODEL=llama-3.3-70b-versatile
```

### Update .gitignore

Make sure these are in `client/.gitignore`:

```
.env.local
.env.production.local
```

### Usage

**For local development:**
```bash
npm run dev
# Uses .env.local automatically
```

**For production build:**
```bash
npm run build
# Uses .env.production.local automatically
```

---

## 🔍 How to Check Which Backend You're Using

### Method 1: Check Browser Console

1. Open your website
2. Press **F12** (Developer Tools)
3. Go to **Console** tab
4. Look for API requests
5. Check the URL being called

### Method 2: Check Network Tab

1. Press **F12** (Developer Tools)
2. Go to **Network** tab
3. Try to login
4. Look at the request URL
5. Should show either:
   - `http://localhost:5000/api/auth/login` (local)
   - `https://tech-in-my-style-backend.onrender.com/api/auth/login` (deployed)

---

## 🚀 Recommended Setup

### For Local Development:

**Terminal 1 - Backend:**
```bash
cd server
npm start
```

**Terminal 2 - Frontend:**
```bash
cd client
npm run dev
```

**Terminal 3 - Python Studio (optional):**
```bash
cd server/python-studio
uvicorn main:app --reload --port 8000
```

### For Deployment Testing:

**Just Frontend (connects to deployed backend):**
```bash
cd client
# Update .env to use deployed backend URL
npm run dev
```

---

## 📋 Quick Checklist

### If using local backend:
- [ ] Backend server is running (`npm start` in server directory)
- [ ] Backend shows "Server running on port 5000"
- [ ] `VITE_API_URL=http://localhost:5000` in client/.env
- [ ] Frontend restarted after .env change

### If using deployed backend:
- [ ] Backend is deployed on Render
- [ ] Backend URL copied from Render dashboard
- [ ] `VITE_API_URL=https://your-backend.onrender.com` in client/.env
- [ ] Frontend restarted after .env change
- [ ] Waited 30 seconds for backend to wake up (if free tier)

---

## 🔧 Troubleshooting

### Backend won't start locally

**Error:** "Port 5000 already in use"

**Fix:**
```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Or change port in server/.env
PORT=5001
```

### Still getting connection refused

**Check:**
1. Is backend actually running? Check terminal
2. Is backend on correct port? Check server/.env
3. Is frontend using correct URL? Check client/.env
4. Did you restart frontend after changing .env?

### CORS errors after connecting

**Fix:**
1. Update `CLIENT_URL` in server/.env
2. Restart backend server
3. Should match your frontend URL exactly

---

## ⚠️ Security Warning

I noticed your Groq API key is in the `.env` file. This is okay for local development, but:

1. **Never commit `.env` files to Git**
2. **Make sure `.env` is in `.gitignore`**
3. **Use different keys for production (in Vercel)**

Check your `.gitignore`:
```bash
cat client/.gitignore | grep .env
```

Should show:
```
.env
.env.local
.env.production.local
```

---

## 🎯 Summary

**For Local Development:**
```bash
# Terminal 1
cd server && npm start

# Terminal 2  
cd client && npm run dev
```

**For Deployment Testing:**
```bash
# Update client/.env
VITE_API_URL=https://tech-in-my-style-backend.onrender.com

# Restart frontend
cd client && npm run dev
```

**For Production (Vercel):**
- Environment variables set in Vercel dashboard
- No need to change local .env files
- Vercel uses its own environment variables

---

## ✅ Next Steps

1. **Choose your setup** (local or deployed backend)
2. **Update client/.env** accordingly
3. **Restart frontend** (Ctrl+C then `npm run dev`)
4. **Test login** - should work now!

---

*Need more help? Check the error in browser console (F12) for more details.*
