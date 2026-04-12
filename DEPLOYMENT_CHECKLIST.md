# 🚀 Quick Deployment Checklist

## Step-by-Step Deployment Process

### 1️⃣ Prepare Repository (5 minutes)

```bash
# Initialize Git in root directory
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Ready for deployment"

# Create GitHub repository at https://github.com/new
# Then connect and push:
git remote add origin https://github.com/YOUR_USERNAME/tech-in-my-style.git
git branch -M main
git push -u origin main
```

---

### 2️⃣ Deploy Backend to Render (10 minutes)

1. **Go to [Render Dashboard](https://dashboard.render.com)**

2. **Click "New +" → "Web Service"**

3. **Connect GitHub repository**
   - Select `tech-in-my-style`

4. **Configure:**
   ```
   Name: tech-in-my-style-backend
   Region: Oregon
   Branch: main
   Root Directory: server
   Environment: Node
   Build Command: npm install
   Start Command: npm start
   Plan: Starter ($7/month) or Free
   ```

5. **Add Environment Variables:**
   ```
   NODE_ENV=production
   PORT=5000
   MONGODB_URI=mongodb+srv://tech_trail_main:tech_in_my_style@cluster0.jhepdoh.mongodb.net/tech_in_my_style?retryWrites=true&w=majority&appName=Cluster0
   JWT_SECRET=techinmystyle_super_secret_jwt_key_2025_production_ready
   JWT_EXPIRE=7d
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=techinmystyle@gmail.com
   EMAIL_PASSWORD=qrbtvgcojnnsyuyo
   EMAIL_FROM=Tech In My Style <techinmystyle@gmail.com>
   CLIENT_URL=https://your-app.vercel.app
   ```

6. **Click "Create Web Service"**

7. **Wait for deployment** (3-5 minutes)

8. **Copy your backend URL:**
   ```
   https://tech-in-my-style-backend.onrender.com
   ```

9. **Test it:**
   ```bash
   curl https://tech-in-my-style-backend.onrender.com/api/health
   ```

---

### 3️⃣ Deploy Python Studio to Render (15 minutes)

1. **Go to [Render Dashboard](https://dashboard.render.com)**

2. **Click "New +" → "Web Service"**

3. **Connect same GitHub repository**

4. **Configure:**
   ```
   Name: tech-in-my-style-python-studio
   Region: Oregon
   Branch: main
   Root Directory: server/python-studio
   Environment: Docker
   Dockerfile Path: ./Dockerfile
   Plan: Starter ($7/month) or Free
   ```

5. **Add Environment Variables:**
   ```
   USE_DOCKER=false
   EXECUTION_TIMEOUT=30
   PYTHONUNBUFFERED=1
   ```

6. **Click "Create Web Service"**

7. **Wait for Docker build** (5-10 minutes)

8. **Copy your Python Studio URL:**
   ```
   https://tech-in-my-style-python-studio.onrender.com
   ```

9. **Test it:**
   ```bash
   curl https://tech-in-my-style-python-studio.onrender.com/health
   ```

10. **Update Backend Proxy:**
    - Edit `server/server.js`
    - Update Python Studio proxy target:
      ```javascript
      app.use('/api/python-studio', createProxyMiddleware({
        target: 'https://tech-in-my-style-python-studio.onrender.com',
        changeOrigin: true,
        pathRewrite: { '^/api/python-studio': '' },
      }));
      ```
    - Commit and push:
      ```bash
      git add server/server.js
      git commit -m "Update Python Studio URL"
      git push
      ```

---

### 4️⃣ Deploy Frontend to Vercel (5 minutes)

1. **Go to [Vercel Dashboard](https://vercel.com/dashboard)**

2. **Click "Add New..." → "Project"**

3. **Import GitHub repository**
   - Select `tech-in-my-style`

4. **Configure:**
   ```
   Framework Preset: Vite
   Root Directory: client
   Build Command: npm run build
   Output Directory: build
   Install Command: npm install
   ```

5. **Add Environment Variables:**
   ```
   VITE_API_URL=https://tech-in-my-style-backend.onrender.com
   VITE_CLIENT_URL=https://your-app.vercel.app
   VITE_GROQ_API_KEY=your-groq-api-key-here
   VITE_GROQ_API_URL=https://api.groq.com/openai/v1/chat/completions
   VITE_GROQ_MODEL=llama-3.3-70b-versatile
   ```

6. **Click "Deploy"**

7. **Wait for build** (2-3 minutes)

8. **Copy your Vercel URL:**
   ```
   https://your-app-name.vercel.app
   ```

---

### 5️⃣ Update URLs (5 minutes)

1. **Update Backend CORS:**
   - Go to Render → Backend Service → Environment
   - Update `CLIENT_URL`:
     ```
     CLIENT_URL=https://your-actual-vercel-url.vercel.app
     ```
   - Click "Save Changes" (auto-redeploys)

2. **Update Frontend API URL (if needed):**
   - Go to Vercel → Project → Settings → Environment Variables
   - Verify `VITE_API_URL` is correct
   - Redeploy if changed

3. **Update server.js CORS (if needed):**
   ```javascript
   const allowedOrigins = [
     'http://localhost:3000',
     process.env.CLIENT_URL,
     'https://your-actual-vercel-url.vercel.app',
   ];
   ```
   - Commit and push if changed

---

### 6️⃣ Configure MongoDB Atlas (2 minutes)

1. **Go to [MongoDB Atlas](https://cloud.mongodb.com)**

2. **Navigate to Network Access**

3. **Click "Add IP Address"**

4. **Select "Allow Access from Anywhere" (0.0.0.0/0)**
   - Or add specific Render IPs

5. **Click "Confirm"**

---

### 7️⃣ Test Everything (10 minutes)

#### Backend Tests:
```bash
# Health check
curl https://tech-in-my-style-backend.onrender.com/api/health

# Register user
curl -X POST https://tech-in-my-style-backend.onrender.com/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"testuser","email":"test@example.com","password":"password123"}'

# Login
curl -X POST https://tech-in-my-style-backend.onrender.com/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'
```

#### Python Studio Tests:
```bash
# Health check
curl https://tech-in-my-style-python-studio.onrender.com/health

# Run code
curl -X POST https://tech-in-my-style-python-studio.onrender.com/run \
  -H "Content-Type: application/json" \
  -d '{"code":"print(2 + 2)"}'
```

#### Frontend Tests:
Open `https://your-app.vercel.app` and test:
- [ ] Homepage loads
- [ ] Register new user
- [ ] Login works
- [ ] Navigate to Courses
- [ ] Open Python course
- [ ] Test theme toggle
- [ ] Check mobile view

---

## 🎯 Quick Reference

### Your Deployed URLs:
```
Frontend:      https://your-app.vercel.app
Backend:       https://tech-in-my-style-backend.onrender.com
Python Studio: https://tech-in-my-style-python-studio.onrender.com
```

### Important Files Created:
- ✅ `client/vercel.json` - Vercel configuration
- ✅ `server/render.yaml` - Backend Render configuration
- ✅ `server/python-studio/render.yaml` - Python Studio configuration

### Cost Summary:
- **Free Tier:** $0/month (with limitations)
- **Recommended:** $14/month (Backend + Python Studio on Starter)
- **Full Production:** $91/month (All services on paid plans)

---

## ⚠️ Common Issues

### Issue: CORS Error
**Fix:** Update `CLIENT_URL` in Render backend environment variables

### Issue: MongoDB Connection Failed
**Fix:** Add 0.0.0.0/0 to MongoDB Atlas Network Access

### Issue: Build Failed on Vercel
**Fix:** Check environment variables have `VITE_` prefix

### Issue: Render Service Sleeping
**Fix:** Upgrade to Starter plan ($7/month) or implement keep-alive

---

## 📞 Need Help?

1. Check `DEPLOYMENT_GUIDE.md` for detailed instructions
2. Check `PROJECT_ANALYSIS_REPORT.md` for project structure
3. Review Render/Vercel logs for errors
4. Check browser console for frontend errors

---

## ✅ Deployment Complete!

Once all steps are done, your application is live and accessible worldwide! 🎉

**Next Steps:**
- Set up custom domain
- Enable analytics
- Monitor performance
- Implement SEO
- Add more features

---

*Quick Checklist Created: April 12, 2026*
