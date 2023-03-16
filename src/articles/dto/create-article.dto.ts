import { PartialType, ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { UpdateArticleDto } from './update-article.dto';

export class CreateArticleDto extends PartialType(UpdateArticleDto) {
  @ApiProperty()
  @Type(() => Number)
  user_id: number;

  constructor(partial?: Partial<CreateArticleDto>) {
    super();

    if (partial) {
      Object.assign(this, partial);
    }
  }
}
