import { Test, TestingModule } from '@nestjs/testing';
import { GoldsService } from './golds.service';

describe('GoldsService', () => {
  let service: GoldsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GoldsService],
    }).compile();

    service = module.get<GoldsService>(GoldsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
