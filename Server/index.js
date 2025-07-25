require('dotenv').config(); // Loads from .env in local

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const TodoModel = require('./Models/Todo');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

// 🔁 Use env MONGO_URL if defined, else fallback depending on environment
const IS_K8S = process.env.K8S === 'true';

const MONGO_URL = process.env.MONGO_URL || 
  (IS_K8S 
    ? 'mongodb://mongo.my-namespace.svc.cluster.local:27017/TodoList' 
    : 'mongodb://localhost:27017/TodoList');

console.log(`📡 Using MongoDB URL: ${MONGO_URL}`);

// Connect to MongoDB with retry logic
const connectWithRetry = () => {
  console.log('📡 Attempting MongoDB connection...');
  mongoose.connect(MONGO_URL)
    .then(() => {
      console.log("✅ Connected to MongoDB");

      app.listen(PORT, () => {
        console.log(`🚀 Server is running on port ${PORT}`);
      });
    })
    .catch((err) => {
      console.error("❌ MongoDB connection error:", err.message);
      console.log('🔁 Retrying in 5 seconds...');
      setTimeout(connectWithRetry, 5000);
    });
};

connectWithRetry();

// Routes...
