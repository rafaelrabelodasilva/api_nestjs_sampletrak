import { IsInt, IsString, Min } from "class-validator";

export class CriarClienteDto {
	@IsString()
	nome: string;

	@IsString()
	endereco: string;

	@IsString()
	cidade: string;

	@IsString()
	estadoProvincia: string;

	@IsString()
	pais: string;

	@IsInt()
	@Min(0)
	ativo: number;
}
