import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { FactureTitle } from "../facture/FactureTitle";
import { LivraisonTitle } from "../livraison/LivraisonTitle";

export const ClientCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="adresse" multiline source="adresse" />
        <ReferenceArrayInput source="factures" reference="Facture">
          <SelectArrayInput
            optionText={FactureTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="livraisons" reference="Livraison">
          <SelectArrayInput
            optionText={LivraisonTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="nomComplet" source="nomComplet" />
        <TextInput label="telephone" source="telephone" />
      </SimpleForm>
    </Create>
  );
};
