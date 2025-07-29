import { Module } from "@nestjs/common";
import { LivraisonModuleBase } from "./base/livraison.module.base";
import { LivraisonService } from "./livraison.service";
import { LivraisonController } from "./livraison.controller";
import { LivraisonResolver } from "./livraison.resolver";

@Module({
  imports: [LivraisonModuleBase],
  controllers: [LivraisonController],
  providers: [LivraisonService, LivraisonResolver],
  exports: [LivraisonService],
})
export class LivraisonModule {}
