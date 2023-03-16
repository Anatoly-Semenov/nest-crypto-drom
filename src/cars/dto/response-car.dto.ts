import {
  CreateCarDto,
  ResponseModelDto,
  ResponseBrandDto,
  ResponseColorDto,
} from './';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class ResponseCarDto extends CreateCarDto {
  @ApiProperty()
  @Type(() => Date)
  readonly created_at?: Date;

  @ApiProperty()
  @Type(() => Date)
  readonly updated_at?: Date;

  @ApiProperty()
  @Type(() => ResponseBrandDto)
  readonly brand: ResponseBrandDto;

  @ApiProperty()
  @Type(() => ResponseBrandDto)
  readonly model: ResponseModelDto;

  @ApiProperty()
  @Type(() => ResponseColorDto)
  readonly color: ResponseColorDto;

  constructor(partial?: Partial<ResponseCarDto>) {
    super();

    if (partial) {
      Object.assign(this, partial);
    }
  }
}
