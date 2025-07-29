import { Facture as TFacture } from "../api/facture/Facture";

export const FACTURE_TITLE_FIELD = "numero";

export const FactureTitle = (record: TFacture): string => {
  return record.numero?.toString() || String(record.id);
};
