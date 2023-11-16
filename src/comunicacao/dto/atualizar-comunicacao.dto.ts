import { PartialType } from "@nestjs/mapped-types";
import { CriarComunicacaoDto } from "./criar-comunicacao.dto";

export class AtualizarComunicacaoDto extends PartialType(CriarComunicacaoDto) {}
