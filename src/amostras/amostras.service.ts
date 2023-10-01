import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CriarAmostraDto } from './dto/criar-amostra.dto';
import { AtualizarAmostraDto } from './dto/atualizar-amostra.dto';
import { FindOneOptions, Repository } from 'typeorm';
import { Amostras } from './entities/amostra.entity';

@Injectable()
export class AmostrasService {
  // obtendo uma instância do repositório que permite realizar operações de acesso ao banco de dados para a entidade Amostras.
  constructor(
    @Inject('AMOSTRAS_REPOSITORY')
    private amostraRepository: Repository<Amostras>,
  ) { }

  async create(criarAmostraDto: CriarAmostraDto): Promise<Amostras> {
    const amostra = this.amostraRepository.create(criarAmostraDto);
    return this.amostraRepository.save(amostra);
  }

  async findAll(): Promise<Amostras[]> {
    return this.amostraRepository.find();
  }

  //Usado o objeto FindOneOptions para criar uma opção de busca com um filtro específico pelo ID da amostra
  async findOne(id: number): Promise<Amostras | undefined> {
    const options: FindOneOptions<Amostras> = { where: { id } };
    return this.amostraRepository.findOne(options);
  }


  async remove(id: number): Promise<void> {
    const amostra = await this.findOne(id); // Usar o findOne para encontrar a amostra

    if (!amostra) {
      throw new NotFoundException(`A amostra com o id ${id} não foi encontrada.`);
    }
    await this.amostraRepository.remove(amostra); // Deletar o amostra
  }

  async update(id: number, atualizarAmostraDto: AtualizarAmostraDto): Promise<Amostras> {
    const amostra = await this.findOne(id); // Usar o findOne para encontrar a amostra

    if (!amostra) {
      throw new NotFoundException(`A amostra com o id ${id} não foi encontrada.`);
    }

    // Atualizar as informações do amostra com base no DTO atualizado
    Object.assign(amostra, atualizarAmostraDto);

    return this.amostraRepository.save(amostra); // Salvar as alterações
  }
}
