import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import apiRouter from './routes/api.js';

const app = express();
console.log(process.env.GMAIL_USER)

app.use(cors({
  origin: 'http://localhost:3030',
  methods: ['POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());
app.use('/api', apiRouter);

app.options('*', (req, res) => {
  res.header('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.status(204).end();
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('CORS configured for:', 'http://localhost:3030');
});