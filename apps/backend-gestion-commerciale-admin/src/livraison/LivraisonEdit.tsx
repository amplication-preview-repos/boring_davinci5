import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  BooleanInput,
  DateTimeInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { ClientTitle } from "../client/ClientTitle";

export const LivraisonEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
