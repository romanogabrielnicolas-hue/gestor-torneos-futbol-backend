
import {
  IsNotEmpty,
  IsString,
  MaxLength,
  IsInt,
  Min,
} from 'class-validator';

export class CreateEquipoDto {
  @IsString({ message: 'El nombre debe ser un texto' })
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  @MaxLength(100, { message: 'El nombre no puede superar los 100 caracteres' })
  nombre: string;

  @IsString({ message: 'El color debe ser un texto' })
  @IsNotEmpty({ message: 'El color es obligatorio' })
  @MaxLength(50, { message: 'El color no puede superar los 50 caracteres' })
  color: string;

  @IsInt({ message: 'La liga debe ser un número entero' })
  @Min(1)
  liga_id: number;

  @IsInt({ message: 'El usuario debe ser un número entero' })
  @Min(1)
  usuario_id: number;
}
