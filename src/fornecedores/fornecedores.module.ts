import { Module } from '@nestjs/common';
import { fornecedoresService } from './fornecedores.service';
import { FornecedoresController } from './fornecedores.controller';

@Module({
  controllers: [FornecedoresController],
  providers: [fornecedoresService],
})
export class FornecedoresModule {}
