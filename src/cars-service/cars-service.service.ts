import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

// DTO
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

// Entities
import { Car } from './entities/car.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CarsService {
  constructor(@InjectRepository(Car) private carRepository: Repository<Car>) {}

  async getList(): Promise<any[]> {
    return await this.carRepository.find();
  }

  async getDetail(id: string): Promise<any> {
    return await this.carRepository.findOneById(id);
  }

  async createCar(carBody: CreateCarDto): Promise<any> {
    const car = await this.carRepository.create(carBody);
    const res = await this.carRepository.save(car);

    return res;
  }

  updateCar(id: string, carBody: UpdateCarDto): Promise<any> {
    return this.carRepository.update(id, carBody);
  }

  deleteCar(id: string): any {
    return this.carRepository.delete(id);
  }
}
