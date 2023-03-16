import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { GetUser } from '../user/decorators/get-user.decorator';
import { ArticlesService } from './articles.service';

// Dto
import { CreateArticleBodyDto, UpdateArticleDto } from './dto';

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

  @UseGuards(JwtAuthGuard)
  @Post('articles')
  createArticle(
    @Body() article: CreateArticleBodyDto,
    @GetUser() { id: userId },
  ) {
    return this.articlesService.createArticle(article, userId);
  }

  @UseGuards(JwtAuthGuard)
  @Put('articles/:id')
  updateArticle(@Param('id') id: string, @Body() article: UpdateArticleDto) {
    return this.articlesService.updateArticle(+id, article);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('articles/:id')
  deleteArticle(@Param('id') id: string) {
    return this.articlesService.deleteArticle(+id);
  }
}
