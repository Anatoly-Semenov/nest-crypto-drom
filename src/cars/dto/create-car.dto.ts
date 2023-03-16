import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreateCarDto {
  @ApiProperty()
  @Type(() => Number)
  brand_id: number;

  @ApiProperty()
  @Type(() => Number)
  model_id: number;

  @ApiProperty()
  @Type(() => Number)
  year: number;

  @ApiProperty()
  @Type(() => Number)
  hp: number;

  // price: {
  //   rub: number;
  //   eth: number;
  //   btc: number;
  //   usdt: number;
  // };

  @ApiProperty()
  @Type(() => Number)
  color_id: number;

  // region_id: number;

  @ApiProperty()
  @Type(() => Number)
  price_rub: number | null;

  @ApiProperty()
  @Type(() => String)
  img_preview: string;

  constructor(partial?: Partial<CreateCarDto>) {
    if (partial) {
      Object.assign(this, partial);
    }
  }
}
