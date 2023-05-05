import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GatoModule } from './gato/gato.module';

@Module({
  imports: [GatoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  //
}
