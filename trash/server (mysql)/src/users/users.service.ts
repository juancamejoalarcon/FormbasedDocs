import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private usersRepository: Repository<User>) { }

    async getAllUsers(): Promise<User[]> {
        return await this.usersRepository.find();
    }

    async getUser(id: number): Promise<User[]> {
        return this.usersRepository.find({
            select: ['username'],
            where: [{ 'id': id }],
        });
    }

    async createUser(user: User) {
        console.log(user);
        return this.usersRepository.create(user);
    }

    async updateUser(user: User) {
        this.usersRepository.save(user);
    }

    async deleteUser(user: User) {
        this.usersRepository.delete(user);
    }
}
