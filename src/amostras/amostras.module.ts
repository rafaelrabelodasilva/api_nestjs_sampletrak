import { Module } from '@nestjs/common';
import { AmostrasService } from './amostras.service';
import { AmostrasController } from './amostras.controller';
import { DatabaseModule } from 'src/database/database.module';
import { amostrasProviders } from './amostras.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [AmostrasController],
  providers: [
    ...amostrasProviders,
    AmostrasService,
  ],
})
export class AmostrasModule {}
