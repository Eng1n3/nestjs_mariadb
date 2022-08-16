import { Test, TestingModule } from '@nestjs/testing';
import { Latihan13Service } from './latihan13.service';

describe('Latihan13Service', () => {
  let service: Latihan13Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Latihan13Service],
    }).compile();

    service = module.get<Latihan13Service>(Latihan13Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
