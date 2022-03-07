import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { RefeicaoModule } from './refeicao/refeicao.module';

@Module({
  imports: [UsuarioModule, RefeicaoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
