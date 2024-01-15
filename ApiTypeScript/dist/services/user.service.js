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
class UserService {
    constructor() {
        this.users = [];
    }
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.users;
        });
    }
    getUserById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.users.find((u) => u.id === userId);
        });
    }
    createUser(newUser) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = {
                id: this.users.length + 1,
                name: newUser.name,
                email: newUser.email,
            };
            this.users.push(user);
            return user;
        });
    }
    updateUser(userId, updatedUser) {
        return __awaiter(this, void 0, void 0, function* () {
            const userIndex = this.users.findIndex((u) => u.id === userId);
            if (userIndex !== -1) {
                this.users[userIndex] = Object.assign(Object.assign({}, this.users[userIndex]), updatedUser);
                return this.users[userIndex];
            }
            else {
                return undefined;
            }
        });
    }
    deleteUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            this.users = this.users.filter((u) => u.id !== userId);
        });
    }
}
exports.default = UserService;
