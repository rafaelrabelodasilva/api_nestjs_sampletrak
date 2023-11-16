import { IsInt, IsString, IsEmail, Min } from "class-validator";

export class CriarComunicacaoDto {
	@IsString()
	nome: string;

	@IsEmail()
	email: string;

	@IsString()
	assunto: string;

	@IsInt()
	@Min(0)
	ativo: number;
}
