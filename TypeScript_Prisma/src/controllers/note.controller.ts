
import { Request, Response } from 'express';
import { NoteModel } from '../repositories/note.repository';
import { CreateNoteSchema, Note } from '../types/note.type';

export const getAll = async (req: Request, res: Response): Promise<void> => {
    try {
        const data: Note[] = await NoteModel.getAll();
        res.status(200).json({ data });
    } catch (error) {
        res.status(500).json({ status: 'Internal Server Error', data: { error } });
    }
};

export const getById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const data: Note | null = await NoteModel.getById(id);
        res.status(200).json({ status: 'OK', data });
    } catch (error) {
        res.status(500).json({ status: 'Internal Server Error', data: { error } });
    }
};


export const create = async (req: Request, res: Response): Promise<void> => {
    try {
        const data: Note = await NoteModel.create(req.body);
        res.status(201).json({ status: 'Created', data });
    } catch (error) {
        res.status(500).json({ status: 'Internal Server Error', data: { error } });
    }
};

export const updateById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const data: Note = await NoteModel.updateById(id, req.body);
        res.status(200).json({ status: 'OK', data });
    } catch (error) {
        res.status(500).json({ status: 'Internal Server Error', data: { error } });
    }
};

export const deleteById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const data: Note = await NoteModel.deleteById(id);
        res.status(200).json({ status: 'OK', data });
    } catch (error) {
        res.status(500).json({ status: 'Internal Server Error', data: { error } });
    }
};
