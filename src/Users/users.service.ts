import { Injectable, Query } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './user.entity';
import { throwError } from 'rxjs';
import { throws } from 'assert';

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

  async update(user: Users, id: string) {
    var userElement = await this.usersRepository.update(id,user);
    if(userElement.raw.affectedRows > 0) {
      return "Usuario Editado";
    } else {
      return "Não Encontrado"
    }
    
  }

  async remove(id: string): Promise<String> {
    var userElement = await this.usersRepository.delete(id);  
    if(userElement.raw.affectedRows > 0) {
      return "Deletado com sucesso";
    } else {
      return "Erro ao deletar";
    }
  }

  getTestRoute(): String {
      return 'Teste Rota!';
  }

}