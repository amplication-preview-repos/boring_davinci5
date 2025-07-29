export type Utilisateur = {
  createdAt: Date;
  email: string | null;
  id: string;
  motDePasse: string | null;
  nom: string | null;
  role?: "Option1" | null;
  updatedAt: Date;
};
