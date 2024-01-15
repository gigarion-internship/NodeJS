"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/note.route.ts
const express_1 = __importDefault(require("express"));
const note_controller_1 = __importDefault(require("../controllers/note.controller"));
const router = express_1.default.Router();
const noteController = new note_controller_1.default();
router.get('/notes', noteController.getAllNotes.bind(noteController));
router.get('/notes/:id', noteController.getNoteById.bind(noteController));
router.post('/notes', noteController.createNote.bind(noteController));
router.put('/notes/:id', noteController.updateNote.bind(noteController));
router.delete('/notes/:id', noteController.deleteNote.bind(noteController));
exports.default = router;
