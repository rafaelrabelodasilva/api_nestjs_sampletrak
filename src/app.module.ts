import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FornecedoresModule } from './fornecedores/fornecedores.module';

@Module({
  imports: [FornecedoresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
