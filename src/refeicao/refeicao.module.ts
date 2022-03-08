import { Module } from '@nestjs/common';
import { RefeicaoService } from './refeicao.service';
import { RefeicaoController } from './refeicao.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Refeicao } from './entities/refeicao.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Refeicao])],
  controllers: [RefeicaoController],
  providers: [RefeicaoService],
})
export class RefeicaoModule {}
