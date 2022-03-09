import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { CreateUsuarioDto } from 'src/usuario/dto/create-usuario.dto';
import { AuthService } from './auth.service';

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
}
