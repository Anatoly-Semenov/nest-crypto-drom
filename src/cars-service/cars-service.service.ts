import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  Repository,
  In,
  Between,
  MoreThan,
  LessThan,
  MoreThanOrEqual,
  LessThanOrEqual,
} from 'typeorm';

// DTO
import {
  CreateCarDto,
  UpdateCarDto,
  ResponseCarDto,
  CarsListQueryDto,
} from './dto';

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

  async getCarsList(query: CarsListQueryDto): Promise<ResponseCarDto[]> {
    const where = this.getCarsListWhere(query);

    try {
      const cars = await this.carRepository.find({
        relations: ['model', 'brand', 'color'],
        where,
      });

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

  private getCarsListWhere(query: CarsListQueryDto): any {
    const { filter = {}, sort = {}, offset = null, page = null } = query;
    const where: any = {};

    const setDirectFilter = (name: string) => {
      if (filter?.[name] !== undefined) {
        where[name] = filter[name];
      }
    };

    setDirectFilter('brand_id');
    setDirectFilter('model_id');

    if (filter?.color_ids !== undefined) {
      const ids = filter.color_ids.split(',');

      where.color_id = In(ids);
    }

    const setRangeFilter = (name) => {
      if (
        filter[`${name}_from`] !== undefined &&
        filter[`${name}_to`] !== undefined
      ) {
        where[`${name}`] = Between(
          filter[`${name}_from`],
          filter[`${name}_to`],
        );
      } else if (filter[`${name}_from`] !== undefined) {
        where[`${name}`] = MoreThanOrEqual(filter[`${name}_from`]);
      } else if (filter[`${name}_to`] !== undefined) {
        where[`${name}`] = LessThanOrEqual(filter[`${name}_to`]);
      }
    };

    setRangeFilter('price_rub');
    setRangeFilter('year');

    return where;
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

  async getModelsList(brandId: string): Promise<ResponseModelDto[]> {
    try {
      const models = await this.modelRepository.find({
        where: {
          brand: {
            id: brandId,
          },
        },
      });

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

  async getCarDetail(id: string | number): Promise<ResponseCarDto> {
    try {
      const car = await this.carRepository.findByIds([id], {
        relations: ['model', 'brand', 'color'],
      });

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

      return this.getCarDetail(res.id);
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
