// services/user.service.ts
import { User } from '../repositories/user.repository';

class UserService {
    private users: User[] = [];

    async getAllUsers(): Promise<User[]> {
        return this.users;
    }

    async getUserById(userId: number): Promise<User | undefined> {
        return this.users.find((u) => u.id === userId);
    }

    async createUser(newUser: User): Promise<User> {
        const user: User = {
            id: this.users.length + 1,
            name: newUser.name,
            email: newUser.email,
        };

        this.users.push(user);
        return user;
    }

    async updateUser(userId: number, updatedUser: User): Promise<User | undefined> {
        const userIndex = this.users.findIndex((u) => u.id === userId);

        if (userIndex !== -1) {
            this.users[userIndex] = { ...this.users[userIndex], ...updatedUser };
            return this.users[userIndex];
        } else {
            return undefined;
        }
    }

    async deleteUser(userId: number): Promise<void> {
        this.users = this.users.filter((u) => u.id !== userId);
    }
}

export default UserService;
