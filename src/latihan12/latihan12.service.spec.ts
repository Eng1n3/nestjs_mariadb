import { Test, TestingModule } from '@nestjs/testing';
import { Latihan12Service } from './latihan12.service';

describe('Latihan12Service', () => {
  let service: Latihan12Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Latihan12Service],
    }).compile();

    service = module.get<Latihan12Service>(Latihan12Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
