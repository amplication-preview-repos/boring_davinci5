import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UtilisateurWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  motDePasse?: StringNullableFilter;
  nom?: StringNullableFilter;
  role?: "Option1";
};
