import { Router } from 'express';
import * as Product from '../models/product'

export const ProductController: Router = Router();

ProductController.get('/', Product.getAll);
ProductController.get('/:id', Product.getById);
ProductController.post('/create', Product.create);
ProductController.delete('/:id', Product.deleteById);