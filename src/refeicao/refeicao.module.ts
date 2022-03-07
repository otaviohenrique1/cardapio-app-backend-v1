import { Module } from '@nestjs/common';
import { RefeicaoService } from './refeicao.service';
import { RefeicaoController } from './refeicao.controller';

@Module({
  controllers: [RefeicaoController],
  providers: [RefeicaoService]
})
export class RefeicaoModule {}
