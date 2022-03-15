import {
  Controller,
  Post,
  Body,
  ValidationPipe,
  Get,
  UseGuards,
  Req,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateUsuarioDto } from 'src/usuario/dto/create-usuario.dto';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { AuthService } from './auth.service';
import { CredenciaisDto } from './dto/credenciais.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  async signup(
    @Body(ValidationPipe) createUsuarioDto: CreateUsuarioDto,
  ): Promise<{ message: string }> {
    await this.authService.signUp(createUsuarioDto);
    return {
      message: 'Cadastro realizado com sucesso',
    };
  }

  @Post('/signin')
  async signIn(
    @Body(ValidationPipe) credenciaisDto: CredenciaisDto,
  ): Promise<{ token: string }> {
    return await this.authService.signIn(credenciaisDto);
  }

  @Get('/me')
  @UseGuards(AuthGuard())
  getMe(@Req() req): Usuario {
    return req.usuario;
  }
}
