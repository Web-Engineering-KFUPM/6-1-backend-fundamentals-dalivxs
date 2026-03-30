import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello from the back-end server');
});

// TODO 6: Create the "/about" route



// TODO 7: Create the "/student" route



// TODO 4: Start the server on port 3000
