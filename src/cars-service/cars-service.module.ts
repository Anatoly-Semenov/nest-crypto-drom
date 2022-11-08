import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CarsService } from './cars-service.service';
import { CarsServiceController } from './cars-service.controller';
import { Car, Brand, Model, Color } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([Car, Brand, Model, Color])],
  providers: [CarsService],
  controllers: [CarsServiceController],
})
export class CarsServiceModule {}
