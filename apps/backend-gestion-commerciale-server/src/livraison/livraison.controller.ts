import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LivraisonService } from "./livraison.service";
import { LivraisonControllerBase } from "./base/livraison.controller.base";

@swagger.ApiTags("livraisons")
@common.Controller("livraisons")
export class LivraisonController extends LivraisonControllerBase {
  constructor(protected readonly service: LivraisonService) {
    super(service);
  }
}
