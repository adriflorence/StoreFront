import { Router } from 'express';
import * as Product from '../model/product'

export const ProductController: Router = Router();

ProductController.get('/', Product.getAll);