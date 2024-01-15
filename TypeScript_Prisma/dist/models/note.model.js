"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteModel = exports.CreateNoteSchema = void 0;
// models/note.model.ts
const client_1 = require("@prisma/client");
const zod_1 = require("zod");
const prisma = new client_1.PrismaClient();
const target = 'note';
exports.CreateNoteSchema = zod_1.z.object({
    id: zod_1.z.string().min(1).max(255).optional(),
    title: zod_1.z.string().min(1).max(255).optional(),
    description: zod_1.z.string().min(0).max(255).optional(),
}).strip();
exports.NoteModel = {
    getAll: () => __awaiter(void 0, void 0, void 0, function* () {
        const notes = yield prisma[target].findMany();
        return notes.map(mapPrismaNoteToNote);
    }),
    getById: (id) => __awaiter(void 0, void 0, void 0, function* () {
        const note = yield prisma[target].findUnique({ where: { id } });
        return note ? mapPrismaNoteToNote(note) : null;
    }),
    create: (data) => __awaiter(void 0, void 0, void 0, function* () {
        const createdNote = yield prisma[target].create({ data });
        return mapPrismaNoteToNote(createdNote);
    }),
    updateById: (id, data) => __awaiter(void 0, void 0, void 0, function* () {
        const updatedNote = yield prisma[target].update({ where: { id }, data });
        return mapPrismaNoteToNote(updatedNote);
    }),
    deleteById: (id) => __awaiter(void 0, void 0, void 0, function* () {
        const deletedNote = yield prisma[target].delete({ where: { id } });
        return mapPrismaNoteToNote(deletedNote);
    }),
};
// Helper function to map Prisma generated type to your custom Note type
function mapPrismaNoteToNote(prismaNote) {
    return {
        id: prismaNote.id,
        createdAt: prismaNote.createdAt,
        title: prismaNote.title || undefined,
        description: prismaNote.description || undefined,
    };
}
