import { Type } from 'class-transformer';

export class MetaListDto {
  @Type(() => Number)
  readonly page_size: number;

  @Type(() => Number)
  readonly total_items: number;

  @Type(() => Number)
  readonly total_pages: number;

  @Type(() => Number)
  readonly current_page: number;

  constructor(partial?: Partial<MetaListDto>) {
    if (partial) {
      Object.assign(this, partial);
    }
  }
}
