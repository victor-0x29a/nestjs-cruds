import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ObjetosController } from './objetos/objetos.controller';
import { ObjetosService } from './objetos/objetos.service';

@Module({
  imports: [],
  controllers: [AppController, ObjetosController],
  providers: [AppService, ObjetosService],
})
export class AppModule {}
