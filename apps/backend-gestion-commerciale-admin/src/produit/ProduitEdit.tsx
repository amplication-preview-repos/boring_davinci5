import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ProduitEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
