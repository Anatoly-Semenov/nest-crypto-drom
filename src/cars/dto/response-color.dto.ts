import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class ResponseColorDto {
  @ApiProperty()
  @Type(() => Number)
  id: number;

  @ApiProperty()
  @Type(() => String)
  name: string;

  @ApiProperty()
  @Type(() => String)
  hex: string;

  constructor(partial?: Partial<ResponseColorDto>) {
    if (partial) {
      Object.assign(this, partial);
    }
  }
}
