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
exports.deleteById = exports.updateById = exports.create = exports.getById = exports.getAll1 = void 0;
const note_model_1 = require("../models/note.model");
const getAll1 = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield note_model_1.NoteModel.getAll();
        res.status(200).json({ data });
    }
    catch (error) {
        res.status(500).json({ status: 'Internal Server Error', data: { error } });
    }
});
exports.getAll1 = getAll1;
const getById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = yield note_model_1.NoteModel.getById(id);
        res.status(200).json({ status: 'OK', data });
    }
    catch (error) {
        res.status(500).json({ status: 'Internal Server Error', data: { error } });
    }
});
exports.getById = getById;
// controllers/note.controller.ts
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield note_model_1.NoteModel.create(req.body);
        res.status(201).json({ status: 'Created', data });
    }
    catch (error) {
        res.status(500).json({ status: 'Internal Server Error', data: { error } });
    }
});
exports.create = create;
const updateById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = yield note_model_1.NoteModel.updateById(id, req.body);
        res.status(200).json({ status: 'OK', data });
    }
    catch (error) {
        res.status(500).json({ status: 'Internal Server Error', data: { error } });
    }
});
exports.updateById = updateById;
const deleteById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = yield note_model_1.NoteModel.deleteById(id);
        res.status(200).json({ status: 'OK', data });
    }
    catch (error) {
        res.status(500).json({ status: 'Internal Server Error', data: { error } });
    }
});
exports.deleteById = deleteById;
