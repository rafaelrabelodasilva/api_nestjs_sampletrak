import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { SuppliersService } from './fornecedor.service';
import { CreateSupplierDto } from './dto/criar-fornecedor.dto';
import { UpdateSupplierDto } from './dto/atualizar-fornecedor.dto';

@Controller('suppliers')
export class SuppliersController {
  constructor(private readonly suppliersService: SuppliersService) {}

  @Post()
  create(@Body() createSupplierDto: CreateSupplierDto) {
    return this.suppliersService.create(createSupplierDto);
  }

  @Get()
  findAll() {
    return this.suppliersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    const supplier = this.suppliersService.findOne(id);
    
    if(!supplier) {
            throw new NotFoundException('User does not exists.');
    }
    
    return supplier;
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateSupplierDto: UpdateSupplierDto) {
    return this.suppliersService.update(id, updateSupplierDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.suppliersService.remove(id);
  }
}
