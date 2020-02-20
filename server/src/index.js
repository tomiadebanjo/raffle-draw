import http from 'http';
import app from './app';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const server = http.createServer(app);
const port = process.env.PORT || 8900;
const DATABASE_URL = process.env.DATABASE_URL;

const connect = () => {
  return mongoose.connect(DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
};

connect()
  .then(async () => {
    server.listen(port, () => console.log(`server listening on port ${port}`));
  })
  .catch(err => console.log(err, '+++ error +++'));
