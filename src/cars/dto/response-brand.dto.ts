import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class ResponseBrandDto {
  @ApiProperty()
  @Type(() => Number)
  id: number;

  @ApiProperty()
  @Type(() => String)
  name: string;

  constructor(partial?: Partial<ResponseBrandDto>) {
    if (partial) {
      Object.assign(this, partial);
    }
  }
}
