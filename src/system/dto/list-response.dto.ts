import { Type } from 'class-transformer';

// DTO
import { MetaListDto } from './meta-list.dto';

export class ListResponseDto<T> {
  @Type(() => Array)
  data: T[];

  @Type(() => Object)
  meta: MetaListDto;

  constructor(partial?: Partial<ListResponseDto<T>>) {
    if (partial) {
      Object.assign(this, partial);
    }
  }
}
