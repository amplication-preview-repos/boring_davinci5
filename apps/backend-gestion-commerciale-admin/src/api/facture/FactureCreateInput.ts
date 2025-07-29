import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type FactureCreateInput = {
  client?: ClientWhereUniqueInput | null;
  date?: Date | null;
  ligneProduits?: InputJsonValue;
  netAPayer?: number | null;
  numero?: string | null;
  pdf?: string | null;
  statutPaiement?: string | null;
  total?: number | null;
  tva?: number | null;
};
