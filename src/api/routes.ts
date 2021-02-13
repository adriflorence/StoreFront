import { Application, Router } from 'express';
import { UserController } from './controllers/UserController';
import { ProductController } from './controllers/ProductController';
import { OrderController } from './controllers/OrderController';

export const routes = (app: Application) => {
    app.use('/users', UserController);
    app.use('/products', ProductController)
    app.use('/orders', OrderController)
}