import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ArticlesService } from './articles.service';

// Dto
import { CreateArticleDto, UpdateArticleDto } from './dto';

@Controller('articles-service')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Get('articles')
  getArticlesList() {
    return this.articlesService.getArticlesList();
  }

  @Get('articles/:id')
  getArticleDetail(@Param('id') id: string) {
    return this.articlesService.getArticleById(+id);
  }

  @Post('articles')
  createArticle(@Body() article: CreateArticleDto) {
    return this.articlesService.createArticle(article);
  }

  @Put('articles/:id')
  updateArticle(@Param('id') id: string, @Body() article: UpdateArticleDto) {
    return this.articlesService.updateArticle(+id, article);
  }

  @Delete('articles/:id')
  deleteArticle(@Param('id') id: string) {
    return this.articlesService.deleteArticle(+id);
  }
}
