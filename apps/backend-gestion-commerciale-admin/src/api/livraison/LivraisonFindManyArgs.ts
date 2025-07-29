import { LivraisonWhereInput } from "./LivraisonWhereInput";
import { LivraisonOrderByInput } from "./LivraisonOrderByInput";

export type LivraisonFindManyArgs = {
  where?: LivraisonWhereInput;
  orderBy?: Array<LivraisonOrderByInput>;
  skip?: number;
  take?: number;
};
