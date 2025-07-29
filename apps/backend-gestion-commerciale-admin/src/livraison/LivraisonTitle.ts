import { Livraison as TLivraison } from "../api/livraison/Livraison";

export const LIVRAISON_TITLE_FIELD = "numero";

export const LivraisonTitle = (record: TLivraison): string => {
  return record.numero?.toString() || String(record.id);
};
