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
const note_service_1 = __importDefault(require("../services/note.service"));
const noteService = new note_service_1.default();
class NoteController {
    getAllNotes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const notes = yield noteService.getAllNotes();
            res.json(notes);
        });
    }
    getNoteById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const noteId = parseInt(req.params.id);
            const note = yield noteService.getNoteById(noteId);
            if (note) {
                res.json(note);
            }
            else {
                res.status(404).json({ message: 'Note not found' });
            }
        });
    }
    createNote(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const newNote = yield noteService.createNote(req.body);
            res.status(201).json(newNote);
        });
    }
    updateNote(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const noteId = parseInt(req.params.id);
            const updatedNote = yield noteService.updateNote(noteId, req.body);
            if (updatedNote) {
                res.json(updatedNote);
            }
            else {
                res.status(404).json({ message: 'Note not found' });
            }
        });
    }
    deleteNote(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const noteId = parseInt(req.params.id);
            yield noteService.deleteNote(noteId);
            res.json({ message: 'Note deleted successfully' });
        });
    }
}
exports.default = NoteController;
