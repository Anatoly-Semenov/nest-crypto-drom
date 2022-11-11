import { SortOrder } from '../../system/enums';

export interface CarsListSorter {
  readonly date?: SortOrder;
  readonly price_rub?: SortOrder;
  readonly year?: SortOrder;
}
