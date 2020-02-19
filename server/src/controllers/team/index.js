import express from 'express';
import teamController from './teamController';

const teamRouter = express.Router();

teamRouter.post('/team', teamController.create);

export default teamRouter;
