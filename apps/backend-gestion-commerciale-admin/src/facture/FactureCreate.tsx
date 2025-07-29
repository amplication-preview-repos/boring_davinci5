import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { ClientTitle } from "../client/ClientTitle";

export const FactureCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="client.id" reference="Client" label="Client">
          <SelectInput optionText={ClientTitle} />
        </ReferenceInput>
        <DateTimeInput label="date" source="date" />
        <div />
        <NumberInput label="netAPayer" source="netAPayer" />
        <TextInput label="numero" source="numero" />
        <TextInput label="pdf" source="pdf" />
        <TextInput label="statutPaiement" source="statutPaiement" />
        <NumberInput label="total" source="total" />
        <NumberInput label="tva" source="tva" />
      </SimpleForm>
    </Create>
  );
};
