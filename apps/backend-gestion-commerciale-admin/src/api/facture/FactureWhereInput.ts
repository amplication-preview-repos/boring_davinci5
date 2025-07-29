import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type FactureWhereInput = {
  client?: ClientWhereUniqueInput;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  ligneProduits?: JsonFilter;
  netAPayer?: FloatNullableFilter;
  numero?: StringNullableFilter;
  pdf?: StringNullableFilter;
  statutPaiement?: StringNullableFilter;
  total?: FloatNullableFilter;
  tva?: FloatNullableFilter;
};
