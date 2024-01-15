import express, { Request, Response, NextFunction } from 'express';
import { getAll1, getById, create, updateById, deleteById } from '../controllers/note.controller';
import { CreateNoteSchema } from '../models/note.model';
import parseSchema from '../middlewares/parseSchema';

const router = express.Router();

router.get('/', getAll1);

router.get('/:id', getById);

// Use parseSchema middleware before the create and updateById handlers
router.post('/', create);
router.put('/:id', updateById);

router.delete('/:id', deleteById);

export default router;
