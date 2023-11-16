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
import { ClientesService } from "./clientes.service";
import { CriarClienteDto } from "./dto/criar-cliente.dto";
import { AtualizarClienteDto } from "./dto/atualizar-cliente.dto";

@Controller("clientes")
export class ClientesController {
	constructor(private readonly clientesService: ClientesService) {}

	@Post()
	create(@Body() criarClienteDto: CriarClienteDto) {
		return this.clientesService.create(criarClienteDto);
	}

	@Get()
	findAll() {
		return this.clientesService.findAll();
	}

	@Get(":id")
	async findOne(@Param("id") id: number) {
		const cliente = await this.clientesService.findOne(id);
		if (!cliente) {
			throw new NotFoundException("Cliente não encontrado");
		}
		return cliente;
	}

	@Delete(":id")
	remove(@Param("id") id: number) {
		return this.clientesService.remove(id);
	}

	@Patch(":id")
	update(
		@Param("id") id: number,
		@Body() atualizarClienteDto: AtualizarClienteDto
	) {
		return this.clientesService.update(id, atualizarClienteDto);
	}
}
