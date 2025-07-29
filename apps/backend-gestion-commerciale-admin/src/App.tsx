import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UtilisateurList } from "./utilisateur/UtilisateurList";
import { UtilisateurCreate } from "./utilisateur/UtilisateurCreate";
import { UtilisateurEdit } from "./utilisateur/UtilisateurEdit";
import { UtilisateurShow } from "./utilisateur/UtilisateurShow";
import { ClientList } from "./client/ClientList";
import { ClientCreate } from "./client/ClientCreate";
import { ClientEdit } from "./client/ClientEdit";
import { ClientShow } from "./client/ClientShow";
import { ProduitList } from "./produit/ProduitList";
import { ProduitCreate } from "./produit/ProduitCreate";
import { ProduitEdit } from "./produit/ProduitEdit";
import { ProduitShow } from "./produit/ProduitShow";
import { LivraisonList } from "./livraison/LivraisonList";
import { LivraisonCreate } from "./livraison/LivraisonCreate";
import { LivraisonEdit } from "./livraison/LivraisonEdit";
import { LivraisonShow } from "./livraison/LivraisonShow";
import { FactureList } from "./facture/FactureList";
import { FactureCreate } from "./facture/FactureCreate";
import { FactureEdit } from "./facture/FactureEdit";
import { FactureShow } from "./facture/FactureShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"Backend Gestion Commerciale"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Utilisateur"
          list={UtilisateurList}
          edit={UtilisateurEdit}
          create={UtilisateurCreate}
          show={UtilisateurShow}
        />
        <Resource
          name="Client"
          list={ClientList}
          edit={ClientEdit}
          create={ClientCreate}
          show={ClientShow}
        />
        <Resource
          name="Produit"
          list={ProduitList}
          edit={ProduitEdit}
          create={ProduitCreate}
          show={ProduitShow}
        />
        <Resource
          name="Livraison"
          list={LivraisonList}
          edit={LivraisonEdit}
          create={LivraisonCreate}
          show={LivraisonShow}
        />
        <Resource
          name="Facture"
          list={FactureList}
          edit={FactureEdit}
          create={FactureCreate}
          show={FactureShow}
        />
      </Admin>
    </div>
  );
};

export default App;
