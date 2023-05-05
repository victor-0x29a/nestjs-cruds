import { Test, TestingModule } from '@nestjs/testing';
import { GatoController } from './gato.controller';

describe('GatoController', () => {
  let controller: GatoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GatoController],
    }).compile();

    controller = module.get<GatoController>(GatoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
