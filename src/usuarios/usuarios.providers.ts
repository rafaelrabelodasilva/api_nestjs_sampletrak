import { DataSource } from 'typeorm';
import { Usuarios } from './entities/usuario.entity';

export const usuariosProviders = [
    {
        provide: 'USUARIOS_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Usuarios),
        inject: ['DATA_SOURCE'],
    },
];