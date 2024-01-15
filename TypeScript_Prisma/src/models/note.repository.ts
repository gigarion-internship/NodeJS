import { PrismaClient, Note as PrismaNote } from '@prisma/client';
import { Note, CreateNoteSchema } from '../types/note.type';

const prisma = new PrismaClient();

const target = 'note';

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

function mapPrismaNoteToNote(prismaNote: PrismaNote): Note {
    return {
        id: prismaNote.id,
        createdAt: prismaNote.createdAt,
        title: prismaNote.title || undefined,
        description: prismaNote.description || undefined,
    };
}
