import { Client } from "../client/Client";
import { JsonValue } from "type-fest";

export type Facture = {
  client?: Client | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  ligneProduits: JsonValue;
  netAPayer: number | null;
  numero: string | null;
  pdf: string | null;
  statutPaiement: string | null;
  total: number | null;
  tva: number | null;
  updatedAt: Date;
};
