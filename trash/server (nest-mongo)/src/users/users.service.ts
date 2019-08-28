import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {

    constructor(@InjectModel('User') private readonly userModel: Model<User>) {
    }

    async create(user: User): Promise<{user: User}> {
        try {
            const newUser = await new this.userModel(user);
            newUser.setPassword(user.password);
            await newUser.save();
            return {
                user: newUser,
            };
        } catch (e) {
            // Mejorar la captura de errores
            throw new HttpException(e.errors, HttpStatus.BAD_REQUEST);
        }
    }

}
