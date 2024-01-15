import express, { Request, Response, NextFunction } from 'express';
import { getAll, getById, create, updateById, deleteById } from '../controllers/note.controller';
import { CreateNoteSchema } from '../types/note.type';
import parseSchema from '../middlewares/parseSchema';

const router = express.Router();
router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.put('/:id', updateById);
router.delete('/:id', deleteById);

export default router;
