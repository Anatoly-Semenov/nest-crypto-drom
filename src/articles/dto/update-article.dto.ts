import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class UpdateArticleDto {
  @ApiProperty()
  @Type(() => String)
  title: string;

  @ApiProperty()
  @Type(() => String)
  sub_title: string;

  @ApiProperty()
  @Type(() => String)
  content: string;

  constructor(partial?: Partial<UpdateArticleDto>) {
    if (partial) {
      Object.assign(this, partial);
    }
  }
}
