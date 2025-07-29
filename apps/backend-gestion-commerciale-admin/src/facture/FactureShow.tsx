import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { CLIENT_TITLE_FIELD } from "../client/ClientTitle";

export const FactureShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Client" source="client.id" reference="Client">
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
      </SimpleShowLayout>
    </Show>
  );
};
