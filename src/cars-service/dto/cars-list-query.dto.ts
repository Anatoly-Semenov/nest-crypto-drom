import { Type } from 'class-transformer';
import { IsOptional } from 'class-validator';

// Types
import { CarsListFilter, CarsListSorter } from '../interfaces';

export class CarsListQueryDto {
  @IsOptional()
  @Type(() => Object)
  readonly filter: CarsListFilter;

  @IsOptional()
  @Type(() => Object)
  readonly sort: CarsListSorter;

  @IsOptional()
  @Type(() => Number)
  readonly limit: number;

  @IsOptional()
  @Type(() => Number)
  readonly page: number;

  constructor(partial?: Partial<CarsListQueryDto>) {
    if (partial) {
      Object.assign(this, partial);
    }
  }
}
