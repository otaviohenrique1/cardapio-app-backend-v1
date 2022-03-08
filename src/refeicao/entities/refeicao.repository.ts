import { EntityRepository, Repository } from 'typeorm';
import { Refeicao } from './refeicao.entity';

@EntityRepository(Refeicao)
export class RefeicaoRepository extends Repository<Refeicao> {}
