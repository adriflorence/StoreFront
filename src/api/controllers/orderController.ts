import { Router } from 'express';
import * as Order from '../models/order'

export const OrderController: Router = Router();

OrderController.get('/:ud', Order.getOrderById)
OrderController.get('/:user_id', Order.getOrdersByUserId);