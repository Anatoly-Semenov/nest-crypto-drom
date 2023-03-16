import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class RefreshTokenDto {
  @ApiProperty()
  @Type(() => String)
  refresh_token: string;

  constructor(partial?: Partial<RefreshTokenDto>) {
    if (partial) {
      Object.assign(this, partial);
    }
  }
}
