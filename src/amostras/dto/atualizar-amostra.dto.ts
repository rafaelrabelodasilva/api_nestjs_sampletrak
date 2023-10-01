import { PartialType } from '@nestjs/mapped-types';
import { CriarAmostraDto } from './criar-amostra.dto';

export class AtualizarAmostraDto extends PartialType(CriarAmostraDto) {}
