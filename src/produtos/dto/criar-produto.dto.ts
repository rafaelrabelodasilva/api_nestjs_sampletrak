import { IsInt, IsString, Min, } from 'class-validator';


export class CriarProdutoDto {

    @IsString()
    nome: string;

    @IsString()
    genero: string;

    @IsString()
    categoria: string;

    @IsString()
    anuencia: string;

    @IsString()
    ncm: string;

    @IsInt()
    @Min(0)
    ativo: number;
}
