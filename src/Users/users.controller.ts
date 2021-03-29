import { Controller, Get, Post, Param, Body, Delete, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersModule } from './users.module';
import { Users } from './user.entity';

@Controller('users')
export class UsersController {

    constructor(private readonly UsersService: UsersService) {}

    //Decorador
    @Get() 
    async getAllUsers(): Promise<UsersModule> {
        return this.UsersService.findAll();
    }

    @Get(':id')
    async getOneUsers(@Param('id') id: string): Promise<UsersModule> {
        return this.UsersService.findOne(id);
    }

    @Post() //Ta falando que no @Body() vai ver um user do Tipo Users 
    async createUser(@Body() user: Users): Promise<UsersModule> {
        return this.UsersService.createUser(user);
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: string): Promise<String> {
       var element = await this.UsersService.remove(id)
       return element;
    }

    @Put(':id')
    async update(@Body() user: Users, @Param('id') id: string): Promise<String> {
       var element = await this.UsersService.update(user,id);
        return element;
    }

    @Get('test')
    getTest(): String {
        return this.UsersService.getTestRoute();
    }

}
