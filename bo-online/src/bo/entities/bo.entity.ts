import { personEntity } from './person.entity';

export class boEntity {
  processo: number;
  anonymous: boolean;
  vitimaNome: string;
  vitimaCpf: string;
  infratorNome: string;
  infratorCpf: string;
  infratorCaracteristicas: string[];
  infratorEncontrado: boolean;
  codigoPenal: number;
  testemunhas: personEntity[];
  delegacia: {
    cidade: string;
    uf: string;
    batalhao: number;
  };
}
