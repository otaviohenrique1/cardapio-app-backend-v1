import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateUsuarioDto {
  @IsNotEmpty({ message: 'Informe o nome do usuário' })
  @MaxLength(255, { message: 'O nome deve ter menos de 255 caracteres' })
  nome: string;

  @IsNotEmpty({ message: 'Informe um endereço de email' })
  @IsEmail({}, { message: 'Informe um endereço de email válido' })
  @MaxLength(200, {
    message: 'O endereço de email deve ter menos de 200 caracteres',
  })
  email: string;

  @IsNotEmpty({ message: 'Informe uma senha' })
  @MinLength(6, { message: 'A senha deve ter no mínimo 6 caracteres' })
  senha: string;

  @IsNotEmpty({ message: 'Informe a confirmação de senha' })
  @MinLength(6, {
    message: 'A confirmação de senha deve ter no mínimo 6 caracteres',
  })
  confirmar_senha: string;
}
