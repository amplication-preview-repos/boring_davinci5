import { SortOrder } from "../../util/SortOrder";

export type FactureOrderByInput = {
  clientId?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  ligneProduits?: SortOrder;
  netAPayer?: SortOrder;
  numero?: SortOrder;
  pdf?: SortOrder;
  statutPaiement?: SortOrder;
  total?: SortOrder;
  tva?: SortOrder;
  updatedAt?: SortOrder;
};
