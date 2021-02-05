import { Router } from 'express';
import * as Product from '../model/product'

export const ProductController: Router = Router();

ProductController.get('/', Product.getAll);
ProductController.get('/:id', Product.getById);
ProductController.post('/users/create', Product.create);
ProductController.delete('/users/:id', Product.deleteById);