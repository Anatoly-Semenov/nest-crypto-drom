export class CreateCarDto {
  brand_id: number;

  model_id: number;

  year: number;

  hp: number;

  // price: {
  //   rub: number;
  //   eth: number;
  //   btc: number;
  //   usdt: number;
  // };

  color_id: number;

  // region_id: number;

  price_rub: number | null;

  img_preview: string;

  constructor(partial?: Partial<CreateCarDto>) {
    if (partial) {
      Object.assign(this, partial);
    }
  }
}
