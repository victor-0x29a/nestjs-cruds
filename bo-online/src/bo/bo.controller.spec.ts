import { Test, TestingModule } from '@nestjs/testing';
import { BoController } from './bo.controller';

describe('BoController', () => {
  let controller: BoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BoController],
    }).compile();

    controller = module.get<BoController>(BoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
