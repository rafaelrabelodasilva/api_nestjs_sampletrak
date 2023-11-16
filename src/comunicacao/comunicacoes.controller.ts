import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
	NotFoundException,
} from "@nestjs/common";
import { ComunicacoesService } from "./comunicacoes.service";
import { CriarComunicacaoDto } from "./dto/criar-comunicacao.dto";
import { AtualizarComunicacaoDto } from "./dto/atualizar-comunicacao.dto";

@Controller("comunicacoes")
export class ComunicacoesController {
	constructor(private readonly comunicacoesService: ComunicacoesService) {}

	@Post()
	create(@Body() criarComunicacaoDto: CriarComunicacaoDto) {
		return this.comunicacoesService.create(criarComunicacaoDto);
	}

	@Get()
	findAll() {
		return this.comunicacoesService.findAll();
	}

	@Get(":id")
	async findOne(@Param("id") id: number) {
		const comunicacao = await this.comunicacoesService.findOne(id);
		if (!comunicacao) {
			throw new NotFoundException("Comunicação não encontrada");
		}
		return comunicacao;
	}

	@Delete(":id")
	remove(@Param("id") id: number) {
		return this.comunicacoesService.remove(id);
	}

	@Patch(":id")
	update(
		@Param("id") id: number,
		@Body() atualizarComunicacaoDto: AtualizarComunicacaoDto
	) {
		return this.comunicacoesService.update(id, atualizarComunicacaoDto);
	}
}
