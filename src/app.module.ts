import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { RefeicaoModule } from './refeicao/refeicao.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { typeOrmConfig } from './configs/typeorm.config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UsuarioModule,
    RefeicaoModule,
    TypeOrmModule.forRoot(typeOrmConfig),
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
