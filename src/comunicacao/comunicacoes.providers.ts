import { DataSource } from "typeorm";
import { Comunicacoes } from "./entities/comunicacao.entity";

export const comunicacoesProviders = [
	{
		provide: "COMUNICACOES_REPOSITORY",
		useFactory: (dataSource: DataSource) =>
			dataSource.getRepository(Comunicacoes),
		inject: ["DATA_SOURCE"],
	},
];
