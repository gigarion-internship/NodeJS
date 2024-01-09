// src/routes/note.route.ts
import express from 'express';
import NoteController from '../controllers/note.controller';

const router = express.Router();
const noteController = new NoteController();

router.get('/notes', noteController.getAllNotes.bind(noteController));
router.get('/notes/:id', noteController.getNoteById.bind(noteController));
router.post('/notes', noteController.createNote.bind(noteController));
router.put('/notes/:id', noteController.updateNote.bind(noteController));
router.delete('/notes/:id', noteController.deleteNote.bind(noteController));

export default router;
