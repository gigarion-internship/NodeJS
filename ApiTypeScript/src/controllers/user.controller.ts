// controllers/user.controller.ts
import { Request, Response } from 'express';
import UserService from '../services/user.service';

const userService = new UserService();

class UserController {
    async getAllUsers(req: Request, res: Response): Promise<void> {
        const users = await userService.getAllUsers();
        res.json(users);
    }

    async getUserById(req: Request, res: Response): Promise<void> {
        const userId = parseInt(req.params.id);
        const user = await userService.getUserById(userId);

        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    }

    async createUser(req: Request, res: Response): Promise<void> {
        const newUser = await userService.createUser(req.body);
        res.status(201).json(newUser);
    }

    async updateUser(req: Request, res: Response): Promise<void> {
        const userId = parseInt(req.params.id);
        const updatedUser = await userService.updateUser(userId, req.body);

        if (updatedUser) {
            res.json(updatedUser);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    }

    async deleteUser(req: Request, res: Response): Promise<void> {
        const userId = parseInt(req.params.id);
        await userService.deleteUser(userId);
        res.json({ message: 'User deleted successfully' });
    }
}

export default UserController;
