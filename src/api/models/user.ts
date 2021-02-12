import { Response, Request } from 'express';
import { database } from '../database/database';

// create new user
export const addNewUser = (req: Request, res: Response) => {
    const { firstName, lastName, password } = req.body;
    database.query(`INSERT INTO users (firstName, lastName, password) VALUES($1, $2, $3) RETURNING *`,
        [firstName, lastName, password], (error, user) => {
        if (error) {
            throw error
        } else {
            res.json(user);
        }
    });
}

// get all users
export const getAll = (req: Request, res: Response) => {
    database.query(`SELECT * FROM users ORDER BY id ASC;`, (error, users) => {
        if (error) {
            throw error
        } else {
            res.json(users);
        }
    });
};

// get user by id
export const getById = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    database.query(`SELECT * FROM users WHERE id = $1`, [id], (error, user) => {
        if (error) {
            throw error
        } else {
            res.json(user);
        }
    });
}

// delete user by id
export const deleteById = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    database.query(`DELETE FROM users WHERE id = $1`, [id], (error, results) => {
        if (error) {
            throw error
        } else {
            res.json("User successfully deleted.");
        }
    });
}