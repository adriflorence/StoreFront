import { Response, Request } from 'express';
import { database } from '../database/database';

// get orders by user id
export const getOrdersByUserId = (req: Request, res: Response) => {
    const user_id = parseInt(req.params.user_id);
    database.query(`SELECT * FROM orders WHERE user_id = $1`, [user_id], (error, orders) => {
        if (error) {
            throw error
        } else {
            res.json(orders);
        }
    });
};