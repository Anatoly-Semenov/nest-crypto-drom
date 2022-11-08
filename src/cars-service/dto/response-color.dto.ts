export class ResponseColorDto {
  id: number;

  name: string;

  hex: string;

  constructor(partial?: Partial<ResponseColorDto>) {
    if (partial) {
      Object.assign(this, partial);
    }
  }
}
