import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { CLIENT_TITLE_FIELD } from "./ClientTitle";

export const ClientShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="adresse" source="adresse" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="nomComplet" source="nomComplet" />
        <TextField label="telephone" source="telephone" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Facture"
          target="clientId"
          label="Factures"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="Client"
              source="client.id"
              reference="Client"
            >
              <TextField source={CLIENT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="date" source="date" />
            <TextField label="ID" source="id" />
            <TextField label="ligneProduits" source="ligneProduits" />
            <TextField label="netAPayer" source="netAPayer" />
            <TextField label="numero" source="numero" />
            <TextField label="pdf" source="pdf" />
            <TextField label="statutPaiement" source="statutPaiement" />
            <TextField label="total" source="total" />
            <TextField label="tva" source="tva" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Livraison"
          target="clientId"
          label="Livraisons"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="Client"
              source="client.id"
              reference="Client"
            >
              <TextField source={CLIENT_TITLE_FIELD} />
            </ReferenceField>
            <BooleanField
              label="convertiEnFacture"
              source="convertiEnFacture"
            />
            <DateField source="createdAt" label="Created At" />
            <TextField label="date" source="date" />
            <TextField label="ID" source="id" />
            <TextField label="ligneProduits" source="ligneProduits" />
            <TextField label="numero" source="numero" />
            <TextField label="total" source="total" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
