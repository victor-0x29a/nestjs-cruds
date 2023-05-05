import { Test, TestingModule } from '@nestjs/testing';
import { GatoService } from './gato.service';

describe('GatoService', () => {
  let service: GatoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GatoService],
    }).compile();

    service = module.get<GatoService>(GatoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
