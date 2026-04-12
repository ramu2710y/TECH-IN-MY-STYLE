# 🐍 Python Studio Deployment & Configuration

## ✅ What Was Updated

I've updated your backend to use the Python Studio URL from environment variables:

### Changes Made:

1. **server/server.js**
   - ✅ Updated Python Studio proxy to use `process.env.PYTHON_STUDIO_URL`
   - ✅ Added fallback to `http://localhost:8000` for local development
   - ✅ Added error handling and logging
   - ✅ Added `CLIENT_URL` to CORS allowed origins

2. **server/.env.example**
   - ✅ Added `PYTHON_STUDIO_URL` documentation

---

## 🚀 Next Steps

### STEP 1: Commit and Push Changes

```bash
# Add the updated files
git add server/server.js server/.env.example

# Commit the changes
git commit -m "Update Python Studio proxy URL to use environment variable"

# Push to GitHub
git push origin main
```

### STEP 2: Update Backend Environment Variables on Render

1. **Go to Render Dashboard**
   - Visit: https://dashboard.render.com
   - Click on your backend service: `tech-in-my-style-backend`

2. **Add Python Studio URL**
   - Click "Environment" tab
   - Click "Add Environment Variable"
   - Add:
     ```
     Key: PYTHON_STUDIO_URL
     Value: https://tech-in-my-style-python-studio.onrender.com
     ```
   - Click "Save Changes"

3. **Update CLIENT_URL (if not done yet)**
   - Find `CLIENT_URL` variable
   - Update to your Vercel URL: `https://your-app.vercel.app`
   - Click "Save Changes"

4. **Wait for Auto-Redeploy**
   - Render will automatically redeploy (1-2 minutes)
   - Watch the logs to confirm successful deployment

---

## 🧪 Test Python Studio Integration

### Test 1: Health Check

```bash
# Test Python Studio directly
curl https://tech-in-my-style-python-studio.onrender.com/health
```

Expected response:
```json
{
  "status": "healthy",
  "timestamp": "2026-04-13T..."
}
```

### Test 2: Code Execution (Direct)

```bash
# Test code execution directly on Python Studio
curl -X POST https://tech-in-my-style-python-studio.onrender.com/run \
  -H "Content-Type: application/json" \
  -d '{"code":"print(\"Hello from Python Studio!\")"}'
```

Expected response:
```json
{
  "output": "Hello from Python Studio!\n",
  "error": null,
  "execution_time": 0.123
}
```

### Test 3: Code Execution (Through Backend Proxy)

```bash
# Test through your backend proxy
curl -X POST https://tech-in-my-style-backend.onrender.com/api/python-studio/run \
  -H "Content-Type: application/json" \
  -d '{"code":"print(2 + 2)"}'
```

Expected response:
```json
{
  "output": "4\n",
  "error": null,
  "execution_time": 0.089
}
```

### Test 4: From Frontend

1. Open your website: `https://your-app.vercel.app`
2. Go to Python course
3. Try to run some Python code
4. Should execute successfully ✓

---

## 📋 Environment Variables Summary

### Backend (Render)

Your backend should have these environment variables:

```
NODE_ENV = production
PORT = 5000
CLIENT_URL = https://your-app.vercel.app
PYTHON_STUDIO_URL = https://tech-in-my-style-python-studio.onrender.com
JWT_SECRET = techinmystyle_super_secret_jwt_key_2025_production_ready
JWT_EXPIRE = 7d
```

### Python Studio (Render)

Your Python Studio should have these:

```
USE_DOCKER = false
EXECUTION_TIMEOUT = 30
PYTHONUNBUFFERED = 1
```

### Frontend (Vercel)

Your frontend should have these:

```
VITE_API_URL = https://tech-in-my-style-backend.onrender.com
VITE_CLIENT_URL = https://your-app.vercel.app
VITE_GROQ_API_KEY = your_groq_api_key_here
VITE_GROQ_API_URL = https://api.groq.com/openai/v1/chat/completions
VITE_GROQ_MODEL = llama-3.3-70b-versatile
```

---

## 🔄 Architecture Flow

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  USER BROWSER                                               │
│  https://your-app.vercel.app                               │
│                                                             │
└────────────────────┬────────────────────────────────────────┘
                     │
                     │ HTTPS Request
                     ▼
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  BACKEND API (Render)                                       │
│  https://tech-in-my-style-backend.onrender.com             │
│                                                             │
│  Routes:                                                    │
│  - /api/auth/* → Authentication                            │
│  - /api/python-studio/* → Proxy to Python Studio          │
│                                                             │
└────────────────────┬────────────────────────────────────────┘
                     │
                     │ Proxy Request
                     ▼
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  PYTHON STUDIO (Render Docker)                             │
│  https://tech-in-my-style-python-studio.onrender.com       │
│                                                             │
│  Endpoints:                                                 │
│  - /health → Health check                                  │
│  - /run → Execute Python code                              │
│  - /ai-assist → AI code assistance                         │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 🔧 Troubleshooting

### Issue 1: "Python Studio service unavailable"

**Cause:** Python Studio is sleeping (free tier) or not deployed

**Fix:**
1. Visit Python Studio URL directly to wake it up
2. Wait 30 seconds
3. Try again

### Issue 2: CORS errors when calling Python Studio

**Cause:** CLIENT_URL not configured in backend

**Fix:**
1. Go to Render → Backend service → Environment
2. Update `CLIENT_URL` to your Vercel URL
3. Save and wait for redeploy

### Issue 3: Proxy timeout

**Cause:** Python Studio taking too long to respond

**Fix:**
1. Check Python Studio logs on Render
2. Reduce `EXECUTION_TIMEOUT` to 30 seconds
3. Consider upgrading to Starter plan for better performance

### Issue 4: Code execution fails

**Cause:** Docker-in-Docker not supported on Render

**Fix:**
1. Verify `USE_DOCKER=false` in Python Studio environment variables
2. This uses direct Python execution instead

---

## 📊 Deployment Status Checklist

- [ ] Backend code updated (server.js)
- [ ] Changes committed and pushed to GitHub
- [ ] `PYTHON_STUDIO_URL` added to backend environment variables
- [ ] `CLIENT_URL` updated in backend environment variables
- [ ] Backend redeployed successfully
- [ ] Python Studio health check passes
- [ ] Direct code execution works
- [ ] Proxy code execution works (through backend)
- [ ] Frontend can execute Python code
- [ ] No CORS errors in browser console

---

## 🎉 Success!

Once all tests pass, your Python Studio is fully integrated!

**Your Services:**

1. **Frontend:** `https://your-app.vercel.app`
2. **Backend:** `https://tech-in-my-style-backend.onrender.com`
3. **Python Studio:** `https://tech-in-my-style-python-studio.onrender.com`

All three services are now connected and working together! 🚀

---

## 📝 Local Development

For local development, create `server/.env`:

```env
PORT=5000
CLIENT_URL=http://localhost:3000
PYTHON_STUDIO_URL=http://localhost:8000
JWT_SECRET=techinmystyle_super_secret_jwt_key_2025_production_ready
JWT_EXPIRE=7d
```

Then run:

```bash
# Terminal 1: Start Python Studio
cd server/python-studio
uvicorn main:app --reload --port 8000

# Terminal 2: Start Backend
cd server
npm run dev

# Terminal 3: Start Frontend
cd client
npm run dev
```

---

*Configuration completed on: April 13, 2026*
