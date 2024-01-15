// models/note.model.ts
import { PrismaClient, Note as PrismaNote } from '@prisma/client';
import { z } from 'zod';

const prisma = new PrismaClient();

const target = 'note';

export type Note = {
    id: string;
    createdAt: Date;
    title?: string;
    description?: string;
}

export const CreateNoteSchema = z.object({
    id: z.string().min(1).max(255).optional(),
    title: z.string().min(1).max(255).optional(),
    description: z.string().min(0).max(255).optional(),
}).strip();

export const NoteModel = {
    getAll: async (): Promise<Note[]> => {
        const notes = await prisma[target].findMany();
        return notes.map(mapPrismaNoteToNote);
    },
    getById: async (id: string): Promise<Note | null> => {
        const note = await prisma[target].findUnique({ where: { id } });
        return note ? mapPrismaNoteToNote(note) : null;
    },
    create: async (data: Note): Promise<Note> => {
        const createdNote = await prisma[target].create({ data });
        return mapPrismaNoteToNote(createdNote);
    },
    updateById: async (id: string, data: Note): Promise<Note> => {
        const updatedNote = await prisma[target].update({ where: { id }, data });
        return mapPrismaNoteToNote(updatedNote);
    },
    deleteById: async (id: string): Promise<Note> => {
        const deletedNote = await prisma[target].delete({ where: { id } });
        return mapPrismaNoteToNote(deletedNote);
    },
};

// Helper function to map Prisma generated type to your custom Note type
function mapPrismaNoteToNote(prismaNote: PrismaNote): Note {
    return {
        id: prismaNote.id,
        createdAt: prismaNote.createdAt,
        title: prismaNote.title || undefined,
        description: prismaNote.description || undefined,
    };
}
