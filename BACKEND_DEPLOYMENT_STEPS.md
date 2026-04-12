# 🚀 Backend Server Deployment - Step by Step

## ✅ Prerequisites Completed
- ✅ Python Studio deployed
- ✅ Code updated with Python Studio URL
- ✅ Ready to deploy backend

---

## 📋 STEP 1: Push Your Latest Code (1 minute)

First, make sure all changes are on GitHub:

```bash
# Check status
git status

# If there are changes, commit them
git add .
git commit -m "Ready for backend deployment"
git push origin main
```

✅ **Checkpoint:** Code is pushed to GitHub

---

## 📋 STEP 2: Create Backend Web Service on Render (5 minutes)

### 2.1 Go to Render Dashboard

1. Open: https://dashboard.render.com
2. Click **"New +"** button (top right)
3. Select **"Web Service"**

### 2.2 Connect Your Repository

1. If not connected, click **"Connect account"**
2. Authorize Render to access your GitHub
3. Find and select: **`ramu2710y/TECH-IN-MY-STYLE`**
4. Click **"Connect"**

### 2.3 Configure the Service

Fill in these settings exactly:

| Field | Value |
|-------|-------|
| **Name** | `tech-in-my-style-backend` |
| **Region** | `Oregon` (or closest to you) |
| **Branch** | `main` |
| **Root Directory** | `server` |
| **Runtime** | `Node` |
| **Build Command** | `npm install` |
| **Start Command** | `npm start` |

### 2.4 Select Plan

Choose one:
- **Free** - Good for testing (sleeps after 15 min inactivity)
- **Starter ($7/month)** - Recommended for production (always on, faster)

For now, select **Free** to test.

---

## 📋 STEP 3: Add Environment Variables (3 minutes)

Click **"Advanced"** to expand, then click **"Add Environment Variable"**

Add these variables one by one:

### Variable 1: NODE_ENV
```
Key: NODE_ENV
Value: production
```

### Variable 2: PORT
```
Key: PORT
Value: 5000
```

### Variable 3: CLIENT_URL
```
Key: CLIENT_URL
Value: http://localhost:3000
```
**Note:** We'll update this after deploying frontend

### Variable 4: PYTHON_STUDIO_URL
```
Key: PYTHON_STUDIO_URL
Value: https://tech-in-my-style-python-studio.onrender.com
```

### Variable 5: JWT_SECRET
```
Key: JWT_SECRET
Value: techinmystyle_super_secret_jwt_key_2025_production_ready
```

### Variable 6: JWT_EXPIRE
```
Key: JWT_EXPIRE
Value: 7d
```

### Summary - You should have 6 environment variables:
- ✅ NODE_ENV
- ✅ PORT
- ✅ CLIENT_URL
- ✅ PYTHON_STUDIO_URL
- ✅ JWT_SECRET
- ✅ JWT_EXPIRE

---

## 📋 STEP 4: Deploy! (5 minutes)

1. **Click "Create Web Service"**
2. **Watch the deployment logs**
   - You'll see:
     - Cloning repository
     - Installing dependencies
     - Starting server
3. **Wait for completion** (3-5 minutes)
4. **Look for success message:**
   ```
   Your service is live at https://tech-in-my-style-backend.onrender.com
   ```

### 🎯 Copy Your Backend URL!

Your backend URL will be something like:
```
https://tech-in-my-style-backend.onrender.com
```

**Write it down - you'll need it for the frontend!**

---

## 📋 STEP 5: Test Your Backend (2 minutes)

### Test 1: Health Check

Open a new terminal and run:

```bash
curl https://tech-in-my-style-backend.onrender.com/api/health
```

**Expected Response:**
```json
{
  "status": "Server is running",
  "dbMode": "json",
  "timestamp": "2026-04-13T..."
}
```

✅ If you see this, your backend is working!

### Test 2: Python Studio Proxy

```bash
curl -X POST https://tech-in-my-style-backend.onrender.com/api/python-studio/run \
  -H "Content-Type: application/json" \
  -d '{"code":"print(2 + 2)"}'
```

**Expected Response:**
```json
{
  "output": "4\n",
  "error": null
}
```

✅ If you see this, Python Studio integration is working!

### Test 3: Open in Browser

Open this URL in your browser:
```
https://tech-in-my-style-backend.onrender.com/api/health
```

You should see the JSON response.

---

## 📋 STEP 6: Check Deployment Logs (Optional)

If something goes wrong:

1. Go to Render Dashboard
2. Click on your service: `tech-in-my-style-backend`
3. Click **"Logs"** tab
4. Look for any error messages

Common issues:
- ❌ Module not found → Check `package.json` dependencies
- ❌ Port already in use → Render handles this automatically
- ❌ Build failed → Check build command is `npm install`

---

## 🎉 SUCCESS! Backend is Deployed!

### Your Backend URLs:

**Base URL:**
```
https://tech-in-my-style-backend.onrender.com
```

**API Endpoints:**
- Health Check: `/api/health`
- Authentication: `/api/auth/*`
- Python Studio Proxy: `/api/python-studio/*`

---

## 📊 What's Deployed:

✅ **Express.js Backend**
- User authentication (JWT)
- JSON database (local storage)
- Python Studio proxy
- CORS configured
- Health check endpoint

✅ **Connected Services:**
- Python Studio: `https://tech-in-my-style-python-studio.onrender.com`

---

## 🔄 Next Steps:

### 1. Deploy Frontend (Vercel)
Now that your backend is ready, deploy the frontend:
- See: `DEPLOY_NOW.md` - Step 4

### 2. Update CLIENT_URL
After deploying frontend, come back and update:
1. Go to Render → Your backend service
2. Click "Environment" tab
3. Update `CLIENT_URL` to your Vercel URL
4. Save (auto-redeploys)

### 3. Test Full Integration
Once frontend is deployed:
- Test user registration
- Test user login
- Test Python code execution

---

## 🔧 Backend Configuration Summary

### Environment Variables (Current):
```
NODE_ENV = production
PORT = 5000
CLIENT_URL = http://localhost:3000 (update after frontend deploy)
PYTHON_STUDIO_URL = https://tech-in-my-style-python-studio.onrender.com
JWT_SECRET = techinmystyle_super_secret_jwt_key_2025_production_ready
JWT_EXPIRE = 7d
```

### Service Configuration:
```
Name: tech-in-my-style-backend
Region: Oregon
Runtime: Node
Root Directory: server
Build: npm install
Start: npm start
Plan: Free (or Starter)
```

---

## 📱 Monitor Your Backend

### View Logs:
1. Go to Render Dashboard
2. Click your service
3. Click "Logs" tab
4. See real-time logs

### View Metrics:
1. Click "Metrics" tab
2. See:
   - CPU usage
   - Memory usage
   - Response times
   - Request count

---

## ⚠️ Important Notes

### Free Tier Limitations:
- ⏰ Sleeps after 15 minutes of inactivity
- 🐌 First request takes 30+ seconds (cold start)
- 💾 750 hours/month free

### Upgrade to Starter ($7/month):
- ✅ Always on (no sleep)
- ✅ Faster response times
- ✅ 512MB RAM
- ✅ Better reliability

To upgrade:
1. Go to service → Settings
2. Click "Change Plan"
3. Select "Starter"
4. Confirm payment

---

## 🎯 Deployment Checklist

- [x] Code pushed to GitHub
- [x] Render account created
- [x] Web Service created
- [x] Repository connected
- [x] Service configured (root dir, build, start)
- [x] Environment variables added (6 variables)
- [x] Service deployed successfully
- [x] Health check passes
- [x] Python Studio proxy works
- [x] Backend URL copied
- [ ] Frontend deployment (next step)
- [ ] CLIENT_URL updated (after frontend)
- [ ] Full integration tested

---

## 🚀 Ready for Frontend!

Your backend is now live and ready to serve your frontend!

**Backend URL:** `https://tech-in-my-style-backend.onrender.com`

**Next:** Deploy your frontend to Vercel
- See: `DEPLOY_NOW.md` - Step 4
- Or: `QUICK_START_DEPLOY.md` - Step 4

---

*Backend deployed on: April 13, 2026*
