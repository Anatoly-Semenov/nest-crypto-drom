export class UpdateArticleDto {
  title: string;

  sub_title: string;

  content: string;

  constructor(partial?: Partial<UpdateArticleDto>) {
    if (partial) {
      Object.assign(this, partial);
    }
  }
}
