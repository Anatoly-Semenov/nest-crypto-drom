import { Test, TestingModule } from '@nestjs/testing';
import { CarsServiceController } from './cars-service.controller';

describe('CarsServiceController', () => {
  let controller: CarsServiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarsServiceController],
    }).compile();

    controller = module.get<CarsServiceController>(CarsServiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
