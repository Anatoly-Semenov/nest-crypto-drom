export class CreateArticleDto {
  title: string;

  sub_title: string;

  content: string;

  constructor(partial?: Partial<CreateArticleDto>) {
    if (partial) {
      Object.assign(this, partial);
    }
  }
}
