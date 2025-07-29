import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { ClientTitle } from "../client/ClientTitle";

export const FactureEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
