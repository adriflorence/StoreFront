import { Application, Router } from 'express';
import { UserController } from './controllers/UserController';
import { ProductController } from './controllers/productController';

export const routes = (app: Application) => {
    app.use('/users', UserController);
    app.use('products', ProductController)
}