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
userRouter.get('/user', userController.getAllUsers);
userRouter.get('/user/church/:church', userController.getUsersByChurch);
userRouter.get('/user/team/:team', userController.getUsersByTeam);
userRouter.get('/user/winner', userController.randomPicker);
userRouter.get('/user/:email', userController.get);

export default userRouter;
