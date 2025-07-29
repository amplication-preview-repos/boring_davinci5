import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type LivraisonUpdateInput = {
  client?: ClientWhereUniqueInput | null;
  convertiEnFacture?: boolean | null;
  date?: Date | null;
  ligneProduits?: InputJsonValue;
  numero?: string | null;
  total?: number | null;
};
