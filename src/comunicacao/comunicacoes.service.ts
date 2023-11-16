import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { CriarComunicacaoDto } from "./dto/criar-comunicacao.dto";
import { AtualizarComunicacaoDto } from "./dto/atualizar-comunicacao.dto";
import { FindOneOptions, Repository } from "typeorm";
import { Comunicacoes } from "./entities/comunicacao.entity";

@Injectable()
export class ComunicacoesService {
	// obtendo uma instância do repositório que permite realizar operações de acesso ao banco de dados para a entidade Comunicacoes.
	constructor(
		@Inject("COMUNICACOES_REPOSITORY")
		private comunicacaoRepository: Repository<Comunicacoes>
	) {}

	async create(
		criarComunicacaoDto: CriarComunicacaoDto
	): Promise<Comunicacoes> {
		const cliente = this.comunicacaoRepository.create(criarComunicacaoDto);
		return this.comunicacaoRepository.save(cliente);
	}

	async findAll(): Promise<Comunicacoes[]> {
		return this.comunicacaoRepository.find();
	}

	//Usado o objeto FindOneOptions para criar uma opção de busca com um filtro específico pelo ID da comunicação
	async findOne(id: number): Promise<Comunicacoes | undefined> {
		const options: FindOneOptions<Comunicacoes> = { where: { id } };
		return this.comunicacaoRepository.findOne(options);
	}

	async remove(id: number): Promise<void> {
		const comunicacao = await this.findOne(id); // Usar o findOne para encontrar a comunicação

		if (!comunicacao) {
			throw new NotFoundException(
				`A comunicação com o id ${id} não foi encontrada.`
			);
		}
		await this.comunicacaoRepository.remove(comunicacao); // Deletar a comunicação
	}

	async update(
		id: number,
		atualizarComunicacaoDto: AtualizarComunicacaoDto
	): Promise<Comunicacoes> {
		const comunicacao = await this.findOne(id); // Usar o findOne para encontrar a comunicação

		if (!comunicacao) {
			throw new NotFoundException(
				`O cliente com o id ${id} não foi encontrado.`
			);
		}

		// Atualizar as informações da comunicação com base no DTO atualizado
		Object.assign(comunicacao, atualizarComunicacaoDto);

		return this.comunicacaoRepository.save(comunicacao); // Salvar as alterações
	}
}
