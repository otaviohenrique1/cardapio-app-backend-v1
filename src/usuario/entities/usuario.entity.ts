import { Refeicao } from 'src/refeicao/entities/refeicao.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  BaseEntity,
  Unique,
  CreateDateColumn,
  OneToMany,
  UpdateDateColumn,
} from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity()
@Unique(['email'])
export class Usuario extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false, type: 'varchar', length: 255 })
  nome: string;

  @Column({ nullable: false, type: 'varchar', length: 255 })
  email: string;

  @Column({ nullable: false })
  senha: string;

  @Column({ nullable: false })
  salt: string;

  @Column({ nullable: false, type: 'varchar', length: 20 })
  role: string;

  @Column({ nullable: true, type: 'varchar', length: 64 })
  confirmationToken: string;

  @Column({ nullable: true, type: 'varchar', length: 64 })
  recoverToken: string;

  @Column({ nullable: false, default: true })
  status: boolean;

  @OneToMany(() => Refeicao, (refeicao) => refeicao.usuario)
  refeicoes: Refeicao[];

  @CreateDateColumn()
  data_cadastro: Date;

  @UpdateDateColumn()
  data_modificacao_cadastro: Date;

  async checkSenha(senha: string): Promise<boolean> {
    const hash = await bcrypt.hash(senha, this.salt);
    return hash === this.senha;
  }
}
