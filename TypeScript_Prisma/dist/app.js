"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const note_route_1 = __importDefault(require("./routes/note.route"));
const app = (0, express_1.default)();
app.use('/api/notes', note_route_1.default);
const port = 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
