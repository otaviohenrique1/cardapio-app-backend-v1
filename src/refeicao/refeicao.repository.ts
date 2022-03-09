import { InternalServerErrorException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { CreateRefeicaoDto } from './dto/create-refeicao.dto';
import { Refeicao } from './entities/refeicao.entity';

@EntityRepository(Refeicao)
export class RefeicaoRepository extends Repository<Refeicao> {
  async createRefeicao(createRefeicaoDto: CreateRefeicaoDto) {
    const { nome, preco, ativo, ingredientes } = createRefeicaoDto;

    const refeicao = this.create();
    refeicao.nome = nome;
    refeicao.preco = preco;
    refeicao.ingredientes = ingredientes;
    refeicao.ativo = ativo;

    try {
      await refeicao.save();
    } catch (error) {
      throw new InternalServerErrorException(
        `Erro ao salvar a refeição no banco de dados.
        ${error}`,
      );
    }
  }
}
