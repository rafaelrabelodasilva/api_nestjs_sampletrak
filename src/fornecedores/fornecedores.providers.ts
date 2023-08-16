import { DataSource } from 'typeorm';
import { Fornecedores } from './entities/fornecedor.entity';

export const fornecedoresProviders = [
    {
        provide: 'FORNECEDORES_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Fornecedores),
        inject: ['DATA_SOURCE'],
    },
];