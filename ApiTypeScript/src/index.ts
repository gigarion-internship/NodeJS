
// src/index.ts
import express, { Application } from 'express';
import UserController from './controllers/user.controller';
import NoteController from './controllers/note.controller';

const app: Application = express();
const port = 3000;

app.use(express.json());

const userController = new UserController();

app.get('/api/users', userController.getAllUsers.bind(userController));
app.get('/api/users/:id', userController.getUserById.bind(userController));
app.post('/api/users', userController.createUser.bind(userController));
app.put('/api/users/:id', userController.updateUser.bind(userController));
app.delete('/api/users/:id', userController.deleteUser.bind(userController));
const noteController = new NoteController();
app.get('/api/notes', noteController.getAllNotes.bind(noteController));
app.get('/api/notes/:id', noteController.getNoteById.bind(noteController));
app.post('/api/notes', noteController.createNote.bind(noteController));
app.put('/api/notes/:id', noteController.updateNote.bind(noteController));
app.delete('/api/notes/:id', noteController.deleteNote.bind(noteController));


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});