import { Router } from 'express';
import * as User from '../models/user';

export const UserController: Router = Router();

UserController.get('/', User.getAll);
UserController.get('/:id', User.getById);
UserController.post('/create', User.addNewUser);
UserController.delete('/:id', User.deleteById);