import { Test, TestingModule } from '@nestjs/testing';
import { Latihan12Controller } from './latihan12.controller';

describe('Latihan12Controller', () => {
  let controller: Latihan12Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Latihan12Controller],
    }).compile();

    controller = module.get<Latihan12Controller>(Latihan12Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
