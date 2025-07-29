import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FactureListRelationFilter } from "../facture/FactureListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { LivraisonListRelationFilter } from "../livraison/LivraisonListRelationFilter";

export type ClientWhereInput = {
  adresse?: StringNullableFilter;
  factures?: FactureListRelationFilter;
  id?: StringFilter;
  livraisons?: LivraisonListRelationFilter;
  nomComplet?: StringNullableFilter;
  telephone?: StringNullableFilter;
};
