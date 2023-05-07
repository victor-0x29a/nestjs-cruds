import { Injectable, NotFoundException } from '@nestjs/common';
import { dtoBoOnline } from './dto/bo.tdo';
import { boEntity } from './entities/bo.entity';

@Injectable()
export class BoService {
  private bo: boEntity[] = [];
  findAll() {
    return this.bo;
  }
  findOne(processo: number) {
    const findItem = this.bo.find((item) => item.processo === processo);
    if (!findItem) {
      throw new NotFoundException('Confira o processo.', 'Processo invalido.');
    }
    return findItem;
  }
  insert(data: dtoBoOnline) {
    this.bo.push({
      processo: this.bo.length,
      ...data,
    });
  }
  delete(processo: number) {
    const findItem = this.bo.findIndex((item) => item.processo === processo);
    if (findItem < 0) {
      throw new NotFoundException('Confira o processo.', 'Processo invalido.');
    }
    this.bo.splice(findItem, 1);
  }
  update(processo: number, data: dtoBoOnline) {
    const findItem = this.bo.findIndex((item) => item.processo === processo);
    if (findItem < 0) {
      throw new NotFoundException('Confira o processo.', 'Processo invalido.');
    }
    this.bo[findItem] = {
      processo: processo,
      ...data,
    };
  }
}
