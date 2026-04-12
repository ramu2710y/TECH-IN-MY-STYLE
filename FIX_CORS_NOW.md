# 🔧 Fix CORS Error - Step by Step

## ❌ Error You're Seeing:

```
Access to XMLHttpRequest at 'https://tech-in-my-style-backend.onrender.com/api/auth/register' 
from origin 'https://tech-in-my-style.vercel.app' has been blocked by CORS policy
```

## 🎯 What This Means:

Your backend is not allowing requests from your frontend because the `CLIENT_URL` environment variable is not set correctly in Render.

---

## ✅ SOLUTION: Update CLIENT_URL in Render (2 minutes)

### Step 1: Go to Render Dashboard

1. Open: https://dashboard.render.com
2. Click on: **`tech-in-my-style-backend`**

### Step 2: Update Environment Variable

1. Click **"Environment"** tab (left sidebar)
2. Find the variable: **`CLIENT_URL`**
3. Click the **"Edit"** button (pencil icon)
4. Change the value to:
   ```
   https://tech-in-my-style.vercel.app
   ```
5. Click **"Save Changes"**

### Step 3: Wait for Auto-Redeploy

- Render will automatically redeploy your backend (1-2 minutes)
- Watch the logs to see deployment progress
- Wait for "Your service is live" message

### Step 4: Test Again

1. Go to: https://tech-in-my-style.vercel.app
2. Press `Ctrl + Shift + R` to hard refresh
3. Try to register again
4. Should work now! ✅

---

## 📋 Verify Environment Variables

Make sure these are set correctly:

### In Render Backend:

| Variable | Value |
|----------|-------|
| `CLIENT_URL` | `https://tech-in-my-style.vercel.app` |
| `NODE_ENV` | `production` |
| `PORT` | `5000` |
| `PYTHON_STUDIO_URL` | `https://tech-in-my-style-python-studio.onrender.com` |
| `JWT_SECRET` | `techinmystyle_super_secret_jwt_key_2025_production_ready` |
| `JWT_EXPIRE` | `7d` |

---

## 🧪 Test Backend CORS

After updating, test if CORS is working:

```bash
curl -X OPTIONS https://tech-in-my-style-backend.onrender.com/api/auth/register \
  -H "Origin: https://tech-in-my-style.vercel.app" \
  -H "Access-Control-Request-Method: POST" \
  -v
```

**Expected:** Should see `Access-Control-Allow-Origin: https://tech-in-my-style.vercel.app` in response headers

---

## 🔍 How to Check if CLIENT_URL is Set

### Method 1: Render Dashboard

1. Go to Render → Your backend service
2. Click "Environment" tab
3. Look for `CLIENT_URL`
4. Should be: `https://tech-in-my-style.vercel.app`

### Method 2: Check Backend Logs

1. Go to Render → Your backend service
2. Click "Logs" tab
3. Look for startup logs
4. Should show allowed origins

---

## ⚠️ Common Mistakes

### ❌ Wrong: Trailing Slash
```
CLIENT_URL=https://tech-in-my-style.vercel.app/
```

### ✅ Correct: No Trailing Slash
```
CLIENT_URL=https://tech-in-my-style.vercel.app
```

### ❌ Wrong: HTTP instead of HTTPS
```
CLIENT_URL=http://tech-in-my-style.vercel.app
```

### ✅ Correct: HTTPS
```
CLIENT_URL=https://tech-in-my-style.vercel.app
```

### ❌ Wrong: localhost
```
CLIENT_URL=http://localhost:3000
```

### ✅ Correct: Your Vercel URL
```
CLIENT_URL=https://tech-in-my-style.vercel.app
```

---

## 🔧 If Still Not Working

### Issue 1: Backend Didn't Redeploy

**Manual Redeploy:**
1. Go to Render → Your backend service
2. Click "Manual Deploy" button (top right)
3. Select "Clear build cache & deploy"
4. Wait for deployment

### Issue 2: Browser Cache

**Clear Cache:**
1. Press `Ctrl + Shift + Delete`
2. Select "Cached images and files"
3. Click "Clear data"
4. Close and reopen browser
5. Try again

### Issue 3: Multiple CLIENT_URL Variables

**Check for duplicates:**
1. Go to Render → Environment tab
2. Make sure there's only ONE `CLIENT_URL` variable
3. Delete any duplicates
4. Keep only the one with your Vercel URL

### Issue 4: Backend is Sleeping

**Wake it up:**
1. Visit: https://tech-in-my-style-backend.onrender.com/api/health
2. Wait 30 seconds
3. Try registration again

---

## 📊 Timeline

- ✅ **Now:** Update `CLIENT_URL` in Render
- ⏳ **1-2 min:** Backend auto-redeploys
- ✅ **Test:** Registration should work!

---

## 🎯 Expected Result

After updating `CLIENT_URL`:

1. ✅ No more CORS errors
2. ✅ Registration works
3. ✅ Login works
4. ✅ All API calls work
5. ✅ Browser console shows no errors

---

## 📸 Visual Guide

### Step-by-Step Screenshots:

**1. Go to Render Dashboard**
```
https://dashboard.render.com
```

**2. Click Your Backend Service**
```
tech-in-my-style-backend
```

**3. Click "Environment" Tab**
```
Left sidebar → Environment
```

**4. Find CLIENT_URL**
```
Scroll down to find CLIENT_URL variable
```

**5. Click Edit (Pencil Icon)**
```
Click the pencil icon next to CLIENT_URL
```

**6. Update Value**
```
Change to: https://tech-in-my-style.vercel.app
```

**7. Click "Save Changes"**
```
Bottom of the page → Save Changes button
```

**8. Wait for Redeploy**
```
Watch logs → Wait for "Your service is live"
```

---

## ✅ Verification Checklist

After updating:

- [ ] `CLIENT_URL` is set to `https://tech-in-my-style.vercel.app`
- [ ] No trailing slash in URL
- [ ] Using HTTPS (not HTTP)
- [ ] Backend redeployed successfully
- [ ] Waited 1-2 minutes for deployment
- [ ] Cleared browser cache
- [ ] Tested registration
- [ ] No CORS errors in console

---

## 🎉 Success!

Once `CLIENT_URL` is updated and backend is redeployed:

✅ Your frontend can communicate with backend  
✅ Registration will work  
✅ Login will work  
✅ All features will work  

---

## 📞 Quick Help

**Still getting CORS errors?**

1. Double-check `CLIENT_URL` value (no typos!)
2. Make sure backend redeployed (check logs)
3. Clear browser cache completely
4. Try in incognito/private window
5. Check browser console for exact error message

---

*Fix guide created: April 13, 2026*  
*Issue: CORS policy blocking requests*  
*Solution: Update CLIENT_URL in Render backend*
