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
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';

// Dto
import {
  CreateArticleBodyDto,
  UpdateArticleDto,
  ResponseArticleDto,
} from './dto';

@Controller('articles-service')
@ApiTags('articles-service')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Get('articles')
  @ApiResponse({
    status: 200,
    description: 'Get articles list.',
    type: ResponseArticleDto,
    isArray: true,
  })
  getArticlesList() {
    return this.articlesService.getArticlesList();
  }

  @Get('articles/:id')
  @ApiResponse({
    status: 200,
    description: 'Get article by id.',
    type: ResponseArticleDto,
  })
  getArticleDetail(@Param('id') id: string) {
    return this.articlesService.getArticleById(+id);
  }

  @Post('articles')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiResponse({
    status: 200,
    description: 'Create article.',
    type: ResponseArticleDto,
  })
  createArticle(
    @Body() article: CreateArticleBodyDto,
    @GetUser() { id: userId },
  ) {
    return this.articlesService.createArticle(article, userId);
  }

  @Put('articles/:id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiResponse({
    status: 200,
    description: 'Update article by id.',
    type: ResponseArticleDto,
  })
  updateArticle(@Param('id') id: string, @Body() article: UpdateArticleDto) {
    return this.articlesService.updateArticle(+id, article);
  }

  @Delete('articles/:id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiResponse({
    status: 200,
    description: 'Delete article.',
    type: String,
  })
  deleteArticle(@Param('id') id: string) {
    return this.articlesService.deleteArticle(+id);
  }
}
