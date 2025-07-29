import { SortOrder } from "../../util/SortOrder";

export type ClientOrderByInput = {
  adresse?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  nomComplet?: SortOrder;
  telephone?: SortOrder;
  updatedAt?: SortOrder;
};
