import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { CriarProdutoDto } from './dto/criar-produto.dto';
import { AtualizarProdutoDto } from './dto/atualizar-produto.dto';
import { ProdutosService } from './produtos.service';

@Controller('produtos')
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}

  @Post()
  create(@Body() CriarProdutoDto: CriarProdutoDto) {
    return this.produtosService.create(CriarProdutoDto);
  }

  @Get()
  findAll() {
    return this.produtosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    const produto = await this.produtosService.findOne(id);
    if (!produto) {
      throw new NotFoundException('Produto não encontrado');
    }
    return produto;
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.produtosService.remove(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() AtualizarProdutoDto: AtualizarProdutoDto) {
    return this.produtosService.update(id, AtualizarProdutoDto);
  }
}
