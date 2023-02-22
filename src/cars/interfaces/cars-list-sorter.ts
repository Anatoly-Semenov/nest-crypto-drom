import { SortOrder } from '../../system/enums';

export interface CarsListSorter {
  readonly year?: SortOrder;
  readonly price_rub?: SortOrder;
}
