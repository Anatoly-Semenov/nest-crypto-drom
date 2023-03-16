import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

// Services
import { CarsService } from './cars.service';

// DTO
import {
  CreateCarDto,
  UpdateCarDto,
  ResponseCarDto,
  ResponseColorDto,
  ResponseBrandDto,
  ResponseModelDto,
  CarsListQueryDto,
} from './dto';
import { ListResponseDto } from '../system/dto/list-response.dto';

@Controller('cars-service')
@ApiTags('cars-service')
export class CarsController {
  constructor(private carsService: CarsService) {}

  @Get('/cars')
  @ApiResponse({
    status: 200,
    description: 'Get cars list.',
    isArray: true,
  })
  getCarsList(
    @Query() query: CarsListQueryDto,
  ): Promise<ListResponseDto<ResponseCarDto>> {
    return this.carsService.getCarsList(query);
  }

  @Get('/cars/:id')
  @ApiResponse({
    status: 200,
    description: 'Get car by id.',
  })
  getCarDetail(@Param('id') id: string): Promise<ResponseCarDto> {
    return this.carsService.getCarDetail(id);
  }

  @Post('/cars')
  @ApiResponse({
    status: 200,
    description: 'Create car.',
  })
  createCar(@Body() carBody: CreateCarDto): Promise<ResponseCarDto> {
    return this.carsService.createCar(carBody);
  }

  @Put('/cars/:id')
  @ApiResponse({
    status: 200,
    description: 'Update car by id.',
  })
  updateCar(
    @Param('id') id: string,
    @Body() carBody: UpdateCarDto,
  ): Promise<ResponseCarDto> {
    return this.carsService.updateCar(id, carBody);
  }

  @Delete('/cars/:id')
  @ApiResponse({
    status: 200,
    description: 'Delete car.',
  })
  deleteCar(@Param('id') id: string): Promise<string> {
    return this.carsService.deleteCar(id);
  }

  @Get('/colors')
  @ApiResponse({
    status: 200,
    description: 'Get colors list.',
    type: ResponseColorDto,
    isArray: true,
  })
  getColorsList(): Promise<ResponseColorDto[]> {
    return this.carsService.getColorsList();
  }

  @Get('/brands')
  @ApiResponse({
    status: 200,
    description: 'Get brands list.',
    type: ResponseBrandDto,
    isArray: true,
  })
  getBrandsList(): Promise<ResponseBrandDto[]> {
    return this.carsService.getBrandsList();
  }

  @Get('/brands/:id/models')
  @ApiResponse({
    status: 200,
    description: 'Get models list.',
    type: ResponseModelDto,
    isArray: true,
  })
  getModelsList(@Param('id') brandId: string): Promise<ResponseModelDto[]> {
    return this.carsService.getModelsList(brandId);
  }
}
