import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import userRouter from './controllers/user';
import teamRouter from './controllers/team';
import churchRouter from './controllers/church';

const app = express();

app.use(cors());
app.use(morgan('dev'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(teamRouter);
app.use(userRouter);
app.use(churchRouter)

app.get('/', (req, res) => res.send('booo'));

app.all('*', (req, res) => res.send('Route not found'));

export default app;
