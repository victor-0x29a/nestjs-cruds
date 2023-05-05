import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ObjetosService } from './objetos.service';

@Controller('objetos')
export class ObjetosController {
  constructor(private readonly ObjetoService: ObjetosService) {
    //
  }
  @Get()
  findAll() {
    return this.ObjetoService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') ID) {
    return this.ObjetoService.findOne(Number(ID));
  }
  @Post()
  create(@Body() corpo) {
    return this.ObjetoService.create(corpo);
  }
  @Patch()
  update(@Body() corpo) {
    return this.ObjetoService.update(Number(corpo.id), corpo.data);
  }
  @Delete(':id')
  delete(@Param('id') ID) {
    return this.ObjetoService.delete(Number(ID));
  }
}
