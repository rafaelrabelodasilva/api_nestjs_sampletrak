import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { CriarClienteDto } from "./dto/criar-cliente.dto";
import { AtualizarClienteDto } from "./dto/atualizar-cliente.dto";
import { FindOneOptions, Repository } from "typeorm";
import { Clientes } from "./entities/cliente.entity";

@Injectable()
export class ClientesService {
	// obtendo uma instância do repositório que permite realizar operações de acesso ao banco de dados para a entidade Clientes.
	constructor(
		@Inject("CLIENTES_REPOSITORY")
		private clienteRepository: Repository<Clientes>
	) {}

	async create(criarClienteDto: CriarClienteDto): Promise<Clientes> {
		const cliente = this.clienteRepository.create(criarClienteDto);
		return this.clienteRepository.save(cliente);
	}

	async findAll(): Promise<Clientes[]> {
		return this.clienteRepository.find();
	}

	//Usado o objeto FindOneOptions para criar uma opção de busca com um filtro específico pelo ID do cliente
	async findOne(id: number): Promise<Clientes | undefined> {
		const options: FindOneOptions<Clientes> = { where: { id } };
		return this.clienteRepository.findOne(options);
	}

	async remove(id: number): Promise<void> {
		const cliente = await this.findOne(id); // Usar o findOne para encontrar o cliente

		if (!cliente) {
			throw new NotFoundException(
				`O cliente com o id ${id} não foi encontrado.`
			);
		}
		await this.clienteRepository.remove(cliente); // Deletar o cliente
	}

	async update(
		id: number,
		atualizarClienteDto: AtualizarClienteDto
	): Promise<Clientes> {
		const cliente = await this.findOne(id); // Usar o findOne para encontrar o cliente

		if (!cliente) {
			throw new NotFoundException(
				`O cliente com o id ${id} não foi encontrado.`
			);
		}

		// Atualizar as informações do cliente com base no DTO atualizado
		Object.assign(cliente, atualizarClienteDto);

		return this.clienteRepository.save(cliente); // Salvar as alterações
	}
}
