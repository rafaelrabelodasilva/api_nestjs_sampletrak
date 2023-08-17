import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { CriarFornecedorDto } from './dto/criar-fornecedor.dto';
import { AtualizarFornecedorDto } from './dto/atualizar-fornecedor.dto';
import { Fornecedores } from './entities/fornecedor.entity';
import { Repository } from 'typeorm';
import { FindOneOptions } from 'typeorm'; // Importe o FindOneOptions


// o serviço FornecedoresService é definido como um Injectable do NestJS, o que significa que ele pode ser injetado (usado) em outras partes da aplicação que dependem dele
@Injectable()
export class FornecedoresService {

    // obtendo uma instância do repositório que permite realizar operações de acesso ao banco de dados para a entidade Fornecedores.
    constructor(
        @Inject('FORNECEDORES_REPOSITORY')
        private fornecedorRepository: Repository<Fornecedores>,
    ) { }

    async create(criarFornecedorDto: CriarFornecedorDto): Promise<Fornecedores> {
        const fornecedor = this.fornecedorRepository.create(criarFornecedorDto);
        return this.fornecedorRepository.save(fornecedor);
    }

    async findAll(): Promise<Fornecedores[]> {
        return this.fornecedorRepository.find();
    }

    //Usado o objeto FindOneOptions para criar uma opção de busca com um filtro específico pelo ID do fornecedor
    async findOne(id: number): Promise<Fornecedores | undefined> {
        const options: FindOneOptions<Fornecedores> = { where: { id } };
        return this.fornecedorRepository.findOne(options);
    }

    async remove(id: number): Promise<void> {
        const fornecedor = await this.findOne(id); // Usar o findOne para encontrar o fornecedor

        if (!fornecedor) {
            throw new NotFoundException(`O fornecedor com o id ${id} não foi encontrado.`);
        }
        await this.fornecedorRepository.remove(fornecedor); // Deletar o fornecedor
    }

    async update(id: number, atualizarFornecedorDto: AtualizarFornecedorDto): Promise<Fornecedores> {
        const fornecedor = await this.findOne(id); // Usar o findOne para encontrar o fornecedor

        if (!fornecedor) {
            throw new NotFoundException(`O fornecedor com o id ${id} não foi encontrado.`);
        }

        // Atualizar as informações do fornecedor com base no DTO atualizado
        Object.assign(fornecedor, atualizarFornecedorDto);

        return this.fornecedorRepository.save(fornecedor); // Salvar as alterações
    }

}