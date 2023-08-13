import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { CriarFornecedorDto } from './dto/criar-fornecedor.dto';
import { AtualizarFornecedorDto } from './dto/atualizar-fornecedor.dto';
import { Fornecedores } from './entities/fornecedor.entity';
import { Repository } from 'typeorm';

// o serviço fornecedoresService é definido como um Injectable do NestJS, o que significa que ele pode ser injetado (usado) em outras partes da aplicação que dependem dele
@Injectable()
export class fornecedoresService {

    // obtendo uma instância do repositório que permite realizar operações de acesso ao banco de dados para a entidade Fornecedores.
    constructor(
        @Inject('FORNECEDORES_REPOSITORY')
        private fornecedorRepository: Repository<Fornecedores>,
    ) { }

    async findAll(): Promise<Fornecedores[]> {
        return this.fornecedorRepository.find();
    }

    update(id: number, atualizarFornecedorDto: AtualizarFornecedorDto) {
        const fornecedor = this.findOne(id);

        const novoFornecedor = {
            ...fornecedor,
            ...atualizarFornecedorDto,
        };

        const index = this.fornecedores.findIndex(
            (fornecedor) => fornecedor.id === id
        );

        this.fornecedores[index] = novoFornecedor;
        return novoFornecedor;
    }

    async create(criarFornecedorDto: CriarFornecedorDto): Promise<Fornecedores> {
        const fornecedor = this.fornecedorRepository.create(criarFornecedorDto);
        return this.fornecedorRepository.save(fornecedor);
    }


    private fornecedores: Fornecedores[] = [];


    findOne(id: number) {
        const index = this.fornecedores.findIndex(
            (fornecedor) => fornecedor.id === id
        );

        return this.fornecedores[index];
    }

    // update(id: number, atualizarFornecedorDto: AtualizarFornecedorDto) {
    //     const fornecedor = this.findOne(id);

    //     const novoFornecedor = {
    //         ...fornecedor,
    //         ...atualizarFornecedorDto,
    //     };

    //     const index = this.fornecedores.findIndex(
    //         (fornecedor) => fornecedor.id === id
    //     );

    //     this.fornecedores[index] = novoFornecedor;
    //     return novoFornecedor;
    // }

    remove(id: number) {
        const index = this.fornecedores.findIndex(
            (fornecedor) => fornecedor.id === id
        );

        if (index === -1) {
            throw new NotFoundException(`O fornecedor com o id ${id} não foi encontrado.`)
        }
        this.fornecedores.splice(index, 1);
    }
}
