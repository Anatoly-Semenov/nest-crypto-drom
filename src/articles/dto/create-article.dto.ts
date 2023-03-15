import { PartialType } from '@nestjs/swagger';
import { UpdateArticleDto } from './update-article.dto';

export class CreateArticleDto extends PartialType(UpdateArticleDto) {
  user_id: string;

  constructor(partial?: Partial<CreateArticleDto>) {
    super();

    if (partial) {
      Object.assign(this, partial);
    }
  }
}
