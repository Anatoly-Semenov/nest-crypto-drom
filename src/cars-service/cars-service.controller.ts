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
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars-service')
export class CarsServiceController {
  constructor(private carsService: CarsService) {}

  @Get('/cars')
  getCarsList() {
    return this.carsService.getList();
  }

  @Get('/cars/:id')
  getCarDetail(@Param('id') id: string) {
    return this.carsService.getDetail(id);
  }

  @Post('/cars')
  createCar(@Body() carBody: CreateCarDto) {
    return this.carsService.createCar(carBody);
  }

  @Put('/cars/:id')
  updateCar(
    @Param('id') id: string,
    @Body() carBody: UpdateCarDto,
  ): Promise<any> {
    return this.carsService.updateCar(id, carBody);
  }

  @Delete('/cars/:id')
  deleteCar(@Param('id') id: string) {
    return this.carsService.deleteCar(id);
  }
}
