import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ProduitWhereInput = {
  categorie?: StringNullableFilter;
  codeBarres?: StringNullableFilter;
  id?: StringFilter;
  image?: StringNullableFilter;
  nom?: StringNullableFilter;
  prixAchat?: FloatNullableFilter;
  prixVente?: FloatNullableFilter;
  reference?: StringNullableFilter;
  stock?: IntNullableFilter;
  variante?: StringNullableFilter;
};
