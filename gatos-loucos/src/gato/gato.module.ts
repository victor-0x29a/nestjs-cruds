import { Module } from '@nestjs/common';
import { GatoController } from './gato.controller';
import { GatoService } from './gato.service';

@Module({
    controllers: [GatoController],
    providers: [GatoService]
})
export class GatoModule { }
