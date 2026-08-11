
import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import contactRoutes from './routes/contactRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/g2gtech';
mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.use(bodyParser.json());
app.use('/api/contact', contactRoutes);

app.get('/', (req, res) => {
  res.send('Backend for G2G Tech is running.');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
