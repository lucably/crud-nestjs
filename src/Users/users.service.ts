import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './user.entity';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  findAll(): Promise<Users[]> {
    return this.usersRepository.find();
  }

  findOne(id: string): Promise<Users> {
    return this.usersRepository.findOne(id);
  }

  createUser(user: Users) {
    this.usersRepository.insert(user);
    return user;
  }

  //Terminar o update e fazer validações
  async update(user: Users, id: string) {
    const userElement = this.usersRepository.findOne(id);
    if(userElement) {
      (await userElement).firstName = user.firstName;
      (await userElement).lastName = user.lastName;
      (await userElement).isActive = user.isActive? user.isActive : (await userElement).isActive;
      return userElement;
    } else {
      return 'Usuario n encontrado!';
    }
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);  
  }

  getTestRoute(): String {
      return 'Teste Rota!';
  }

}