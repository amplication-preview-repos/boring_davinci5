import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ProduitCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="categorie" source="categorie" />
        <TextInput label="codeBarres" source="codeBarres" />
        <TextInput label="image" source="image" />
        <TextInput label="nom" source="nom" />
        <NumberInput label="prixAchat" source="prixAchat" />
        <NumberInput label="prixVente" source="prixVente" />
        <TextInput label="reference" source="reference" />
        <NumberInput step={1} label="stock" source="stock" />
        <TextInput label="variante" multiline source="variante" />
      </SimpleForm>
    </Create>
  );
};
