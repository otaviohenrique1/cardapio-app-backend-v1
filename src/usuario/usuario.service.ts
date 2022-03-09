import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { UsuarioRepository } from './usuario.repository';
import { UserRole } from './user-roles.enum';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(UsuarioRepository)
    private usuarioRepository: UsuarioRepository,
  ) {}

  async createUsuarioAdministrador(
    createUsuarioDto: CreateUsuarioDto,
  ): Promise<Usuario> {
    if (createUsuarioDto.senha != createUsuarioDto.confirmar_senha) {
      throw new UnprocessableEntityException('As senhas não conferem');
    } else {
      return this.usuarioRepository.createUsuario(
        createUsuarioDto,
        UserRole.ADMIN,
      );
    }
  }

  async create(createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioRepository.create(createUsuarioDto);
  }

  async findAll(): Promise<Usuario[]> {
    return this.usuarioRepository.find();
  }

  async findOne(id: number): Promise<Usuario> {
    return this.usuarioRepository.findOne(id);
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioRepository.update(id, updateUsuarioDto);
  }

  async remove(id: number): Promise<void> {
    await this.usuarioRepository.delete(id);
  }
}
