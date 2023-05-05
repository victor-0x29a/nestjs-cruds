import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { GoldsService } from './golds.service';

@Controller('golds')
export class GoldsController {
  constructor(private readonly GoldService: GoldsService) {
    //
  }
  @Get()
  findAll() {
    return this.GoldService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') UUID) {
    return this.GoldService.findOne(Number(UUID));
  }

  @Post()
  create(@Body() CORPO) {
    return this.GoldService.insert(CORPO);
  }

  @Patch()
  update(@Query('id') UUID, @Body() CORPO) {
    return this.GoldService.update(Number(UUID), CORPO);
  }

  @Delete()
  delete(@Query('id') UUID) {
    return this.GoldService.delete(Number(UUID));
  }
}
