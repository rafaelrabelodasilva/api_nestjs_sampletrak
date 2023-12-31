import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FornecedoresModule } from './fornecedores/fornecedores.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ClientesModule } from './clientes/clientes.module';

@Module({
  imports: [FornecedoresModule, UsuariosModule, ClientesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
