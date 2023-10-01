import { DataSource } from 'typeorm';
import { Amostras } from './entities/amostra.entity';

export const amostrasProviders = [
    {
        provide: 'AMOSTRAS_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Amostras),
        inject: ['DATA_SOURCE'],
    },
];