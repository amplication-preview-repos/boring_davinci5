import { Facture } from "../facture/Facture";
import { Livraison } from "../livraison/Livraison";

export type Client = {
  adresse: string | null;
  createdAt: Date;
  factures?: Array<Facture>;
  id: string;
  livraisons?: Array<Livraison>;
  nomComplet: string | null;
  telephone: string | null;
  updatedAt: Date;
};
