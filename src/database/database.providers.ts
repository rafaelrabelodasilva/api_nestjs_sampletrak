// O DataSource é um objeto que representa uma fonte de dados, ou seja, a conexão com um banco de dados.
import { DataSource } from 'typeorm';

// exporta uma matriz que define um provedor de banco de dados. O provedor será injetado nas classes onde for necessário usar a conexão com o banco de dados.
export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    // criado uma instância da classe DataSource e configurado os parâmetros da conexão
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'rafaQa@2022',
        database: 'sampletrak_db',
        entities: [
            __dirname + '/../**/*.entity{.ts,.js}',
        ],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];