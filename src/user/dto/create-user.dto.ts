import { Type } from 'class-transformer';
import { IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  @IsOptional()
  @Type(() => String)
  phone_number: string;

  @ApiProperty()
  @IsOptional()
  @Type(() => String)
  email: string;

  @ApiProperty()
  @Type(() => String)
  password: string;

  constructor(partial?: Partial<CreateUserDto>) {
    if (partial) {
      Object.assign(this, partial);
    }
  }
}
