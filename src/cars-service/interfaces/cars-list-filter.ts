export interface CarsListFilter {
  readonly brand_id?: number;
  readonly model_id?: number;
  readonly color_ids?: string;
  readonly price_rub_from?: number;
  readonly price_rub_to?: number;
  readonly year_from?: number;
  readonly year_to?: number;
}
