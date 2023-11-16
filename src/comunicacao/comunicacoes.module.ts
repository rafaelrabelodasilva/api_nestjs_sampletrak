import { Module } from "@nestjs/common";
import { ComunicacoesService } from "./comunicacoes.service";
import { ComunicacoesController } from "./comunicacoes.controller";
import { DatabaseModule } from "src/database/database.module";
import { comunicacoesProviders } from "./comunicacoes.providers";

@Module({
	imports: [DatabaseModule],
	controllers: [ComunicacoesController],
	providers: [...comunicacoesProviders, ComunicacoesService],
})
export class ComunicacoesModule {}
