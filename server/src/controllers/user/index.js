import express from 'express';
import userController from './userController';
import { validateUserInfo } from '../../middleware/user';

const userRouter = express.Router();

userRouter.post(
  '/user',
  validateUserInfo('email'),
  validateUserInfo('phoneNumber'),
  userController.create
);
userRouter.get('/user/:email', userController.get);

export default userRouter;
