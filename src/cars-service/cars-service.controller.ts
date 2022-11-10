import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';

// Services
import { CarsService } from './cars-service.service';

// DTO
import {
  CreateCarDto,
  UpdateCarDto,
  ResponseCarDto,
  ResponseColorDto,
  ResponseBrandDto,
  ResponseModelDto,
} from './dto';

@Controller('cars-service')
export class CarsServiceController {
  constructor(private carsService: CarsService) {}

  @Get('/cars')
  getCarsList(): Promise<ResponseCarDto[]> {
    return this.carsService.getCarsList();
  }

  @Get('/cars/:id')
  getCarDetail(@Param('id') id: string): Promise<ResponseCarDto> {
    return this.carsService.getCarDetail(id);
  }

  @Post('/cars')
  createCar(@Body() carBody: CreateCarDto): Promise<ResponseCarDto> {
    return this.carsService.createCar(carBody);
  }

  @Put('/cars/:id')
  updateCar(
    @Param('id') id: string,
    @Body() carBody: UpdateCarDto,
  ): Promise<ResponseCarDto> {
    return this.carsService.updateCar(id, carBody);
  }

  @Delete('/cars/:id')
  deleteCar(@Param('id') id: string): Promise<string> {
    return this.carsService.deleteCar(id);
  }

  @Get('/colors')
  getColorsList(): Promise<ResponseColorDto[]> {
    return this.carsService.getColorsList();
  }

  @Get('/brands')
  getBrandsList(): Promise<ResponseBrandDto[]> {
    return this.carsService.getBrandsList();
  }

  @Get('/brands/:id/models')
  getModelsList(@Param('id') brandId: string): Promise<ResponseModelDto[]> {
    return this.carsService.getModelsList(brandId);
  }
}
