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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// services/user.service.ts
const moment_1 = __importDefault(require("moment"));
class NoteService {
    constructor() {
        this.notes = [];
    }
    getAllNotes() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.notes;
        });
    }
    getNoteById(noteId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.notes.find((u) => u.id === noteId);
        });
    }
    createNote(newNote) {
        return __awaiter(this, void 0, void 0, function* () {
            const note = {
                id: this.notes.length + 1,
                tittle: newNote.tittle,
                number: newNote.number,
                description: newNote.description,
                createdAt: (0, moment_1.default)().toDate(), // Lấy ngày giờ hiện tại
            };
            this.notes.push(note);
            return note;
        });
    }
    updateNote(noteId, updatedNote) {
        return __awaiter(this, void 0, void 0, function* () {
            const noteIndex = this.notes.findIndex((u) => u.id === noteId);
            // Kiểm tra xem ghi chú có tồn tại trong mảng không
            if (noteIndex !== -1) {
                this.notes[noteIndex] = Object.assign(Object.assign({}, this.notes[noteIndex]), updatedNote);
                return this.notes[noteIndex];
            }
            else {
                return undefined;
            }
        });
    }
    deleteNote(noteId) {
        return __awaiter(this, void 0, void 0, function* () {
            this.notes = this.notes.filter((u) => u.id !== noteId);
        });
    }
}
exports.default = NoteService;
