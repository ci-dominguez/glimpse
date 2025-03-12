import express from 'express';
import cors from 'cors';
import colorSystemsRouter from './routes/color-systems';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// CORS and middlewares
app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  }),
  express.json()
);

// Route setup
app.use('/api/color-systems', colorSystemsRouter);

app.listen(port, () => {
  console.log(`Running on Port ${port}`);
});
