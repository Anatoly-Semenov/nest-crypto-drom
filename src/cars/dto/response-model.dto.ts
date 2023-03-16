import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class ResponseModelDto {
  @ApiProperty()
  @Type(() => Number)
  id: number;

  @ApiProperty()
  @Type(() => String)
  name: string;

  @ApiProperty()
  @Type(() => Number)
  brand_id: number;

  constructor(partial?: Partial<ResponseModelDto>) {
    if (partial) {
      Object.assign(this, partial);
    }
  }
}
