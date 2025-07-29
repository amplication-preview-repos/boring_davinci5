import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type LivraisonWhereInput = {
  client?: ClientWhereUniqueInput;
  convertiEnFacture?: BooleanNullableFilter;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  ligneProduits?: JsonFilter;
  numero?: StringNullableFilter;
  total?: FloatNullableFilter;
};
