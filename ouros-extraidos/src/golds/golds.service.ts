import { Injectable, NotFoundException } from '@nestjs/common';
import { goldDTO } from './dto/dto';
import { GoldEntity } from './entities/gold';

@Injectable()
export class GoldsService {
  private golds: GoldEntity[] = [];

  findAll(): GoldEntity[] {
    return this.golds;
  }

  findOne(id: number) {
    const foundItem = this.golds.find((item) => item.id === id);
    if (!foundItem) {
      throw new NotFoundException(
        'Registro nao identificado.',
        'Confira a identificacao do registro.',
      );
    }
    return foundItem;
  }

  insert(data: goldDTO) {
    this.golds.push({
      id: this.golds.length,
      ...data,
    });
  }

  delete(id: number) {
    const findItem = this.golds.findIndex((item) => item.id === id);
    if (findItem >= 0) {
      this.golds.splice(findItem, 1);
    } else {
      throw new NotFoundException(
        'Registro nao identificado.',
        'Confira a identificacao do registro.',
      );
    }
  }

  update(id: number, data: goldDTO) {
    const findItemIndex = this.golds.findIndex((item) => item.id === id);
    if (findItemIndex < 0) {
      throw new NotFoundException(
        'Registro nao identificado.',
        'Confira a identificacao do registro.',
      );
    }
    this.golds[findItemIndex] = {
      id: id,
      ...data,
    };
  }
}
