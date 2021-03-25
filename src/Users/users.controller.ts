import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersModule } from './users.module';

@Controller('users')
export class UsersController {

    constructor(private readonly UsersService: UsersService) {}

    //Decorador
    @Get() 
    getAllUsers(): UsersModule {
        return this.UsersService.findAll();
    }

    @Get('test')
    getTest(): String {
        return this.UsersService.getTestRoute();
    }

}
