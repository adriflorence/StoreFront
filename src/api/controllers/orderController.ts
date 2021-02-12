import { Router } from 'express';
import * as Order from '../models/order'

export const OrderController: Router = Router();

OrderController.get('/:user_id', Order.getOrderByUserId);