import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class ResponseTokenDto {
  @ApiProperty()
  @Type(() => String)
  access_token: string;

  @ApiProperty()
  @Type(() => String)
  refresh_token: string;

  @ApiProperty()
  @Type(() => String)
  expire_date: string;

  constructor(partial?: Partial<ResponseTokenDto>) {
    if (partial) {
      Object.assign(this, partial);
    }
  }
}
