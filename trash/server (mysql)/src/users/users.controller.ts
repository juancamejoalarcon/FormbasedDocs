import { Controller, Post, Body, Get, Put, Delete, Param} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {

    constructor(private service: UsersService) { }

    @Get()
    getAllUsers(): Promise<User[]> {
        return this.service.getAllUsers();
    }

    @Get(':id')
    get(@Param() params: any) {
        return this.service.getUser(params.id);
    }

    @Post()
    create(@Body() user: User) {
        return this.service.createUser(user);
    }

    @Put()
    update(@Body() user: User) {
        return this.service.updateUser(user);
    }

    @Delete(':id')
    deleteUser(@Param() params: any) {
        return this.service.deleteUser(params.id);
    }
}