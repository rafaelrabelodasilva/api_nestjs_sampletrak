import { IsEmail, IsInt, IsString, Min, MinLength } from 'class-validator';

export class CreateSupplierDto {
    // @IsEmail()
    // email: string;

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

    // @IsString()
    // @MinLength(6)
    // password: string;
}
