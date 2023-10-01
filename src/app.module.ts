import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FornecedoresModule } from './fornecedores/fornecedores.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ClientesModule } from './clientes/clientes.module';
import { ProdutosModule } from './produtos/produtos.module';
import { AmostrasModule } from './amostras/amostras.module';

@Module({
  imports: [FornecedoresModule, UsuariosModule, ClientesModule, ProdutosModule, AmostrasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
