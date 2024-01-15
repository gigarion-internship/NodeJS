
import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';

const parseSchema = (schema: z.ZodObject<any, any, any>, req: Request, res: Response, next: NextFunction): void => {
    try {
        const result = schema.safeParse(req.body);
        if (!result.success) {
            res.status(400).json({ status: 'Bad Request', data: { error: result.error } });
        } else {
            req.body = result.data;
            next();
        }
    } catch (error) {
        res.status(500).json({ status: 'Internal Server Error', data: { error } });
    }
};


export default parseSchema;
