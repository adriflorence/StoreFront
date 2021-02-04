import { Application, Router } from 'express';
import { UserController } from './controllers/UserController';

export const routes = (app: Application) => {
    app.use('/users', UserController);
}