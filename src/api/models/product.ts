import { Response, Request } from 'express';
import { database } from '../database/database';


// create new product
export const create = (req: Request, res: Response) => {
    const { name, price, category_id } = req.body;
    database.query(`INSERT INTO products (name, price, category_id) VALUES($1, $2, $3) RETURNING *`,
        [name, price, category_id], (error, product) => {
        if (error) {
            throw error
        } else {
            res.json(product);
        }
    });
}

// get all products
export const getAll = (req: Request, res: Response) => {
    database.query(`SELECT * FROM products ORDER BY id ASC;`, (error, products) => {
        if (error) {
            throw error
        } else {
            res.json(products);
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

export const getLastProductIdFromDatabase = (req: Request, res: Response) => {
    database.query(`SELECT id FROM products ORDER BY id DESC LIMIT 1`, (error, product) => {
        if (error) {
            throw error
        } else {
            // return largest (latest) product id from database
            res.json(product.rows[0].id);
        }
    });
}

// delete product by id
export const deleteById = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    database.query(`DELETE FROM products WHERE id = $1`, [id], (error) => {
        if (error) {
            throw error
        } else {
            res.json("Product successfully deleted.");
        }
    });
}