import { Response, Request } from 'express';
import { database } from '../database/database';

export const getAll = (req: Request, res: Response) => {
    database.query(`SELECT * FROM users ORDER BY id ASC;`, (error, results) => {
        if (error) {
            throw error
        } else {
            console.log('all users succesfully returned');
        }
    });
};

export const getById = (req: Request, res: Response) => {
    console.log('user returned by id');
}

export const create = (req: Request, res: Response) => {
    console.log('user saved');
}

export const deleteById = (req: Request, res: Response) => {
    console.log('user deleted');
}