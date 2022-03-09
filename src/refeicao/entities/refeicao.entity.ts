import { Usuario } from 'src/usuario/entities/usuario.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  ManyToOne,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Refeicao extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ nullable: false, type: 'varchar', length: 255 })
  nome: string;

  @Column({ nullable: false, type: 'decimal', precision: 10, scale: 2 })
  preco: number;

  @Column({ nullable: false, type: 'text' })
  ingredientes: string;

  @Column({ nullable: false, type: 'boolean' })
  ativo: boolean;

  @CreateDateColumn()
  data_cadastro: Date;

  @UpdateDateColumn()
  data_modificacao_cadastro: Date;

  @ManyToOne(() => Usuario, (usuario) => usuario.refeicoes)
  usuario: Usuario;
}
