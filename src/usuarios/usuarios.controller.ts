import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CriarUsuarioDto } from './dto/criar-usuario.dto';
import { AtualizarUsuarioDto } from './dto/atualizar-usuario.dto';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  create(@Body() CriarUsuarioDto: CriarUsuarioDto) {
    return this.usuariosService.create(CriarUsuarioDto);
  }

  @Get()
  findAll() {
    return this.usuariosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    const usuario = await this.usuariosService.findOne(id);
    if (!usuario) {
      throw new NotFoundException('Usuário não encontrado');
    }
    return usuario;
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.usuariosService.remove(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() AtualizarUsuarioDto: AtualizarUsuarioDto) {
    return this.usuariosService.update(id, AtualizarUsuarioDto);
  }
}
