import { CreateCarDto } from './create-car.dto';

export class ResponseCarDto extends CreateCarDto {
  created_at: Date;

  updated_at: Date;

  constructor(partial?: Partial<ResponseCarDto>) {
    super();

    if (partial) {
      Object.assign(this, partial);
    }
  }
}
