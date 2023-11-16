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
import { AmostrasService } from "./amostras.service";
import { CriarAmostraDto } from "./dto/criar-amostra.dto";
import { AtualizarAmostraDto } from "./dto/atualizar-amostra.dto";

@Controller("amostras")
export class AmostrasController {
	constructor(private readonly amostrasService: AmostrasService) {}

	@Post()
	create(@Body() criarAmostraDto: CriarAmostraDto) {
		return this.amostrasService.create(criarAmostraDto);
	}

	@Get()
	findAll() {
		return this.amostrasService.findAll();
	}

	@Get(":id")
	async findOne(@Param("id") id: number) {
		const amostra = await this.amostrasService.findOne(id);
		if (!amostra) {
			throw new NotFoundException("Amostra não encontrada");
		}
		return amostra;
	}

	@Delete(":id")
	remove(@Param("id") id: number) {
		return this.amostrasService.remove(id);
	}

	@Patch(":id")
	update(
		@Param("id") id: number,
		@Body() atualizarAmostraDto: AtualizarAmostraDto
	) {
		return this.amostrasService.update(id, atualizarAmostraDto);
	}
}
