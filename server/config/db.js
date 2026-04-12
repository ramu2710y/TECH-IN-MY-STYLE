const mongoose = require('mongoose');
const dns = require('dns');
const path = require('path');
const fs = require('fs');

// ───────────────────────────────────────────────
// FORCE GOOGLE / CLOUDFLARE DNS
// This bypasses your ISP/router DNS that blocks MongoDB SRV lookups
// ───────────────────────────────────────────────
dns.setServers(['8.8.8.8', '8.8.4.4', '1.1.1.1']);

// Global flag to track DB mode
let dbMode = 'none'; // 'mongodb' | 'local'
let localDb = null;

const getDbMode = () => dbMode;
const getLocalDb = () => localDb;

// ───────────────────────────────────────────────
// LOCAL JSON DB FALLBACK
// ───────────────────────────────────────────────
const initLocalDb = () => {
  try {
    const low = require('lowdb');
    const FileSync = require('lowdb/adapters/FileSync');

    const dbPath = path.join(__dirname, '../data');
    if (!fs.existsSync(dbPath)) {
      fs.mkdirSync(dbPath, { recursive: true });
    }

    const adapter = new FileSync(path.join(dbPath, 'localdb.json'));
    localDb = low(adapter);
    localDb.defaults({ users: [] }).write();

    dbMode = 'local';
    console.log('💾 Using LOCAL JSON database (data/localdb.json)');
    console.log('   All data will be saved locally on your machine\n');
    return true;
  } catch (err) {
    console.error('❌ Failed to init local DB:', err.message);
    return false;
  }
};

// ───────────────────────────────────────────────
// MONGODB CONNECTION (SRV → Direct → Local)
// ───────────────────────────────────────────────
const connectDB = async () => {
  mongoose.set('strictQuery', false);

  const mongoOptions = {
    serverSelectionTimeoutMS: 10000,
    socketTimeoutMS: 20000,
    connectTimeoutMS: 10000,
    family: 4,
  };

  // ── Attempt 1: SRV URI ──
  console.log('🔄 Attempting MongoDB Atlas connection (Google DNS)...');
  try {
    await mongoose.connect(process.env.MONGODB_URI, mongoOptions);
    dbMode = 'mongodb';
    console.log(`✅ MongoDB Atlas Connected: ${mongoose.connection.host}`);
    console.log(`📊 Database: ${mongoose.connection.name}\n`);
    return;
  } catch (err1) {
    console.warn(`⚠️  SRV attempt failed: ${err1.message}`);
  }

  // ── Attempt 2: Direct shard connection (no SRV lookup needed) ──
  console.log('🔁 Trying direct shard connection...');
  const directUri = `mongodb://tech_trail_main:tech_in_my_style@` +
    `ac-eliojt3-shard-00-00.jhepdoh.mongodb.net:27017,` +
    `ac-eliojt3-shard-00-01.jhepdoh.mongodb.net:27017,` +
    `ac-eliojt3-shard-00-02.jhepdoh.mongodb.net:27017` +
    `/tech_in_my_style?ssl=true&authSource=admin&replicaSet=atlas-cw9qt9-shard-0&retryWrites=true&w=majority`;

  try {
    await mongoose.connect(directUri, mongoOptions);
    dbMode = 'mongodb';
    console.log(`✅ MongoDB Connected (direct): ${mongoose.connection.host}`);
    console.log(`📊 Database: ${mongoose.connection.name}\n`);
    return;
  } catch (err2) {
    console.warn(`⚠️  Direct attempt failed: ${err2.message}`);
  }

  // ── Attempt 3: Local JSON fallback ──
  console.log('🔁 Switching to LOCAL database mode...\n');
  initLocalDb();
};

module.exports = connectDB;
module.exports.getDbMode = getDbMode;
module.exports.getLocalDb = getLocalDb;
