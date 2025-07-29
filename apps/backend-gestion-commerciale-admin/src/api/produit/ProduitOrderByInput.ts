import { SortOrder } from "../../util/SortOrder";

export type ProduitOrderByInput = {
  categorie?: SortOrder;
  codeBarres?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  nom?: SortOrder;
  prixAchat?: SortOrder;
  prixVente?: SortOrder;
  reference?: SortOrder;
  stock?: SortOrder;
  updatedAt?: SortOrder;
  variante?: SortOrder;
};
