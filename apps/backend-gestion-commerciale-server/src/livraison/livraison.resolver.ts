import * as graphql from "@nestjs/graphql";
import { LivraisonResolverBase } from "./base/livraison.resolver.base";
import { Livraison } from "./base/Livraison";
import { LivraisonService } from "./livraison.service";

@graphql.Resolver(() => Livraison)
export class LivraisonResolver extends LivraisonResolverBase {
  constructor(protected readonly service: LivraisonService) {
    super(service);
  }
}
