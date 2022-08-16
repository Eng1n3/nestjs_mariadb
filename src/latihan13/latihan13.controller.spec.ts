import { Test, TestingModule } from '@nestjs/testing';
import { Latihan13Controller } from './latihan13.controller';

describe('Latihan13Controller', () => {
  let controller: Latihan13Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Latihan13Controller],
    }).compile();

    controller = module.get<Latihan13Controller>(Latihan13Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
