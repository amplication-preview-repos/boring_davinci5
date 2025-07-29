import { Client as TClient } from "../api/client/Client";

export const CLIENT_TITLE_FIELD = "nomComplet";

export const ClientTitle = (record: TClient): string => {
  return record.nomComplet?.toString() || String(record.id);
};
