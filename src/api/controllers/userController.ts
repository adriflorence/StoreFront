
import { Router } from 'express';
import * as User from '../model/user';

export const UserController: Router = Router();

UserController.get('/', User.getAll);
UserController.get('/:id', User.getById);
UserController.post('/users/create', User.create);
UserController.delete('/users/:id', User.deleteById);