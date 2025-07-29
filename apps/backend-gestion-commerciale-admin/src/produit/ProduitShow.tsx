import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const ProduitShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="categorie" source="categorie" />
        <TextField label="codeBarres" source="codeBarres" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="image" source="image" />
        <TextField label="nom" source="nom" />
        <TextField label="prixAchat" source="prixAchat" />
        <TextField label="prixVente" source="prixVente" />
        <TextField label="reference" source="reference" />
        <TextField label="stock" source="stock" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="variante" source="variante" />
      </SimpleShowLayout>
    </Show>
  );
};
