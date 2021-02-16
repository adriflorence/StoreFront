import { Router } from 'express';
import * as User from '../models/user';
import { authToken } from '../middleware/auth';

export const UserController: Router = Router();

UserController.get('/', User.getAll);
UserController.get('/:id', User.getById);
UserController.post('/', authToken, User.addNewUser);
UserController.delete('/:id', authToken, User.deleteById);