import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LivraisonServiceBase } from "./base/livraison.service.base";

@Injectable()
export class LivraisonService extends LivraisonServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
