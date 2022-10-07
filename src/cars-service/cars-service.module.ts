import { Module } from '@nestjs/common';
import { CarsService } from './cars-service.service';
import { CarsServiceController } from './cars-service.controller';
import { Car } from './entities/car.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Car])],
  providers: [CarsService],
  controllers: [CarsServiceController],
})
export class CarsServiceModule {}
