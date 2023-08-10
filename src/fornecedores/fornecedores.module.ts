import { Module } from '@nestjs/common';
import { fornecedoresService } from './fornecedores.service';
import { FornecedoresController } from './fornecedores.controller';
import { DatabaseModule } from '../database/database.module';
import { fornecedoresProviders } from '../fornecedores/fornecedores.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [FornecedoresController],
  providers: [
    ...fornecedoresProviders,
    fornecedoresService,
  ],
})
export class FornecedoresModule {}