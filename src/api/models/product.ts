import { Response, Request } from 'express';
import { database } from '../database/database';


// create new product
export const create = (req: Request, res: Response) => {
    const { name, price, category_id } = req.body;
    database.query(`INSERT INTO products (name, price, category_id) VALUES($1, $2, $3) RETURNING *`,
        [name, price, category_id], (error, user) => {
        if (error) {
            throw error
        } else {
            res.json(user);
        }
    });
}

// get all products
export const getAll = (req: Request, res: Response) => {
    database.query(`SELECT * FROM products ORDER BY id ASC;`, (error, results) => {
        if (error) {
            throw error
        } else {
            res.json(results);
        }
    });
};

// get product by id
export const getById = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    database.query(`SELECT * FROM products WHERE id = $1`, [id], (error, product) => {
        if (error) {
            throw error
        } else {
            res.json(product);
        }
    });
}

// delete product by id
export const deleteById = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    database.query(`DELETE FROM users WHERE id = $1`, [id], (error, results) => {
        if (error) {
            throw error
        } else {
            res.json("Product successfully deleted.");
        }
    });
}