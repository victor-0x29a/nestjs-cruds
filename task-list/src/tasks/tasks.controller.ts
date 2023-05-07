import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TasksService) {}
  @Get()
  findAll() {
    return this.taskService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') uuid) {
    return this.taskService.findOne(Number(uuid));
  }
  @Post()
  create(@Body() corpo) {
    return this.taskService.create(corpo);
  }
  @Delete(':id')
  remove(@Param('id') uuid) {
    return this.taskService.remove(Number(uuid));
  }
  @Patch(':id')
  update(@Param('id') uuid, @Body() corpo) {
    return this.taskService.update(Number(uuid), corpo);
  }
}
