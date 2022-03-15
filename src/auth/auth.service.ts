import {
  Injectable,
  UnauthorizedException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUsuarioDto } from 'src/usuario/dto/create-usuario.dto';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { UserRole } from 'src/usuario/user-roles.enum';
import { UsuarioRepository } from 'src/usuario/usuario.repository';
import { CredenciaisDto } from './dto/credenciais.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UsuarioRepository)
    private usuarioRepository: UsuarioRepository,
    private jwtService: JwtService,
  ) {}

  async signUp(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    if (createUsuarioDto.senha != createUsuarioDto.confirmar_senha) {
      throw new UnprocessableEntityException('As senhas não conferem');
    } else {
      return await this.usuarioRepository.createUsuario(
        createUsuarioDto,
        UserRole.USER,
      );
    }
  }

  async signIn(credenciaisDto: CredenciaisDto) {
    const user = await this.usuarioRepository.checarCredenciais(credenciaisDto);

    if (user === null) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    const jwtPayload = {
      id: user.id,
    };
    const token = await this.jwtService.sign(jwtPayload);

    return { token };
  }
}
