const jwt = require('jsonwebtoken');
const { getDbMode, getLocalDb } = require('../config/db');

const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      const mode = getDbMode();

      if (mode === 'local') {
        const db = getLocalDb();
        const user = db.get('users').find({ _id: decoded.id }).value();
        if (!user) return res.status(401).json({ message: 'Not authorized, user not found' });
        // Attach user without password
        const { password, ...safeUser } = user;
        req.user = safeUser;
      } else {
        const User = require('../models/User');
        req.user = await User.findById(decoded.id).select('-password');
      }

      return next();
    } catch (error) {
      console.error('Auth middleware error:', error.message);
      return res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    return res.status(401).json({ message: 'Not authorized, no token' });
  }
};

module.exports = { protect };
