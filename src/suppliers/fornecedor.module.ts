import { Module } from '@nestjs/common';
import { SuppliersService } from './fornecedor.service';
import { SuppliersController } from './fornecedor.controller';

@Module({
  controllers: [SuppliersController],
  providers: [SuppliersService],
})
export class SuppliersModule {}
