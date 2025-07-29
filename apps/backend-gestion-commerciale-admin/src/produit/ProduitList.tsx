import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ProduitList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Produits"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        <TextField label="variante" source="variante" />{" "}
      </Datagrid>
    </List>
  );
};
