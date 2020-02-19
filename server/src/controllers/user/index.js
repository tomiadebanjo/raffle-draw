import express from 'express';
import userController from './userController';

const userRouter = express.Router();

userRouter.post('/user', userController.create);
userRouter.get('/user', userController.get);

export default userRouter;
