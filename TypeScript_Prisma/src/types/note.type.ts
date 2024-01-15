import { z } from 'zod';

export type Note = {
    id: string;
    createdAt: Date;
    title?: string;
    description?: string;
};

export const CreateNoteSchema = z.object({
    id: z.string().min(1).max(255).optional(),
    title: z.string().min(1).max(255).optional(),
    description: z.string().min(0).max(255).optional(),
}).strip();
