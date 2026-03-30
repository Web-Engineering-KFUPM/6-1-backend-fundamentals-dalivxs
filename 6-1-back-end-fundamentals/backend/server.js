import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello from the back-end server');
});

app.get('/about', (req, res) => {
  res.send('This is the about route');
});

app.get('/student', (req, res) => {
  res.json({
    name: 'Aisha',
    major: 'Computer Science'
  });
});

// TODO 4: Start the server on port 3000