import http from 'http';
import app from './app';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const server = http.createServer(app);
const port = process.env.PORT || 8900;

const connect = () => {
  return mongoose.connect(
    'mongodb+srv://raffle-tom:raffle-tom-pass123@clusterraffle-edtap.mongodb.net/test?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  );
};

connect()
  .then(async () => {
    server.listen(port, () => console.log(`server listening on port ${port}`));
  })
  .catch(err => console.log(err, '+++ error +++'));
