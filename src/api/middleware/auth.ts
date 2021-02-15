import { Request, Response, NextFunction } from 'express';
import jsonwebtoken from 'jsonwebtoken';

export const authToken = (req: Request, res: Response, next: NextFunction) => {
    try {
        const authHeader = req.headers.authorization;
        const jwttoken = authHeader ? authHeader.split(' ')[1] : null;
        if(jwttoken == null) {
            return res.status(401);
        }
        const decoded = jsonwebtoken.verify(jwttoken, process.env.JWT_SECRET as string);
        res.locals.authToken = decoded;
        next();
    } catch (error) {
        error.code = 401;
        next(error);
    }
}