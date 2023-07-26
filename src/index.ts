import 'dotenv/config';

import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';

import user from './routes/user.js';

const app = express();

app.use(cors());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  return res.status(200).json({
    status: 'OK',
  });
});
app.use('/user', user);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
