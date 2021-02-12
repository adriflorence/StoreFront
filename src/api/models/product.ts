import { Response, Request } from 'express';
import { database } from '../database/database';

export const getAll = (req: Request, res: Response) => {
    database.query(`SELECT * FROM products ORDER BY id ASC;`, (error, results) => {
        if (error) {
            throw error
        } else {
            res.json(results);
        }
    });
};

export const getById = (req: Request, res: Response) => {
    console.log('product returned by id');
}

export const create = (req: Request, res: Response) => {
    console.log('product succesfully saved');
}

export const deleteById = (req: Request, res: Response) => {
    console.log('product succesfully deleted');
}