# ⚡ Quick Deployment Test

## 🎯 Your Live URLs:

✅ **Frontend:** https://tech-in-my-style.vercel.app  
✅ **Backend:** https://tech-in-my-style-backend.onrender.com  
✅ **Python Studio:** https://tech-in-my-style-python-studio.onrender.com

---

## 🧪 Quick Tests (5 minutes)

### 1️⃣ Test Backend (30 seconds)

```bash
curl https://tech-in-my-style-backend.onrender.com/api/health
```

**Expected:** `{"status":"Server is running",...}`

---

### 2️⃣ Test Python Studio (30 seconds)

```bash
curl https://tech-in-my-style-python-studio.onrender.com/health
```

**Expected:** `{"status":"healthy",...}`

---

### 3️⃣ Test Python Execution (30 seconds)

```bash
curl -X POST https://tech-in-my-style-backend.onrender.com/api/python-studio/run \
  -H "Content-Type: application/json" \
  -d '{"code":"print(\"Hello World\")"}'
```

**Expected:** `{"output":"Hello World\n",...}`

---

### 4️⃣ Test Frontend (2 minutes)

1. **Open:** https://tech-in-my-style.vercel.app
2. **Check:** Homepage loads
3. **Press F12:** No red errors in console
4. **Click:** "Courses" → All courses visible
5. **Try:** Register/Login

---

## ✅ If All Tests Pass:

**🎉 Your deployment is successful!**

Your website is:
- ✅ Live and accessible worldwide
- ✅ All services connected
- ✅ Ready for users

---

## ⚠️ If Tests Fail:

### Backend/Python Studio takes 30+ seconds?
**Normal!** Free tier services sleep. First request wakes them up.

### CORS errors in browser console?
**Fix:** Update `CLIENT_URL` in Render backend to:
```
https://tech-in-my-style.vercel.app
```

### Can't login/register?
**Fix:** Check `VITE_API_URL` in Vercel environment variables:
```
https://tech-in-my-style-backend.onrender.com
```

---

## 📚 Detailed Testing

See: `VERIFY_DEPLOYMENT.md` for complete testing guide

---

## 🎯 Quick Checklist

- [ ] Backend health check passes
- [ ] Python Studio health check passes
- [ ] Python code executes
- [ ] Frontend loads
- [ ] No console errors
- [ ] Can register user
- [ ] Can login
- [ ] Courses load

---

**All checked?** Your deployment is complete! 🚀

**Share your website:** https://tech-in-my-style.vercel.app
