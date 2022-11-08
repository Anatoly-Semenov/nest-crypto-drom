import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// DTO
import { CreateCarDto, UpdateCarDto, ResponseCarDto } from './dto';

// Entities
import { Car, Color, Brand, Model } from './entities';
import { ResponseColorDto, ResponseBrandDto, ResponseModelDto } from './dto';

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(Car) private carRepository: Repository<Car>,
    @InjectRepository(Color) private colorRepository: Repository<Color>,
    @InjectRepository(Brand) private brandRepository: Repository<Brand>,
    @InjectRepository(Model) private modelRepository: Repository<Model>,
  ) {}

  async getCarsList(): Promise<ResponseCarDto[]> {
    try {
      const cars = await this.carRepository.find();

      return cars.map((car) => new ResponseCarDto(car));
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: error,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getColorsList(): Promise<ResponseColorDto[]> {
    try {
      const colors = await this.colorRepository.find();

      return colors.map((color) => {
        return new ResponseColorDto(color);
      });
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: error,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getBrandsList(): Promise<ResponseBrandDto[]> {
    try {
      const brands = await this.brandRepository.find();

      return brands.map((brand) => {
        return new ResponseBrandDto(brand);
      });
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: error,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getModelsList(): Promise<ResponseModelDto[]> {
    try {
      const models = await this.modelRepository.find();

      return models.map((model) => {
        return new ResponseModelDto(model);
      });
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: error,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getCarDetail(id: string): Promise<ResponseCarDto> {
    try {
      const car = await this.carRepository.findByIds([id]);

      return new ResponseCarDto(car[0]);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: error,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async createCar(carBody: CreateCarDto): Promise<ResponseCarDto> {
    try {
      const car = await this.carRepository.create(carBody);
      const res = await this.carRepository.save(car);

      return new ResponseCarDto(res);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: error,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async updateCar(id: string, carBody: UpdateCarDto): Promise<ResponseCarDto> {
    try {
      const car = await this.carRepository.update(id, carBody);

      // @ts-ignore // Todo: Debug update method
      return new ResponseCarDto(car);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: error,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async deleteCar(id: string): Promise<string> {
    try {
      await this.carRepository.delete(id);

      return `Car with id:${id} successful deleted`;
    } catch (error: any) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: 'Failed to delete car car',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
