import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { fornecedoresService } from './fornecedores.service';
import { CriarFornecedorDto } from './dto/criar-fornecedor.dto';
import { AtualizarFornecedorDto } from './dto/atualizar-fornecedor.dto';

@Controller('suppliers')
export class FornecedoresController {
  constructor(private readonly fornecedoresService: fornecedoresService) { }

  @Post()
  create(@Body() criarFornecedorDto: CriarFornecedorDto) {
    return this.fornecedoresService.create(criarFornecedorDto);
  }

  @Get()
  findAll() {
    return this.fornecedoresService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    const fornecedor = await this.fornecedoresService.findOne(id);
    if (!fornecedor) {
      throw new NotFoundException('Fornecedor não encontrado');
    }
    return fornecedor;
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.fornecedoresService.remove(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() atualizarFornecedorDto: AtualizarFornecedorDto) {
    return this.fornecedoresService.update(id, atualizarFornecedorDto);
  }
}
