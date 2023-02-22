export class ResponseModelDto {
  id: number;

  name: string;

  brand_id: number;

  constructor(partial?: Partial<ResponseModelDto>) {
    if (partial) {
      Object.assign(this, partial);
    }
  }
}
