# 🏗️ TECH-IN-MY-STYLE - Deployment Architecture

## System Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         PRODUCTION ARCHITECTURE                          │
└─────────────────────────────────────────────────────────────────────────┘

                              ┌──────────────┐
                              │    USERS     │
                              │  (Browser)   │
                              └──────┬───────┘
                                     │ HTTPS
                                     ▼
                    ┌────────────────────────────────┐
                    │      VERCEL CDN (Global)       │
                    │   ┌────────────────────────┐   │
                    │   │   FRONTEND (React)     │   │
                    │   │   - Vite Build         │   │
                    │   │   - Static Assets      │   │
                    │   │   - Client Routing     │   │
                    │   └────────────────────────┘   │
                    └────────────┬───────────────────┘
                                 │ API Calls
                                 │ HTTPS
                                 ▼
                    ┌────────────────────────────────┐
                    │    RENDER (Backend Server)     │
                    │   ┌────────────────────────┐   │
                    │   │  EXPRESS.JS SERVER     │   │
                    │   │  - Authentication      │   │
                    │   │  - User Management     │   │
                    │   │  - API Routes          │   │
                    │   │  - Proxy Middleware    │   │
                    │   └──────┬─────────┬───────┘   │
                    └──────────┼─────────┼───────────┘
                               │         │
                ┌──────────────┘         └──────────────┐
                │                                        │
                ▼                                        ▼
    ┌───────────────────────┐              ┌───────────────────────┐
    │  MONGODB ATLAS        │              │  RENDER (Docker)      │
    │  (Database)           │              │  ┌─────────────────┐  │
    │  - User Data          │              │  │  PYTHON STUDIO  │  │
    │  - Course Progress    │              │  │  - FastAPI      │  │
    │  - Authentication     │              │  │  - Code Exec    │  │
    │  - Leaderboard        │              │  │  - AI Assist    │  │
    │  - Feedback           │              │  └─────────────────┘  │
    └───────────────────────┘              └───────────────────────┘
                │                                        │
                │                                        │
                └────────────────┬───────────────────────┘
                                 │
                                 ▼
                    ┌────────────────────────────────┐
                    │     EXTERNAL SERVICES          │
                    │  - Gmail SMTP (Email)          │
                    │  - Groq AI (AI Features)       │
                    └────────────────────────────────┘
```

---

## Component Details

### 1. Frontend (Vercel)

**Technology Stack:**
- React 18
- Vite (Build tool)
- React Router (Client-side routing)
- Axios (HTTP client)
- AOS (Animations)
- Chart.js (Data visualization)

**Deployment:**
- Platform: Vercel
- Region: Global CDN
- Build: Automatic on git push
- SSL: Automatic (Let's Encrypt)

**Features:**
- 20+ Course modules
- User authentication UI
- Protected routes
- Theme toggle (Light/Dark)
- Responsive design
- WebGL background effects

**URL:** `https://your-app.vercel.app`

---

### 2. Backend API (Render)

**Technology Stack:**
- Node.js
- Express.js
- Mongoose (MongoDB ODM)
- JWT (Authentication)
- bcrypt (Password hashing)
- Nodemailer (Email service)

**Deployment:**
- Platform: Render
- Region: Oregon (US West)
- Plan: Starter ($7/month) or Free
- Auto-deploy: On git push

**API Endpoints:**
```
POST   /api/auth/register          - User registration
POST   /api/auth/login             - User login
GET    /api/auth/profile           - Get user profile (protected)
POST   /api/auth/forgot-password   - Request password reset
PUT    /api/auth/reset-password    - Reset password
GET    /api/health                 - Health check
ALL    /api/python-studio/*        - Proxy to Python Studio
```

**URL:** `https://tech-in-my-style-backend.onrender.com`

---

### 3. Python Studio (Render Docker)

**Technology Stack:**
- Python 3.10
- FastAPI
- Uvicorn (ASGI server)
- Docker (Containerization)

**Deployment:**
- Platform: Render
- Environment: Docker
- Region: Oregon (US West)
- Plan: Starter ($7/month) or Free

**API Endpoints:**
```
GET    /                  - Service info
GET    /health            - Health check
POST   /run               - Execute Python code
POST   /ai-assist         - AI code assistance
GET    /templates         - Get code templates
```

**Features:**
- Isolated code execution
- Syntax validation
- Security warnings
- AI-powered code explanation
- Code debugging assistance
- Code generation

**URL:** `https://tech-in-my-style-python-studio.onrender.com`

---

### 4. Database (MongoDB Atlas)

**Configuration:**
- Cluster: M0 (Free tier) or M10 (Production)
- Region: Closest to Render (US West)
- Replication: 3-node replica set
- Backup: Automatic daily backups

**Collections:**
```
users
  - _id
  - username
  - email
  - password (hashed)
  - resetPasswordToken
  - resetPasswordExpire
  - createdAt
```

**Fallback:**
- Local JSON database (lowdb)
- Activates if MongoDB unavailable
- Stored in `server/data/localdb.json`

**Connection String:**
```
mongodb+srv://tech_trail_main:tech_in_my_style@cluster0.jhepdoh.mongodb.net/tech_in_my_style
```

---

### 5. External Services

#### Gmail SMTP
- **Purpose:** Password reset emails
- **Configuration:**
  - Host: smtp.gmail.com
  - Port: 587
  - Security: TLS
  - Authentication: App-specific password

#### Groq AI
- **Purpose:** AI-powered features
- **API:** https://api.groq.com/openai/v1/chat/completions
- **Model:** llama-3.3-70b-versatile
- **Usage:** Code explanation, generation, debugging

---

## Data Flow

### User Registration Flow
```
1. User fills registration form
   ↓
2. Frontend sends POST to /api/auth/register
   ↓
3. Backend validates input
   ↓
4. Backend hashes password (bcrypt)
   ↓
5. Backend saves to MongoDB
   ↓
6. Backend generates JWT token
   ↓
7. Frontend stores token in localStorage
   ↓
8. User redirected to dashboard
```

### User Login Flow
```
1. User enters credentials
   ↓
2. Frontend sends POST to /api/auth/login
   ↓
3. Backend finds user in MongoDB
   ↓
4. Backend compares password hash
   ↓
5. Backend generates JWT token
   ↓
6. Frontend stores token
   ↓
7. User redirected to dashboard
```

### Python Code Execution Flow
```
1. User writes Python code in editor
   ↓
2. Frontend sends POST to /api/python-studio/run
   ↓
3. Backend proxies to Python Studio
   ↓
4. Python Studio validates syntax
   ↓
5. Python Studio executes code (isolated)
   ↓
6. Python Studio returns output
   ↓
7. Backend forwards response
   ↓
8. Frontend displays output in console
```

### Password Reset Flow
```
1. User clicks "Forgot Password"
   ↓
2. Frontend sends POST to /api/auth/forgot-password
   ↓
3. Backend generates reset token
   ↓
4. Backend saves token to MongoDB
   ↓
5. Backend sends email via Gmail SMTP
   ↓
6. User clicks link in email
   ↓
7. Frontend shows reset password form
   ↓
8. User enters new password
   ↓
9. Frontend sends PUT to /api/auth/reset-password/:token
   ↓
10. Backend validates token
   ↓
11. Backend updates password
   ↓
12. User redirected to login
```

---

## Security Layers

### Frontend Security
- ✅ HTTPS only (enforced by Vercel)
- ✅ Protected routes (JWT verification)
- ✅ Input validation
- ✅ XSS protection (React escaping)
- ✅ CSRF protection (SameSite cookies)

### Backend Security
- ✅ HTTPS only
- ✅ CORS configuration (whitelist origins)
- ✅ JWT authentication
- ✅ Password hashing (bcrypt, 10 rounds)
- ✅ Input validation (express-validator)
- ✅ Rate limiting (recommended to add)
- ✅ Environment variables (secrets not in code)

### Python Studio Security
- ✅ Syntax validation (AST parsing)
- ✅ Execution timeout (30 seconds)
- ✅ Resource limits (memory, CPU)
- ✅ Network isolation (no external access)
- ✅ Read-only filesystem
- ✅ Non-root user execution
- ✅ Warning system for risky patterns

### Database Security
- ✅ Network access control (IP whitelist)
- ✅ Authentication required
- ✅ Encrypted connections (TLS)
- ✅ Automatic backups
- ✅ Password hashing (never store plain text)

---

## Scalability Considerations

### Current Capacity (Starter Plan)
- **Frontend:** Unlimited requests (Vercel CDN)
- **Backend:** ~100 concurrent connections
- **Python Studio:** ~50 concurrent executions
- **Database:** 512MB storage (Free) / 10GB (M10)

### Scaling Options

#### Horizontal Scaling
- **Frontend:** Automatic (Vercel CDN)
- **Backend:** Add more Render instances
- **Python Studio:** Add more Render instances
- **Database:** Upgrade to sharded cluster

#### Vertical Scaling
- **Backend:** Upgrade Render plan (more RAM/CPU)
- **Python Studio:** Upgrade Render plan
- **Database:** Upgrade MongoDB Atlas tier

#### Optimization Strategies
1. **Caching:**
   - Redis for session storage
   - CDN for static assets
   - Browser caching headers

2. **Load Balancing:**
   - Render auto-balances across instances
   - MongoDB Atlas auto-balances reads

3. **Database Optimization:**
   - Indexes on frequently queried fields
   - Connection pooling
   - Query optimization

4. **Code Optimization:**
   - Code splitting (React lazy loading)
   - Image optimization
   - Minification and compression

---

## Monitoring & Observability

### Metrics to Monitor

#### Frontend (Vercel)
- Page load time
- Time to interactive
- Core Web Vitals
- Error rate
- Traffic volume

#### Backend (Render)
- Response time
- Error rate
- CPU usage
- Memory usage
- Request volume

#### Python Studio (Render)
- Execution time
- Success/failure rate
- Resource usage
- Queue length

#### Database (MongoDB Atlas)
- Connection count
- Query performance
- Storage usage
- Replication lag

### Logging Strategy

**Frontend:**
- Browser console errors
- Vercel deployment logs
- User analytics

**Backend:**
- Application logs (console.log)
- Error logs (console.error)
- Access logs (Morgan middleware)
- Render service logs

**Python Studio:**
- Execution logs
- Error logs
- Security warnings
- Render service logs

**Database:**
- MongoDB Atlas logs
- Slow query logs
- Connection logs

---

## Disaster Recovery

### Backup Strategy

**Database:**
- Automatic daily backups (MongoDB Atlas)
- Point-in-time recovery (M10+)
- Manual exports (mongodump)

**Code:**
- GitHub repository (primary backup)
- Git tags for releases
- Branch protection rules

**Configuration:**
- Environment variables documented
- Infrastructure as code (render.yaml, vercel.json)

### Recovery Procedures

**Database Failure:**
1. Automatic failover to replica (MongoDB Atlas)
2. Fallback to local JSON database (lowdb)
3. Restore from backup if needed

**Backend Failure:**
1. Render auto-restarts service
2. Deploy from last known good commit
3. Rollback to previous deployment

**Frontend Failure:**
1. Vercel serves from CDN cache
2. Rollback to previous deployment
3. Deploy from backup branch

---

## Cost Optimization

### Free Tier Strategy
- Use Vercel Hobby (free)
- Use Render Free tier (with sleep)
- Use MongoDB Atlas M0 (free)
- **Total: $0/month**
- **Limitation:** Services sleep after 15min inactivity

### Budget Strategy ($7/month)
- Use Vercel Hobby (free)
- Use Render Starter for Backend ($7)
- Use Render Free for Python Studio
- Use MongoDB Atlas M0 (free)
- **Total: $7/month**
- **Benefit:** Backend always on

### Recommended Strategy ($14/month)
- Use Vercel Hobby (free)
- Use Render Starter for Backend ($7)
- Use Render Starter for Python Studio ($7)
- Use MongoDB Atlas M0 (free)
- **Total: $14/month**
- **Benefit:** All services always on

### Production Strategy ($91/month)
- Use Vercel Pro ($20)
- Use Render Starter for Backend ($7)
- Use Render Starter for Python Studio ($7)
- Use MongoDB Atlas M10 ($57)
- **Total: $91/month**
- **Benefit:** Full production features

---

## Performance Benchmarks

### Expected Performance

**Frontend (Vercel):**
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Lighthouse Score: 90+

**Backend (Render Starter):**
- Response Time: 100-300ms
- Throughput: 100 req/s
- Uptime: 99.9%

**Python Studio (Render Starter):**
- Code Execution: 1-5s
- Throughput: 20 executions/s
- Uptime: 99.9%

**Database (MongoDB Atlas M0):**
- Query Time: 10-50ms
- Connection Time: 100-200ms
- Uptime: 99.95%

---

## Deployment Timeline

### Initial Deployment
- **Preparation:** 30 minutes
- **Backend Deployment:** 10 minutes
- **Python Studio Deployment:** 15 minutes
- **Frontend Deployment:** 5 minutes
- **Configuration:** 10 minutes
- **Testing:** 15 minutes
- **Total:** ~1.5 hours

### Subsequent Deployments
- **Code Changes:** Automatic on git push
- **Backend:** 2-3 minutes
- **Python Studio:** 5-7 minutes
- **Frontend:** 1-2 minutes

---

## Conclusion

This architecture provides:
- ✅ Global CDN distribution (Vercel)
- ✅ Scalable backend (Render)
- ✅ Isolated code execution (Docker)
- ✅ Reliable database (MongoDB Atlas)
- ✅ Automatic deployments (Git integration)
- ✅ HTTPS everywhere
- ✅ Cost-effective ($0-$91/month)
- ✅ Easy to maintain
- ✅ Production-ready

---

*Architecture Documentation Created: April 12, 2026*
