import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoController } from './bo/bo.controller';
import { BoService } from './bo/bo.service';

@Module({
  imports: [],
  controllers: [AppController, BoController],
  providers: [AppService, BoService],
})
export class AppModule {}
