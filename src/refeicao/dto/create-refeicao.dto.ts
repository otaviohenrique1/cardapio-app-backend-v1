import {
  IsNotEmpty,
  MaxLength,
  IsDecimal,
  IsString,
  IsBoolean,
} from 'class-validator';

export class CreateRefeicaoDto {
  @IsNotEmpty({ message: 'Informe o nome da refeição' })
  @MaxLength(255, { message: 'O nome deve ter menos de 255 caracteres' })
  nome: string;

  @IsNotEmpty({ message: 'Informe o preço da refeição' })
  @IsDecimal({ message: 'Valor tem que ser decimail' })
  preco: number;

  @IsNotEmpty({ message: 'Informe o nome do usuário' })
  @IsString({ message: 'Valor tem que ser string' })
  ingredientes: string;

  @IsBoolean({
    message: 'Valor tem que ser booleano (ativo: true, inativo: false)',
  })
  ativo: boolean;
}
