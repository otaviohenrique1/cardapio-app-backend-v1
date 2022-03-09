import { EntityRepository, Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UserRole } from './user-roles.enum';
import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { CredenciaisDto } from 'src/auth/dto/credenciais.dto';

@EntityRepository(Usuario)
export class UsuarioRepository extends Repository<Usuario> {
  async createUsuario(
    createUsuarioDto: CreateUsuarioDto,
    role: UserRole,
  ): Promise<Usuario> {
    const { email, nome, senha } = createUsuarioDto;

    const usuario = this.create();
    usuario.email = email;
    usuario.nome = nome;
    usuario.role = role;
    usuario.status = true;
    usuario.confirmationToken = crypto.randomBytes(32).toString('hex');
    usuario.salt = await bcrypt.genSalt();
    usuario.senha = await this.hashSenha(senha, usuario.salt);
    try {
      await usuario.save();
      delete usuario.senha;
      delete usuario.salt;
      return usuario;
    } catch (error) {
      if (error.code.toString() === '23505') {
        throw new ConflictException('Endereço de email já está em uso');
      } else {
        throw new InternalServerErrorException(
          'Erro ao salvar o usuário no banco de dados',
        );
      }
    }
  }

  async checarCredenciais(credenciaisDto: CredenciaisDto): Promise<Usuario> {
    const { email, senha } = credenciaisDto;
    const user = await this.findOne({ email, status: true });

    if (user && (await user.checkSenha(senha))) {
      return user;
    } else {
      return null;
    }
  }

  private async hashSenha(senha: string, salt: string): Promise<string> {
    return bcrypt.hash(senha, salt);
  }
}
