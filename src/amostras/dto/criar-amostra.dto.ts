import { IsInt, IsString, Min } from "class-validator";

export class CriarAmostraDto {

    @IsString()
    refFornecedor: string;

    @IsString()
    refCliente: string;

    @IsString()
    nomeFornecedor: string;

    @IsString()
    nomeCliente: string;

    @IsString()
    descricaoAmostra: string;

    @IsString()
    corAmostra: string;

    @IsString()
    colecaoAmostra: string;

    @IsString()
    respCustoAmostra: string;

    @IsString()
    enviarAmostra: string;

    @IsString()
    prevFinAmostra: string;

    @IsString()
    amostraFinEm: string;

    @IsString()
    statusEnvioAmostra: string;

    @IsString()
    statusAproAmostra: string;

    @IsInt()
    @Min(0)
    ativo: number;
}
