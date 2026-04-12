# 🎨 Frontend Deployment to Vercel - Step by Step

## ✅ Prerequisites Completed
- ✅ Python Studio deployed
- ✅ Backend server deployed
- ✅ Backend URL ready
- ✅ Ready to deploy frontend

---

## 📋 STEP 1: Get Your Backend URL (30 seconds)

You should have your backend URL from the previous step:
```
https://tech-in-my-style-backend.onrender.com
```

**If you don't have it:**
1. Go to: https://dashboard.render.com
2. Click on: `tech-in-my-style-backend`
3. Copy the URL at the top

✅ **Write it down - you'll need it!**

---

## 📋 STEP 2: Get Your Groq API Key (1 minute)

You should have your Groq API key from earlier. If not:

1. Go to: https://console.groq.com
2. Log in
3. Click "API Keys"
4. Copy your key (starts with `gsk_...`)

✅ **Write it down - you'll need it!**

---

## 📋 STEP 3: Go to Vercel (1 minute)

### 3.1 Open Vercel Dashboard
1. Go to: https://vercel.com/dashboard
2. If not logged in, click **"Sign Up"**
3. Sign up with GitHub (recommended)
4. Authorize Vercel to access your GitHub

### 3.2 Import Project
1. Click **"Add New..."** (top right)
2. Select **"Project"**
3. You'll see "Import Git Repository"

---

## 📋 STEP 4: Import Your Repository (2 minutes)

### 4.1 Find Your Repository

1. Look for: **`ramu2710y/TECH-IN-MY-STYLE`**
2. If you don't see it, click **"Adjust GitHub App Permissions"**
3. Grant access to the repository
4. Click **"Import"** next to your repository

### 4.2 Configure Project

Vercel will show configuration options. Fill in:

| Field | Value |
|-------|-------|
| **Framework Preset** | `Vite` |
| **Root Directory** | `client` |
| **Build Command** | `npm run build` |
| **Output Directory** | `build` |
| **Install Command** | `npm install` |

**Important:** Make sure to set **Root Directory** to `client`!

---

## 📋 STEP 5: Add Environment Variables (3 minutes)

Click **"Environment Variables"** section to expand.

Add these 5 variables one by one:

### Variable 1: VITE_API_URL
```
Name: VITE_API_URL
Value: https://tech-in-my-style-backend.onrender.com
```
**Replace with YOUR actual backend URL!**

### Variable 2: VITE_CLIENT_URL
```
Name: VITE_CLIENT_URL
Value: https://your-app.vercel.app
```
**Note:** We'll update this after deployment

### Variable 3: VITE_GROQ_API_KEY
```
Name: VITE_GROQ_API_KEY
Value: YOUR_GROQ_API_KEY_HERE
```
**Replace with YOUR actual Groq API key!**

### Variable 4: VITE_GROQ_API_URL
```
Name: VITE_GROQ_API_URL
Value: https://api.groq.com/openai/v1/chat/completions
```

### Variable 5: VITE_GROQ_MODEL
```
Name: VITE_GROQ_MODEL
Value: llama-3.3-70b-versatile
```

### Summary - You should have 5 environment variables:
- ✅ VITE_API_URL
- ✅ VITE_CLIENT_URL
- ✅ VITE_GROQ_API_KEY
- ✅ VITE_GROQ_API_URL
- ✅ VITE_GROQ_MODEL

---

## 📋 STEP 6: Deploy! (3 minutes)

1. **Click "Deploy"**
2. **Watch the build process**
   - You'll see:
     - Installing dependencies
     - Building application
     - Uploading to CDN
3. **Wait for completion** (2-3 minutes)
4. **Look for success message:**
   ```
   🎉 Your project is live!
   ```

### 🎯 Copy Your Frontend URL!

Your frontend URL will be something like:
```
https://tech-in-my-style-abc123.vercel.app
```

**Write it down!**

---

## 📋 STEP 7: Update Frontend URL (2 minutes)

Now that you have your Vercel URL, update it:

### 7.1 Update in Vercel

1. Stay on Vercel dashboard
2. Go to your project
3. Click **"Settings"** tab
4. Click **"Environment Variables"** in sidebar
5. Find **`VITE_CLIENT_URL`**
6. Click **"Edit"** (pencil icon)
7. Replace with YOUR actual Vercel URL
8. Click **"Save"**

### 7.2 Redeploy

1. Click **"Deployments"** tab
2. Find the latest deployment
3. Click **"..."** (three dots)
4. Click **"Redeploy"**
5. Click **"Redeploy"** to confirm
6. Wait 1-2 minutes

---

## 📋 STEP 8: Update Backend CORS (2 minutes)

Now update your backend to allow requests from your frontend:

### 8.1 Go to Render

1. Go to: https://dashboard.render.com
2. Click on: **`tech-in-my-style-backend`**
3. Click **"Environment"** tab

### 8.2 Update CLIENT_URL

1. Find **`CLIENT_URL`** variable
2. Click **"Edit"** (pencil icon)
3. Replace with YOUR Vercel URL:
   ```
   https://tech-in-my-style-abc123.vercel.app
   ```
4. Click **"Save Changes"**
5. Wait 1-2 minutes for auto-redeploy

---

## 📋 STEP 9: Test Your Website! (5 minutes)

### 9.1 Open Your Website

Go to your Vercel URL:
```
https://your-app.vercel.app
```

### 9.2 Check Homepage

- [ ] Homepage loads without errors
- [ ] Navigation menu visible
- [ ] No errors in browser console (press F12)

### 9.3 Test User Registration

1. Click **"Sign Up"** or **"Register"**
2. Fill in the form:
   ```
   Username: testuser
   Email: your-email@example.com
   Password: Test123!
   ```
3. Click **"Register"**
4. Should see success message ✅

### 9.4 Test User Login

1. Click **"Login"**
2. Enter your credentials
3. Click **"Login"**
4. Should be logged in successfully ✅

### 9.5 Test Courses

1. Click **"Courses"** in navigation
2. All course cards should be visible ✅
3. Click **"Python In My Style"**
4. Course content should load ✅
5. Try other courses (HTML, CSS, JavaScript, etc.)

### 9.6 Test Python Code Execution (if applicable)

1. Go to Python course
2. Find code editor
3. Write simple code: `print("Hello World")`
4. Click "Run"
5. Should see output ✅

### 9.7 Check Browser Console

1. Press **F12** to open Developer Tools
2. Go to **"Console"** tab
3. Should see **NO red errors** ✅
4. If you see CORS errors, go back to Step 8

### 9.8 Test Responsive Design

1. Press **F12** (Developer Tools)
2. Click **"Toggle device toolbar"** (phone icon)
3. Select different devices (iPhone, iPad, etc.)
4. Website should look good on all sizes ✅

---

## 🎉 SUCCESS! Your Website is Live!

### Your Live URLs:

**Frontend (Website):**
```
https://your-app.vercel.app
```

**Backend (API):**
```
https://tech-in-my-style-backend.onrender.com
```

**Python Studio:**
```
https://tech-in-my-style-python-studio.onrender.com
```

---

## 📊 What You've Deployed:

✅ **Full-Stack Application**
- React frontend with Vite
- Express.js backend
- Python code execution service
- User authentication
- 20+ course modules
- Responsive design
- Global CDN delivery

✅ **All Services Connected**
- Frontend → Backend → Python Studio
- CORS configured
- Environment variables set
- HTTPS enabled

---

## 🔧 Troubleshooting

### Issue 1: Build Failed

**Error:** "Module not found" or build errors

**Fix:**
1. Go to Vercel → Deployments → View logs
2. Check which module is missing
3. Verify `Root Directory` is set to `client`
4. Verify `Build Command` is `npm run build`
5. Redeploy

### Issue 2: Blank Page

**Error:** Website loads but shows blank page

**Fix:**
1. Press F12 → Console tab
2. Look for errors
3. Common issue: Missing environment variables
4. Go to Vercel → Settings → Environment Variables
5. Verify all 5 `VITE_*` variables are set
6. Redeploy

### Issue 3: CORS Errors

**Error:** "CORS policy: No 'Access-Control-Allow-Origin' header"

**Fix:**
1. Go to Render → Backend service → Environment
2. Verify `CLIENT_URL` matches your Vercel URL exactly
3. No trailing slash: ✅ `https://app.vercel.app` ❌ `https://app.vercel.app/`
4. Save and wait for redeploy

### Issue 4: Can't Login/Register

**Error:** "Network error" or "Cannot connect to server"

**Fix:**
1. Check `VITE_API_URL` in Vercel environment variables
2. Should be: `https://tech-in-my-style-backend.onrender.com`
3. Test backend directly: `curl https://your-backend.onrender.com/api/health`
4. If backend is sleeping (free tier), wait 30 seconds

### Issue 5: Python Code Won't Execute

**Error:** Code execution fails or times out

**Fix:**
1. Check Python Studio is deployed
2. Test: `curl https://tech-in-my-style-python-studio.onrender.com/health`
3. Check backend proxy is configured
4. Check `PYTHON_STUDIO_URL` in backend environment variables

---

## 📱 View Deployment Logs

### Vercel Logs:
1. Go to Vercel Dashboard
2. Click your project
3. Click "Deployments" tab
4. Click on a deployment
5. View build logs and runtime logs

### Check Build Output:
- Look for "Build Completed"
- Check for any warnings
- Verify all files uploaded

---

## 🚀 Next Steps (Optional)

### 1. Custom Domain

**Buy a domain** (Namecheap, GoDaddy, etc.) - $10-15/year

**Add to Vercel:**
1. Go to Vercel → Settings → Domains
2. Click "Add"
3. Enter your domain (e.g., `techinmystyle.com`)
4. Follow DNS configuration steps
5. Wait for SSL certificate (automatic)

**Update URLs:**
After adding custom domain, update:
- `VITE_CLIENT_URL` in Vercel
- `CLIENT_URL` in Render backend

### 2. Enable Analytics

**Vercel Analytics (Free):**
1. Go to Vercel → Analytics tab
2. Click "Enable"
3. View page views, performance, etc.

**Google Analytics:**
1. Create GA4 property
2. Get tracking ID
3. Add to your React app
4. Track user behavior

### 3. Upgrade Backend (Recommended)

**Render Starter Plan: $7/month**
- Always on (no sleep)
- Faster response times
- Better reliability

**To upgrade:**
1. Go to Render → Your service → Settings
2. Click "Change Plan"
3. Select "Starter"
4. Confirm payment

### 4. Set Up Monitoring

**Uptime Monitoring:**
- Use UptimeRobot (free)
- Monitor your website 24/7
- Get alerts if site goes down

**Error Tracking:**
- Use Sentry (free tier available)
- Track JavaScript errors
- Get notified of issues

---

## 📋 Final Checklist

### Deployment Complete:
- [x] Frontend deployed to Vercel
- [x] Backend deployed to Render
- [x] Python Studio deployed to Render
- [x] All environment variables set
- [x] CORS configured
- [x] URLs updated everywhere

### Testing Complete:
- [ ] Homepage loads
- [ ] User registration works
- [ ] User login works
- [ ] Courses page loads
- [ ] Python course accessible
- [ ] Code execution works (if applicable)
- [ ] No console errors
- [ ] Responsive on mobile
- [ ] All links work

### Post-Deployment:
- [ ] URLs documented
- [ ] Environment variables backed up
- [ ] Custom domain added (optional)
- [ ] Analytics enabled (optional)
- [ ] Monitoring set up (optional)

---

## 🎓 What You Accomplished:

✅ Deployed a full-stack web application  
✅ Configured cloud hosting (Vercel + Render)  
✅ Set up environment variables  
✅ Connected frontend and backend  
✅ Configured CORS  
✅ Tested all features  
✅ Made your project accessible worldwide!

---

## 🌟 Share Your Success!

Your website is now live! Share it:

- 📱 Add to your portfolio
- 💼 Add to LinkedIn
- 🐦 Share on Twitter
- 👨‍💻 Add to GitHub README
- 📧 Share with friends and family

---

## 📞 Need Help?

### Resources:
- **Vercel Docs:** https://vercel.com/docs
- **Render Docs:** https://render.com/docs
- **Your Guides:** Check other `.md` files in this project

### Common Commands:

```bash
# View Vercel deployments
vercel ls

# View Vercel logs
vercel logs

# Redeploy
vercel --prod

# Check environment variables
vercel env ls
```

---

## 🎉 Congratulations!

**You've successfully deployed your TECH-IN-MY-STYLE learning platform!**

Your application is now:
- ✅ Live and accessible worldwide
- ✅ Secured with HTTPS
- ✅ Hosted on reliable cloud platforms
- ✅ Ready for users!

**Your Live Website:**
```
https://your-app.vercel.app
```

**Share it with the world!** 🌍

---

*Frontend deployed on: April 13, 2026*
