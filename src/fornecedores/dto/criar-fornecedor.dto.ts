// os DTOs são amplamente utilizados para validar e estruturar os dados que fluem através das APIs
// Validação de Dados: Os DTOs permitem que você defina regras de validação diretamente nas classes, usando decoradores da biblioteca class-validator. 
// Estruturação dos Dados: Ao usar DTOs, você pode definir explicitamente quais campos são esperados em cada solicitação ou resposta.

import { IsEmail, IsInt, IsString, Min, MinLength } from 'class-validator';

export class CriarFornecedorDto {
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
