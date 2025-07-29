import { Client } from "../client/Client";
import { JsonValue } from "type-fest";

export type Livraison = {
  client?: Client | null;
  convertiEnFacture: boolean | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  ligneProduits: JsonValue;
  numero: string | null;
  total: number | null;
  updatedAt: Date;
};
