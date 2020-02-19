import express from 'express';
import churchController from './churchController';

const churchRouter = express.Router();

churchRouter.post('/church', churchController.create);
churchRouter.get('/church', churchController.get);

export default churchRouter;
