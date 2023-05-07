import { Injectable, NotFoundException } from '@nestjs/common';
import { dtoTask } from './dto/dto';
import { taskEntity } from './entities/task.entity';

@Injectable()
export class TasksService {
  private tarefas: taskEntity[] = [];
  findAll() {
    return this.tarefas;
  }
  findOne(id: number) {
    const findItem = this.tarefas.find((item) => item.id === id);
    if (!findItem) {
      throw new NotFoundException('Tarefa nao encontrada.', 'Confira o ID.');
    }
    return findItem;
  }
  create(data: dtoTask) {
    this.tarefas.push({
      id: this.tarefas.length,
      ...data,
    });
  }
  remove(id: number) {
    const findItem = this.tarefas.findIndex((item) => item.id === id);
    if (findItem < 0) {
      throw new NotFoundException('Tarefa nao encontrada.', 'Confira o ID.');
    }
    this.tarefas.splice(findItem, 1);
  }
  update(id: number, data: dtoTask) {
    const findItem = this.tarefas.findIndex((item) => item.id === id);
    if (findItem < 0) {
      throw new NotFoundException('Tarefa nao encontrada.', 'Confira o ID.');
    }
    this.tarefas[findItem] = {
      id: id,
      ...data,
    };
  }
}
