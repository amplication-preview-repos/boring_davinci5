import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CLIENT_TITLE_FIELD } from "../client/ClientTitle";

export const FactureList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Factures"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
