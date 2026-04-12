# 🚀 TECH-IN-MY-STYLE - Complete Deployment Guide

**Frontend:** Vercel  
**Backend:** Render  
**Python Studio:** Render (Docker)

---

## 📋 Table of Contents
1. [Prerequisites](#prerequisites)
2. [Architecture Overview](#architecture-overview)
3. [Backend Deployment (Render)](#backend-deployment-render)
4. [Python Studio Deployment (Render Docker)](#python-studio-deployment-render-docker)
5. [Frontend Deployment (Vercel)](#frontend-deployment-vercel)
6. [Post-Deployment Configuration](#post-deployment-configuration)
7. [Testing & Verification](#testing--verification)
8. [Troubleshooting](#troubleshooting)

---

## 1. Prerequisites

### Required Accounts
- ✅ [GitHub Account](https://github.com) - For code repository
- ✅ [Vercel Account](https://vercel.com) - For frontend hosting
- ✅ [Render Account](https://render.com) - For backend hosting
- ✅ [MongoDB Atlas Account](https://www.mongodb.com/cloud/atlas) - Already configured

### Required Tools
- ✅ Git installed
- ✅ Node.js installed (v18+)
- ✅ Code editor (VS Code recommended)

---

## 2. Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                    DEPLOYMENT ARCHITECTURE                   │
└─────────────────────────────────────────────────────────────┘

┌──────────────┐         ┌──────────────┐         ┌──────────────┐
│   VERCEL     │         │   RENDER     │         │   RENDER     │
│  (Frontend)  │────────▶│  (Backend)   │────────▶│ (Python API) │
│              │  HTTPS  │              │  HTTPS  │              │
│ React + Vite │         │  Express.js  │         │   FastAPI    │
│              │         │              │         │   (Docker)   │
└──────────────┘         └──────────────┘         └──────────────┘
       │                        │                        │
       │                        │                        │
       ▼                        ▼                        ▼
  Static CDN            MongoDB Atlas           Isolated Python
                        (Database)              Execution Env
```

### Services Breakdown

| Service | Platform | Purpose | Port |
|---------|----------|---------|------|
| **Frontend** | Vercel | React app, static hosting | 443 (HTTPS) |
| **Backend API** | Render | Express.js, Auth, Proxy | 5000 → 443 |
| **Python Studio** | Render (Docker) | Python code execution | 8000 → 443 |
| **Database** | MongoDB Atlas | User data, courses | 27017 |

---

## 3. Backend Deployment (Render)

### Step 1: Prepare Backend for Deployment

#### 3.1 Create `render.yaml` in server directory

Create `server/render.yaml`:

```yaml
services:
  - type: web
    name: tech-in-my-style-backend
    env: node
    region: oregon
    plan: starter
    buildCommand: npm install
    startCommand: npm start
    envVars:
      - key: NODE_ENV
        value: production
      - key: PORT
        value: 5000
      - key: MONGODB_URI
        sync: false
      - key: JWT_SECRET
        sync: false
      - key: JWT_EXPIRE
        value: 7d
      - key: EMAIL_HOST
        value: smtp.gmail.com
      - key: EMAIL_PORT
        value: 587
      - key: EMAIL_USER
        sync: false
      - key: EMAIL_PASSWORD
        sync: false
      - key: EMAIL_FROM
        sync: false
      - key: CLIENT_URL
        sync: false
```

#### 3.2 Update CORS Configuration

Update `server/server.js` CORS section:

```javascript
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:3001',
  'http://localhost:3002',
  'http://127.0.0.1:3000',
  process.env.CLIENT_URL, // Add this for production
  'https://your-app.vercel.app', // Will update after Vercel deployment
];
```

#### 3.3 Add Health Check Endpoint (Already exists ✅)

Your server already has:
```javascript
app.get('/api/health', (req, res) => {
  res.json({
    status: 'Server is running',
    dbMode: getDbMode(),
    timestamp: new Date()
  });
});
```

### Step 2: Deploy to Render

#### Option A: Deploy via Render Dashboard (Recommended)

1. **Push Code to GitHub**
   ```bash
   # Initialize git in root directory
   git init
   git add .
   git commit -m "Initial commit - Ready for deployment"
   
   # Create GitHub repository and push
   git remote add origin https://github.com/YOUR_USERNAME/tech-in-my-style.git
   git branch -M main
   git push -u origin main
   ```

2. **Create New Web Service on Render**
   - Go to [Render Dashboard](https://dashboard.render.com)
   - Click **"New +"** → **"Web Service"**
   - Connect your GitHub repository
   - Select `tech-in-my-style` repository

3. **Configure Service**
   ```
   Name: tech-in-my-style-backend
   Region: Oregon (or closest to you)
   Branch: main
   Root Directory: server
   Environment: Node
   Build Command: npm install
   Start Command: npm start
   Plan: Starter ($7/month) or Free
   ```

4. **Add Environment Variables**
   Click **"Environment"** tab and add:
   
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
   
   ⚠️ **Note:** Update `CLIENT_URL` after Vercel deployment

5. **Deploy**
   - Click **"Create Web Service"**
   - Wait for deployment (3-5 minutes)
   - Note your backend URL: `https://tech-in-my-style-backend.onrender.com`

#### Option B: Deploy via Render Blueprint (render.yaml)

1. Place `render.yaml` in `server/` directory
2. Go to Render Dashboard → **"New +"** → **"Blueprint"**
3. Connect repository and select `server/render.yaml`
4. Add environment variables manually
5. Deploy

### Step 3: Verify Backend Deployment

Test your backend:
```bash
# Health check
curl https://tech-in-my-style-backend.onrender.com/api/health

# Expected response:
{
  "status": "Server is running",
  "dbMode": "mongodb",
  "timestamp": "2026-04-12T..."
}
```

---

## 4. Python Studio Deployment (Render Docker)

### Step 1: Prepare Python Studio

Your Python Studio is already configured with:
- ✅ `Dockerfile`
- ✅ `requirements.txt`
- ✅ `render.yaml`
- ✅ `main.py`

### Step 2: Update render.yaml

Update `server/python-studio/render.yaml`:

```yaml
services:
  - type: web
    name: tech-in-my-style-python-studio
    env: docker
    dockerfilePath: ./Dockerfile
    region: oregon
    plan: starter
    envVars:
      - key: USE_DOCKER
        value: "false"  # Set to false on Render (Docker not available in container)
      - key: EXECUTION_TIMEOUT
        value: "30"  # Reduced for free tier
      - key: PYTHONUNBUFFERED
        value: "1"
```

⚠️ **Important:** Render's Docker environment doesn't support nested Docker containers, so set `USE_DOCKER=false` to use direct Python execution.

### Step 3: Deploy Python Studio to Render

1. **Create New Web Service**
   - Go to Render Dashboard
   - Click **"New +"** → **"Web Service"**
   - Connect your GitHub repository
   - Select `tech-in-my-style` repository

2. **Configure Service**
   ```
   Name: tech-in-my-style-python-studio
   Region: Oregon
   Branch: main
   Root Directory: server/python-studio
   Environment: Docker
   Dockerfile Path: ./Dockerfile
   Plan: Starter or Free
   ```

3. **Add Environment Variables**
   ```
   USE_DOCKER=false
   EXECUTION_TIMEOUT=30
   PYTHONUNBUFFERED=1
   ```

4. **Deploy**
   - Click **"Create Web Service"**
   - Wait for Docker build (5-10 minutes)
   - Note your Python Studio URL: `https://tech-in-my-style-python-studio.onrender.com`

### Step 4: Update Backend Proxy

Update `server/server.js` to point to your Python Studio URL:

```javascript
// Proxy Python Studio API to FastAPI backend
app.use('/api/python-studio', createProxyMiddleware({
  target: 'https://tech-in-my-style-python-studio.onrender.com',
  changeOrigin: true,
  pathRewrite: { '^/api/python-studio': '' },
}));
```

Commit and push changes:
```bash
git add server/server.js
git commit -m "Update Python Studio proxy URL"
git push
```

Render will auto-redeploy your backend.

### Step 5: Verify Python Studio

Test Python Studio:
```bash
# Health check
curl https://tech-in-my-style-python-studio.onrender.com/health

# Test code execution
curl -X POST https://tech-in-my-style-python-studio.onrender.com/run \
  -H "Content-Type: application/json" \
  -d '{"code":"print(\"Hello from Python Studio!\")"}'
```

---

## 5. Frontend Deployment (Vercel)

### Step 1: Prepare Frontend for Deployment

#### 5.1 Create `vercel.json` in client directory

Create `client/vercel.json`:

```json
{
  "version": 2,
  "buildCommand": "npm run build",
  "outputDirectory": "build",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

#### 5.2 Update Environment Variables

Create `client/.env.production`:

```env
VITE_API_URL=https://tech-in-my-style-backend.onrender.com
VITE_CLIENT_URL=https://your-app.vercel.app
VITE_GROQ_API_KEY=your-groq-api-key-here
VITE_GROQ_API_URL=https://api.groq.com/openai/v1/chat/completions
VITE_GROQ_MODEL=llama-3.3-70b-versatile
```

⚠️ **Security Note:** Don't commit `.env.production` to Git. Add it to `.gitignore`.

#### 5.3 Update .gitignore

Add to `client/.gitignore`:
```
.env.production
.env.local
```

### Step 2: Deploy to Vercel

#### Option A: Deploy via Vercel Dashboard (Recommended)

1. **Push Code to GitHub** (if not already done)
   ```bash
   git add .
   git commit -m "Add Vercel configuration"
   git push
   ```

2. **Import Project to Vercel**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click **"Add New..."** → **"Project"**
   - Import your GitHub repository
   - Select `tech-in-my-style`

3. **Configure Project**
   ```
   Framework Preset: Vite
   Root Directory: client
   Build Command: npm run build
   Output Directory: build
   Install Command: npm install
   ```

4. **Add Environment Variables**
   Click **"Environment Variables"** and add:
   
   ```
   VITE_API_URL=https://tech-in-my-style-backend.onrender.com
   VITE_CLIENT_URL=https://your-app.vercel.app
   VITE_GROQ_API_KEY=your-groq-api-key-here
   VITE_GROQ_API_URL=https://api.groq.com/openai/v1/chat/completions
   VITE_GROQ_MODEL=llama-3.3-70b-versatile
   ```

5. **Deploy**
   - Click **"Deploy"**
   - Wait for build (2-3 minutes)
   - Your app will be live at: `https://your-app.vercel.app`

6. **Update Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

#### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy from client directory
cd client
vercel

# Follow prompts:
# - Link to existing project? No
# - Project name: tech-in-my-style
# - Directory: ./
# - Override settings? Yes
# - Build Command: npm run build
# - Output Directory: build

# Deploy to production
vercel --prod
```

### Step 3: Update Backend CORS

After getting your Vercel URL, update backend CORS:

1. Go to Render Dashboard → Your Backend Service
2. Update `CLIENT_URL` environment variable:
   ```
   CLIENT_URL=https://your-app.vercel.app
   ```

3. Update `server/server.js` (if needed):
   ```javascript
   const allowedOrigins = [
     'http://localhost:3000',
     process.env.CLIENT_URL,
     'https://your-app.vercel.app', // Your actual Vercel URL
   ];
   ```

4. Commit and push:
   ```bash
   git add server/server.js
   git commit -m "Update CORS for production"
   git push
   ```

---

## 6. Post-Deployment Configuration

### 6.1 Update All URLs

Create a checklist and update:

| Service | URL | Update In |
|---------|-----|-----------|
| Frontend | `https://your-app.vercel.app` | Backend CORS, CLIENT_URL |
| Backend | `https://tech-in-my-style-backend.onrender.com` | Frontend VITE_API_URL |
| Python Studio | `https://tech-in-my-style-python-studio.onrender.com` | Backend proxy |

### 6.2 Configure MongoDB Atlas

1. Go to [MongoDB Atlas](https://cloud.mongodb.com)
2. Navigate to **Network Access**
3. Add Render IP addresses:
   - Click **"Add IP Address"**
   - Select **"Allow Access from Anywhere"** (0.0.0.0/0)
   - Or add specific Render IPs from [Render Docs](https://render.com/docs/static-outbound-ip-addresses)

### 6.3 Configure Email Service

Your Gmail SMTP is already configured. Ensure:
- ✅ 2-Factor Authentication enabled on Gmail
- ✅ App-specific password generated
- ✅ "Less secure app access" NOT needed (using app password)

### 6.4 Test Email Functionality

```bash
# Test forgot password endpoint
curl -X POST https://tech-in-my-style-backend.onrender.com/api/auth/forgot-password \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}'
```

---

## 7. Testing & Verification

### 7.1 Backend Health Checks

```bash
# Test backend health
curl https://tech-in-my-style-backend.onrender.com/api/health

# Test registration
curl -X POST https://tech-in-my-style-backend.onrender.com/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "testuser",
    "email": "test@example.com",
    "password": "password123"
  }'

# Test login
curl -X POST https://tech-in-my-style-backend.onrender.com/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123"
  }'
```

### 7.2 Python Studio Health Checks

```bash
# Test Python Studio health
curl https://tech-in-my-style-python-studio.onrender.com/health

# Test code execution
curl -X POST https://tech-in-my-style-python-studio.onrender.com/run \
  -H "Content-Type: application/json" \
  -d '{"code":"print(2 + 2)"}'

# Test AI assist
curl -X POST https://tech-in-my-style-python-studio.onrender.com/ai-assist \
  -H "Content-Type: application/json" \
  -d '{
    "mode": "explain",
    "code": "print(\"hello\")",
    "prompt": "Explain this code"
  }'
```

### 7.3 Frontend Testing

Open your Vercel URL and test:

- [ ] Homepage loads
- [ ] User registration works
- [ ] User login works
- [ ] Protected routes redirect to login
- [ ] All course modules load
- [ ] Python course accessible
- [ ] Theme toggle works
- [ ] Responsive design works
- [ ] Python Studio (if integrated) works

### 7.4 Integration Testing

Test complete user flow:

1. **Registration Flow**
   - Register new user
   - Check email for verification (if implemented)
   - Login with credentials

2. **Course Access**
   - Navigate to Courses page
   - Click on Python course
   - Verify course content loads

3. **Python Studio** (if integrated)
   - Navigate to Python playground
   - Write and execute code
   - Test AI assist features

---

## 8. Troubleshooting

### Common Issues & Solutions

#### Issue 1: CORS Errors

**Symptom:** Browser console shows CORS errors

**Solution:**
```javascript
// In server/server.js, ensure CLIENT_URL is correct
const allowedOrigins = [
  process.env.CLIENT_URL,
  'https://your-actual-vercel-url.vercel.app',
];
```

Update environment variable on Render and redeploy.

#### Issue 2: MongoDB Connection Failed

**Symptom:** Backend logs show MongoDB connection errors

**Solution:**
1. Check MongoDB Atlas Network Access (allow Render IPs)
2. Verify MONGODB_URI in Render environment variables
3. Check MongoDB Atlas cluster is running
4. Fallback to local JSON database will activate automatically

#### Issue 3: Build Fails on Vercel

**Symptom:** Vercel build fails with module errors

**Solution:**
```bash
# Ensure all dependencies are in package.json
cd client
npm install
npm run build  # Test locally first

# If successful, commit and push
git add package.json package-lock.json
git commit -m "Fix dependencies"
git push
```

#### Issue 4: Environment Variables Not Working

**Symptom:** App can't connect to backend

**Solution:**
1. Verify all `VITE_` prefixed variables in Vercel
2. Redeploy after adding variables
3. Check browser console for actual API URL being used

#### Issue 5: Python Studio Timeout

**Symptom:** Code execution times out

**Solution:**
1. Reduce `EXECUTION_TIMEOUT` to 30 seconds
2. Optimize code execution
3. Consider upgrading Render plan for better performance

#### Issue 6: Render Free Tier Sleep

**Symptom:** First request takes 30+ seconds

**Solution:**
- Render free tier services sleep after 15 minutes of inactivity
- First request wakes the service (cold start)
- Consider upgrading to Starter plan ($7/month) for always-on service
- Or implement a keep-alive ping service

---

## 9. Monitoring & Maintenance

### 9.1 Set Up Monitoring

**Render Monitoring:**
- Go to each service → Metrics tab
- Monitor CPU, Memory, Response times
- Set up alerts for downtime

**Vercel Analytics:**
- Enable Vercel Analytics in project settings
- Monitor page views, performance, errors

### 9.2 Logging

**Backend Logs:**
```bash
# View logs on Render
# Go to Service → Logs tab
# Or use Render CLI:
render logs -s tech-in-my-style-backend
```

**Frontend Logs:**
```bash
# View deployment logs on Vercel
# Go to Deployments → Select deployment → View logs
```

### 9.3 Backup Strategy

**Database Backup:**
- MongoDB Atlas automatically backs up data
- Configure backup schedule in Atlas dashboard
- Export data periodically:
  ```bash
  mongodump --uri="your-mongodb-uri"
  ```

**Code Backup:**
- GitHub repository is your primary backup
- Tag releases:
  ```bash
  git tag -a v1.0.0 -m "Production release v1.0.0"
  git push origin v1.0.0
  ```

---

## 10. Deployment Checklist

### Pre-Deployment
- [ ] Code pushed to GitHub
- [ ] All tests passing locally
- [ ] Environment variables documented
- [ ] MongoDB Atlas configured
- [ ] Email service tested

### Backend Deployment
- [ ] Render service created
- [ ] Environment variables added
- [ ] Service deployed successfully
- [ ] Health check endpoint working
- [ ] Database connection verified

### Python Studio Deployment
- [ ] Render Docker service created
- [ ] Environment variables added
- [ ] Service deployed successfully
- [ ] Health check working
- [ ] Code execution tested

### Frontend Deployment
- [ ] Vercel project created
- [ ] Environment variables added
- [ ] Build successful
- [ ] Site accessible
- [ ] All routes working

### Post-Deployment
- [ ] CORS configured correctly
- [ ] All URLs updated
- [ ] Integration testing complete
- [ ] User registration tested
- [ ] User login tested
- [ ] Course modules accessible
- [ ] Python Studio working (if integrated)
- [ ] Email functionality tested
- [ ] Mobile responsiveness verified
- [ ] Performance optimized

---

## 11. Cost Breakdown

### Free Tier (Development/Testing)

| Service | Plan | Cost | Limitations |
|---------|------|------|-------------|
| Vercel | Hobby | $0 | 100GB bandwidth, 6000 build minutes |
| Render Backend | Free | $0 | Sleeps after 15min inactivity, 750 hours/month |
| Render Python Studio | Free | $0 | Sleeps after 15min inactivity, 750 hours/month |
| MongoDB Atlas | Free | $0 | 512MB storage, shared cluster |
| **Total** | | **$0/month** | |

### Production Tier (Recommended)

| Service | Plan | Cost | Benefits |
|---------|------|------|----------|
| Vercel | Pro | $20/month | Unlimited bandwidth, priority support |
| Render Backend | Starter | $7/month | Always on, 512MB RAM, 0.5 CPU |
| Render Python Studio | Starter | $7/month | Always on, 512MB RAM, 0.5 CPU |
| MongoDB Atlas | M10 | $57/month | 10GB storage, dedicated cluster |
| **Total** | | **$91/month** | |

### Budget Option

| Service | Plan | Cost |
|---------|------|------|
| Vercel | Hobby | $0 |
| Render Backend | Starter | $7/month |
| Render Python Studio | Free | $0 |
| MongoDB Atlas | Free | $0 |
| **Total** | | **$7/month** |

---

## 12. Next Steps After Deployment

1. **Custom Domain**
   - Purchase domain (Namecheap, GoDaddy, etc.)
   - Configure DNS in Vercel
   - Add SSL certificate (automatic with Vercel)

2. **Analytics**
   - Set up Google Analytics
   - Enable Vercel Analytics
   - Monitor user behavior

3. **SEO Optimization**
   - Add meta tags
   - Create sitemap.xml
   - Submit to Google Search Console

4. **Performance Optimization**
   - Enable Vercel Edge Network
   - Optimize images
   - Implement lazy loading
   - Code splitting

5. **Security Enhancements**
   - Implement rate limiting
   - Add CAPTCHA to registration
   - Enable HTTPS only
   - Regular security audits

---

## 13. Support & Resources

### Documentation
- [Vercel Docs](https://vercel.com/docs)
- [Render Docs](https://render.com/docs)
- [MongoDB Atlas Docs](https://docs.atlas.mongodb.com)
- [Vite Docs](https://vitejs.dev)
- [Express.js Docs](https://expressjs.com)

### Community
- [Vercel Discord](https://vercel.com/discord)
- [Render Community](https://community.render.com)
- [Stack Overflow](https://stackoverflow.com)

---

## 🎉 Congratulations!

Your TECH-IN-MY-STYLE application is now deployed and accessible worldwide!

**Your Live URLs:**
- 🌐 Frontend: `https://your-app.vercel.app`
- 🔧 Backend: `https://tech-in-my-style-backend.onrender.com`
- 🐍 Python Studio: `https://tech-in-my-style-python-studio.onrender.com`

---

*Deployment Guide Created: April 12, 2026*  
*Last Updated: April 12, 2026*
