import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getThis(): string {
    return JSON.stringify({
      version: '1.0',
      name: 'Itens-Perdidos',
    });
  }
}
