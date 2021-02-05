import { Response, Request } from 'express';

export const getAll = (req: Request, res: Response) => {
    console.log('all products are succesfully returned');
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