import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { CriarFornecedorDto } from './dto/criar-fornecedor.dto';
import { AtualizarFornecedorDto } from './dto/atualizar-fornecedor.dto';
import { Fornecedores } from './entities/fornecedor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class fornecedoresService {

    constructor(
        @Inject('FORNECEDORES_REPOSITORY')
        private fornecedorRepository: Repository<Fornecedores>,
    ) { }

    async findAll(): Promise<Fornecedores[]> {
        return this.fornecedorRepository.find();
    }


    private fornecedores: Fornecedores[] = [];

    create(criarFornecedorDto: CriarFornecedorDto) {
        const currentMaxId = this.fornecedores[this.fornecedores.length - 1]?.id || 0;

        const id = currentMaxId + 1;

        const fornecedor = {
            id,
            ...criarFornecedorDto,
        };

        this.fornecedores.push(fornecedor);
        return fornecedor;
    }

    // findAll() {
    //     return this.fornecedores;
    // }

    findOne(id: number) {
        const index = this.fornecedores.findIndex(
            (fornecedor) => fornecedor.id === id
        );

        return this.fornecedores[index];
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
