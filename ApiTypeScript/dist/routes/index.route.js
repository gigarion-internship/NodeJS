"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/index.route.ts
const express_1 = __importDefault(require("express"));
const user_route_1 = __importDefault(require("./user.route"));
const note_route_1 = __importDefault(require("./note.route"));
const router = express_1.default.Router();
// Use user routes
router.use('/users', user_route_1.default);
// Use note routes
router.use('/notes', note_route_1.default);
exports.default = router;
