export class CreateCarDto {
  brand: string;

  model: string;

  year: number;

  hp: number;

  // price: {
  //   rub: number;
  //   eth: number;
  //   btc: number;
  //   usdt: number;
  // };

  color: string;

  // region_id: number;

  price_rub: number | null;

  img_preview: string;
}
