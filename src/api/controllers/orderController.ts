import { Router } from 'express';
import * as Order from '../model/order'

export const OrderController: Router = Router();

OrderController.get('/:user_id', Order.getOrderByUserId);