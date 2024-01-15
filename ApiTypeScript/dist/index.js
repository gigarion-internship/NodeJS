"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
const express_1 = __importDefault(require("express"));
const user_controller_1 = __importDefault(require("./controllers/user.controller"));
const note_controller_1 = __importDefault(require("./controllers/note.controller"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
const userController = new user_controller_1.default();
app.get('/api/users', userController.getAllUsers.bind(userController));
app.get('/api/users/:id', userController.getUserById.bind(userController));
app.post('/api/users', userController.createUser.bind(userController));
app.put('/api/users/:id', userController.updateUser.bind(userController));
app.delete('/api/users/:id', userController.deleteUser.bind(userController));
const noteController = new note_controller_1.default();
app.get('/api/notes', noteController.getAllNotes.bind(noteController));
app.get('/api/notes/:id', noteController.getNoteById.bind(noteController));
app.post('/api/notes', noteController.createNote.bind(noteController));
app.put('/api/notes/:id', noteController.updateNote.bind(noteController));
app.delete('/api/notes/:id', noteController.deleteNote.bind(noteController));
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
