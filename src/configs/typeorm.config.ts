import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'sofia1234',
  database: 'cardapio_app_backend',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true, // Retirar quano o codigo for para a producao
};
