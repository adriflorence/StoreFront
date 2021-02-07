import { Application, Router } from 'express';
import { UserController } from './controllers/UserController';
import { ProductController } from './controllers/productController';
import { OrderController } from './controllers/orderController';

export const routes = (app: Application) => {
    app.use('/users', UserController);
    app.use('/products', ProductController)
    app.use('/orders', OrderController)
}