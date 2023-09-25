import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CriarProdutoDto } from './dto/criar-produto.dto';
import { AtualizarProdutoDto } from './dto/atualizar-produto.dto';
import { Produtos } from './entities/produto.entity';
import { FindOneOptions, Repository } from 'typeorm';

@Injectable()
export class ProdutosService {
    // obtendo uma instância do repositório que permite realizar operações de acesso ao banco de dados para a entidade Produtos.
    constructor(
        @Inject('PRODUTOS_REPOSITORY')
        private produtoRepository: Repository<Produtos>,
    ) { }

    async create(CriarProdutoDto: CriarProdutoDto): Promise<Produtos> {
        const produto = this.produtoRepository.create(CriarProdutoDto);
        return this.produtoRepository.save(produto);
    }

    async findAll(): Promise<Produtos[]> {
        return this.produtoRepository.find();
    }

    //Usado o objeto FindOneOptions para criar uma opção de busca com um filtro específico pelo ID do produto
    async findOne(id: number): Promise<Produtos | undefined> {
        const options: FindOneOptions<Produtos> = { where: { id } };
        return this.produtoRepository.findOne(options);
    }

    async remove(id: number): Promise<void> {
        const produto = await this.findOne(id); // Usar o findOne para encontrar o produto

        if (!produto) {
            throw new NotFoundException(`O produto com o id ${id} não foi encontrado.`);
        }
        await this.produtoRepository.remove(produto); // Deletar o usuario
    }

    async update(id: number, AtualizarProdutoDto: AtualizarProdutoDto): Promise<Produtos> {
        const produto = await this.findOne(id); // Usar o findOne para encontrar o produto

        if (!produto) {
            throw new NotFoundException(`O produto com o id ${id} não foi encontrado.`);
        }

        // Atualizar as informações do produto com base no DTO atualizado
        Object.assign(produto, AtualizarProdutoDto);

        return this.produtoRepository.save(produto); // Salvar as alterações
    }
}

