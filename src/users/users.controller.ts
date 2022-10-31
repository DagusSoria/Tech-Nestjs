import { Body, Controller, Get, Post, Param, Query, Put, Delete } from '@nestjs/common';
import { User } from 'src/users/schema/users.schema';
import { CreateUserDto } from './dto/create.user.dto';
import { UpdateUserDto } from './dto/update.user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService){}
    @Get('test')
    test(): string {
        return 'test';
    }

    @Post('/create')
    create(@Body() createUserDto: CreateUserDto): Promise<User>{
       return this.usersService.create(createUserDto);
    }

    @Get('/findAll')
    findAll(): Promise<User[]>{
        return this.usersService.findAll();
    }

    @Get('/findOne')
    findOne(@Query() query): Promise<User> {
        return this.usersService.findOne(query)
    }

    @Put('/updateUser/:id')
    updateUser(@Param('id') id, @Body() updateUserDto: UpdateUserDto): Promise<User>{
        return this.usersService.update(id, updateUserDto)
    }

    @Delete('/deleteUser/:id')
    deleteUser(@Param('id') id): Promise<User> {
        return this.usersService.delete(id);
    }
}