import { DataSource } from 'typeorm';
import { Clientes } from './entities/cliente.entity';

export const clientesProviders = [
    {
        provide: 'CLIENTES_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Clientes),
        inject: ['DATA_SOURCE'],
    },
];