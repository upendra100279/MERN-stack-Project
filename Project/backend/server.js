const app = require('./src/app');
const mongoose = require('mongoose');
require('dotenv').config();

let isConnected = false;

async function connectDB() {
  if (isConnected) return;
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      // These options are no longer required in mongoose v6+
      // You can safely remove them, but they won’t break anything
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("✅ Connected to DB");
  } catch (error) {
    console.error("❌ DB Connection failed", error);
  }
}

connectDB();

// ✅ Render needs your app to listen on a port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
