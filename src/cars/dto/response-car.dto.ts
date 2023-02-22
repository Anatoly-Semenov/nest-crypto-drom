import {
  CreateCarDto,
  ResponseModelDto,
  ResponseBrandDto,
  ResponseColorDto,
} from './';

export class ResponseCarDto extends CreateCarDto {
  readonly created_at?: Date;

  readonly updated_at?: Date;

  readonly brand: ResponseBrandDto;

  readonly model: ResponseModelDto;

  readonly color: ResponseColorDto;

  constructor(partial?: Partial<ResponseCarDto>) {
    super();

    if (partial) {
      Object.assign(this, partial);
    }
  }
}
