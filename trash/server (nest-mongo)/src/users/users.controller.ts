import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Body,
    Param,
    Query,
} from '@nestjs/common';

import { CreateUserDto } from './dto/user.dto';
import { UsersService } from './users.service';
import { User } from './interfaces/user.interface';

@Controller('user')
export class UsersController {

    constructor(
        private readonly usersService: UsersService,
        ) {

    }

    @Post('signup')
    create(@Body() createUserDto: CreateUserDto): Promise<{user: User}> {
        return this.usersService.create(createUserDto.user);
    }
}
