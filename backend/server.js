const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// قراءة الإعدادات من متغيرات البيئة (مهم جداً للـ DevOps)
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/devopsdb';

// الاتصال بقاعدة البيانات
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB successfully!'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

// API Endpoint بسيط
app.get('/api/status', (req, res) => {
  res.json({ 
      message: 'Hello from the Backend!',
      databaseConnected: mongoose.connection.readyState === 1
  });
});

app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});