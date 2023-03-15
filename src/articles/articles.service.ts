import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// Dto
import { CreateArticleDto, UpdateArticleDto } from './dto';

// Entities
import { Article } from './entities/article.entity';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Article) private articleRepository: Repository<Article>,
  ) {}

  async getArticlesList(): Promise<Article[]> {
    try {
      return await this.articleRepository.find();
    } catch (error) {
      throw new BadRequestException('Failed to get articles list');
    }
  }

  async getArticleById(id: number): Promise<Article> {
    const errorText: string = `Failed to user with id: ${id}`;

    try {
      const articles = await this.articleRepository.findByIds([id])[0];

      if (!articles && articles?.[0]) {
        throw new BadRequestException(errorText);
      }

      return articles[0];
    } catch (error) {
      throw new BadRequestException(errorText);
    }
  }

  async createArticle(newArticle: CreateArticleDto): Promise<Article> {
    try {
      const article = await this.articleRepository.create(newArticle);
      const res = await this.articleRepository.save(article);

      return this.getArticleById(res.id);
    } catch (error) {
      throw new BadRequestException('Failed to create article');
    }
  }

  async updateArticle(id: number, article: UpdateArticleDto) {
    try {
      return await this.articleRepository.update(id, article);
    } catch (error) {
      throw new BadRequestException(`Failed to update article with id: ${id}`);
    }
  }

  async deleteArticle(id: number) {
    try {
      await this.articleRepository.delete(id);

      return `Article with id: ${id} successful delete`;
    } catch (error) {
      throw new BadRequestException(`Failed to delete article with id: ${id}`);
    }
  }
}
