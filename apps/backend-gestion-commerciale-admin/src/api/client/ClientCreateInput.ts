import { FactureCreateNestedManyWithoutClientsInput } from "./FactureCreateNestedManyWithoutClientsInput";
import { LivraisonCreateNestedManyWithoutClientsInput } from "./LivraisonCreateNestedManyWithoutClientsInput";

export type ClientCreateInput = {
  adresse?: string | null;
  factures?: FactureCreateNestedManyWithoutClientsInput;
  livraisons?: LivraisonCreateNestedManyWithoutClientsInput;
  nomComplet?: string | null;
  telephone?: string | null;
};
