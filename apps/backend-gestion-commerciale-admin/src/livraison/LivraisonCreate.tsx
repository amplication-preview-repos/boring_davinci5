import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  BooleanInput,
  DateTimeInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { ClientTitle } from "../client/ClientTitle";

export const LivraisonCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="client.id" reference="Client" label="Client">
          <SelectInput optionText={ClientTitle} />
        </ReferenceInput>
        <BooleanInput label="convertiEnFacture" source="convertiEnFacture" />
        <DateTimeInput label="date" source="date" />
        <div />
        <TextInput label="numero" source="numero" />
        <NumberInput label="total" source="total" />
      </SimpleForm>
    </Create>
  );
};
