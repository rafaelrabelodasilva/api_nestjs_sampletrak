import { Module } from '@nestjs/common';
import { FornecedoresService } from './fornecedores.service';
import { FornecedoresController } from './fornecedores.controller';
import { DatabaseModule } from '../database/database.module';
import { fornecedoresProviders } from '../fornecedores/fornecedores.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [FornecedoresController],
  providers: [
    ...fornecedoresProviders,
    FornecedoresService,
  ],
})
export class FornecedoresModule {}