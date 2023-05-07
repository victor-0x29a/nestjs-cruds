import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BoService } from './bo.service';

@Controller('bo')
export class BoController {
  constructor(private readonly boService: BoService) {}
  @Get()
  findAll() {
    return this.boService.findAll();
  }
  @Get(':proccess')
  findOne(@Param('proccess') processo) {
    return this.boService.findOne(Number(processo));
  }
  @Post()
  create(@Body() corpo) {
    return this.boService.insert(corpo);
  }
  @Patch(':proccess')
  update(@Body() corpo, @Param('proccess') proccess) {
    return this.boService.update(Number(proccess), corpo);
  }
  @Delete(':proccess')
  delete(@Param('proccess') proccess) {
    return this.boService.delete(Number(proccess));
  }
}
