// controllers/note.controller.ts
import { Request, Response } from 'express';
import NoteService from '../services/note.service';

const noteService = new NoteService();

class NoteController {
    static getAllnotes: any;
    async getAllNotes(req: Request, res: Response): Promise<void> {
        const notes = await noteService.getAllNotes();
        res.json(notes);
    }

    async getNoteById(req: Request, res: Response): Promise<void> {
        const noteId = parseInt(req.params.id);
        const note = await noteService.getNoteById(noteId);

        if (note) {
            res.json(note);
        } else {
            res.status(404).json({ message: 'Note not found' });
        }
    }

    async createNote(req: Request, res: Response): Promise<void> {
        const newNote = await noteService.createNote(req.body);
        res.status(201).json(newNote);
    }

    async updateNote(req: Request, res: Response): Promise<void> {
        const noteId = parseInt(req.params.id);
        const updatedNote = await noteService.updateNote(noteId, req.body);

        if (updatedNote) {
            res.json(updatedNote);
        } else {
            res.status(404).json({ message: 'Note not found' });
        }
    }

    async deleteNote(req: Request, res: Response): Promise<void> {
        const noteId = parseInt(req.params.id);
        await noteService.deleteNote(noteId);
        res.json({ message: 'Note deleted successfully' });
    }
}

export default NoteController;
