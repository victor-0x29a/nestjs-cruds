import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoldsController } from './golds/golds.controller';
import { GoldsService } from './golds/golds.service';

@Module({
  imports: [],
  controllers: [AppController, GoldsController],
  providers: [AppService, GoldsService],
})
export class AppModule {}
