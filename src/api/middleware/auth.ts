import { Request, Response, NextFunction } from 'express';
import jsonwebtoken from 'jsonwebtoken';

export const authToken = (req: Request, res: Response, next: NextFunction) => {
    try {
        // TODO
        next();
    } catch (error) {
        error.code = 401;
        next(error);
    }
}