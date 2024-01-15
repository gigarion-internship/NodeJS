"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const note_controller_1 = require("../controllers/note.controller");
const router = express_1.default.Router();
router.get('/', note_controller_1.getAll1);
router.get('/:id', note_controller_1.getById);
// Use parseSchema middleware before the create and updateById handlers
router.post('/', note_controller_1.create);
router.put('/:id', note_controller_1.updateById);
router.delete('/:id', note_controller_1.deleteById);
exports.default = router;
