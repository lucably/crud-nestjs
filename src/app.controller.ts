import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

//Aqui conseguimos colocar a rota exp: @Controller(loja)  => São chamados de decorador.
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //Decorador
  @Get('hello') //Realizando o mapeamento da rota. Se vc tiver um decorador que no caso do exemplo foi loja e colocar no @get(filmes) ficará localhost/loja/filmes
  getHelloWorld(): string {
    return this.appService.getHello();
  }
}
