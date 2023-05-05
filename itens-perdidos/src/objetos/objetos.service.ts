import { Injectable, NotFoundException } from '@nestjs/common';
import { ObjetoDTO } from './dto/objeto/objeto';
import { Objeto } from './entities/objeto.entity';

@Injectable()
export class ObjetosService {
  private Objetos: Objeto[] = [];

  findAll() {
    return this.Objetos;
  }

  findOne(id: number) {
    const found = this.Objetos.find((item) => item.id === id);
    if (found) {
      return found;
    }
    throw new NotFoundException('Objeto nao encontrado.', 'Confira o ID.');
  }

  delete(id: number) {
    const found = this.Objetos.findIndex((item) => item.id === id);
    if (found < 0) {
      throw new NotFoundException('Objeto nao encontrado.', 'Confira o ID.');
    }
    this.Objetos.splice(found, 1);
    return JSON.stringify({ Aviso: 'Parabens, item encontrado!' });
  }

  update(id: number, data: ObjetoDTO) {
    const found = this.Objetos.findIndex((item) => item.id === id);
    if (found < 0) {
      throw new NotFoundException('Objeto nao encontrado.', 'Confira o ID.');
    }
    this.Objetos[id] = {
      id: id,
      ...data,
    };
  }

  create(data: ObjetoDTO) {
    this.Objetos.push({
      id: this.Objetos.length,
      ...data,
    });
  }
}
