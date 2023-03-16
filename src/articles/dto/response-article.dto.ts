import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateArticleBodyDto } from './';
import { Type } from 'class-transformer';

export class ResponseArticleDto extends PartialType(CreateArticleBodyDto) {
  @ApiProperty()
  @Type(() => Number)
  id: number;
}
