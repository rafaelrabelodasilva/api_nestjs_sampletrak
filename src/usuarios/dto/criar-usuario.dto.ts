import { IsEmail, IsInt, IsNotEmpty, IsString, Min, MinLength, IsDate } from 'class-validator';


export class CriarUsuarioDto {

    @IsString()
    primeiroNome: string;

    @IsString()
    sobrenome: string;

    @IsString()
    dataNascimento: Date;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    senha: string;

    @IsInt()
    @Min(0)
    ativo: number;
}
