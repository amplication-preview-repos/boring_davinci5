import { FactureUpdateManyWithoutClientsInput } from "./FactureUpdateManyWithoutClientsInput";
import { LivraisonUpdateManyWithoutClientsInput } from "./LivraisonUpdateManyWithoutClientsInput";

export type ClientUpdateInput = {
  adresse?: string | null;
  factures?: FactureUpdateManyWithoutClientsInput;
  livraisons?: LivraisonUpdateManyWithoutClientsInput;
  nomComplet?: string | null;
  telephone?: string | null;
};
