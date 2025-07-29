import { SortOrder } from "../../util/SortOrder";

export type LivraisonOrderByInput = {
  clientId?: SortOrder;
  convertiEnFacture?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  ligneProduits?: SortOrder;
  numero?: SortOrder;
  total?: SortOrder;
  updatedAt?: SortOrder;
};
