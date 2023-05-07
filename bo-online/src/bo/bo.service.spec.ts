import { Test, TestingModule } from '@nestjs/testing';
import { BoService } from './bo.service';

describe('BoService', () => {
  let service: BoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BoService],
    }).compile();

    service = module.get<BoService>(BoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
