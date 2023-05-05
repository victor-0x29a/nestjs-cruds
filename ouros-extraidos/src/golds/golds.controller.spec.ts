import { Test, TestingModule } from '@nestjs/testing';
import { GoldsController } from './golds.controller';

describe('GoldsController', () => {
  let controller: GoldsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GoldsController],
    }).compile();

    controller = module.get<GoldsController>(GoldsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
