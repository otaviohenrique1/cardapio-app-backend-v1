import { Refeicao } from 'src/refeicao/entities/refeicao.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  BaseEntity,
  Unique,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity()
@Unique(['email'])
export class Usuario extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false, type: 'varchar', length: 255 })
  nome: string;

  @Column({ nullable: false, type: 'varchar', length: 255 })
  email: string;

  @Column({ nullable: false, type: 'varchar', length: 255 })
  senha: string;

  @Column({ nullable: false, type: 'varchar', length: 255 })
  salt: string;

  @OneToMany(() => Refeicao, (refeicao) => refeicao.usuario)
  refeicoes: Refeicao[];

  @CreateDateColumn()
  data_cadastro: Date;
}
