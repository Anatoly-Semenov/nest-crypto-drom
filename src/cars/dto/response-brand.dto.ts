export class ResponseBrandDto {
  id: number;

  name: string;

  constructor(partial?: Partial<ResponseBrandDto>) {
    if (partial) {
      Object.assign(this, partial);
    }
  }
}
