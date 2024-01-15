import express, { Request, Response, NextFunction } from 'express';
import { getAll, getById, create, updateById, deleteById } from '../controllers/note.controller';
import { CreateNoteSchema } from '../types/note.type';
import parseSchema from '../middlewares/parseSchema';

const router = express.Router();
router.get('/', getAll);
router.get('/:id', getById);
router.post('/', parseSchema(CreateNoteSchema), create);

// Apply the parseSchema middleware to validate the request body
router.put('/:id', parseSchema(CreateNoteSchema), updateById);
router.delete('/:id', deleteById);

export default router;
