import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateRefeicaoDto } from './dto/create-refeicao.dto';
import { UpdateRefeicaoDto } from './dto/update-refeicao.dto';
import { Refeicao } from './entities/refeicao.entity';
import { RefeicaoRepository } from './refeicao.repository';

@Injectable()
export class RefeicaoService {
  constructor(
    @InjectRepository(RefeicaoRepository)
    private refeicaoRepository: RefeicaoRepository,
  ) {}

  async create(createRefeicaoDto: CreateRefeicaoDto): Promise<Refeicao> {
    return this.refeicaoRepository.create(createRefeicaoDto);
  }

  async findAll(): Promise<Refeicao[]> {
    return this.refeicaoRepository.find();
  }

  async findOne(id: number): Promise<Refeicao> {
    return this.refeicaoRepository.findOne(id);
  }

  async update(id: number, updateRefeicaoDto: UpdateRefeicaoDto) {
    return this.refeicaoRepository.update(id, updateRefeicaoDto);
  }

  remove(id: number) {
    return `This action removes a #${id} refeicao`;
  }
}
