import { PartialType } from '@nestjs/swagger';
import { UpdateArticleDto } from './update-article.dto';

export class CreateArticleBodyDto extends PartialType(UpdateArticleDto) {}
