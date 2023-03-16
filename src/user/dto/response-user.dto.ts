import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './';
import { IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class ResponseUserDto extends PartialType(CreateUserDto) {
  @ApiProperty()
  @IsOptional()
  @Type(() => Number)
  id: number;
}
