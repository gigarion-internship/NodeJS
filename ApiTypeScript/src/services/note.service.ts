// services/user.service.ts
import moment from 'moment';
import { Note } from '../repositories/note.repository';

class NoteService {
    private notes: Note[] = [];

    async getAllNotes(): Promise<Note[]> {
        return this.notes;
    }

    async getNoteById(noteId: number): Promise<Note | undefined> {
        return this.notes.find((u) => u.id === noteId);
    }

    async createNote(newNote: Note): Promise<Note> {
        const note: Note = {
            id: this.notes.length + 1,
            tittle: newNote.tittle,
            number: newNote.number,
            description: newNote.description,
            createdAt: moment().toDate(), // Lấy ngày giờ hiện tại
        };

        this.notes.push(note);
        return note;
    }

    async updateNote(noteId: number, updatedNote: Note): Promise<Note | undefined> {
        const noteIndex = this.notes.findIndex((u) => u.id === noteId);
        // Kiểm tra xem ghi chú có tồn tại trong mảng không
        if (noteIndex !== -1) {
            this.notes[noteIndex] = { ...this.notes[noteIndex], ...updatedNote };
            return this.notes[noteIndex];
        } else {
            return undefined;
        }
    }

    async deleteNote(noteId: number): Promise<void> {
        this.notes = this.notes.filter((u) => u.id !== noteId);
    }
}

export default NoteService;
