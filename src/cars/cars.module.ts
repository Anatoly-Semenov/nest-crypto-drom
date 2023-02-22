import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CarsService } from './cars.service';
import { CarsController } from './cars.controller';
import { Car, Brand, Model, Color } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([Car, Brand, Model, Color])],
  providers: [CarsService],
  controllers: [CarsController],
})
export class CarsModule {}
