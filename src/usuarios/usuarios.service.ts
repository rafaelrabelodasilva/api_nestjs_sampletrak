import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CriarUsuarioDto } from './dto/criar-usuario.dto';
import { AtualizarUsuarioDto } from './dto/atualizar-usuario.dto';
import { Usuarios } from './entities/usuario.entity';
import { FindOneOptions, Repository } from 'typeorm';

@Injectable()
export class UsuariosService {

  // obtendo uma instância do repositório que permite realizar operações de acesso ao banco de dados para a entidade Usuarios.
  constructor(
    @Inject('USUARIOS_REPOSITORY')
    private usuarioRepository: Repository<Usuarios>,
  ) { }

  async create(CriarUsuarioDto: CriarUsuarioDto): Promise<Usuarios> {
    const usuario = this.usuarioRepository.create(CriarUsuarioDto);
    return this.usuarioRepository.save(usuario);
  }

  async findAll(): Promise<Usuarios[]> {
    return this.usuarioRepository.find();
  }

  //Usado o objeto FindOneOptions para criar uma opção de busca com um filtro específico pelo ID do usuario
  async findOne(id: number): Promise<Usuarios | undefined> {
    const options: FindOneOptions<Usuarios> = { where: { id } };
    return this.usuarioRepository.findOne(options);
  }

  async remove(id: number): Promise<void> {
    const usuario = await this.findOne(id); // Usar o findOne para encontrar o usuario

    if (!usuario) {
      throw new NotFoundException(`O usuario com o id ${id} não foi encontrado.`);
    }
    await this.usuarioRepository.remove(usuario); // Deletar o usuario
  }

  async update(id: number, AtualizarUsuarioDto: AtualizarUsuarioDto): Promise<Usuarios> {
    const usuario = await this.findOne(id); // Usar o findOne para encontrar o usuario

    if (!usuario) {
      throw new NotFoundException(`O usuario com o id ${id} não foi encontrado.`);
    }

    // Atualizar as informações do usuario com base no DTO atualizado
    Object.assign(usuario, AtualizarUsuarioDto);

    return this.usuarioRepository.save(usuario); // Salvar as alterações
  }
}
