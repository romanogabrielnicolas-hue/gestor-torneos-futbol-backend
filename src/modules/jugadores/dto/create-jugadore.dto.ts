import {
  IsInt,
  IsNotEmpty,
  IsString,
  Matches,
  Max,
  MaxLength,
  Min,
} from 'class-validator';

export class CreateJugadoreDto {
  @IsString({ message: 'El nombre debe ser un texto' })
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  @MaxLength(100, { message: 'El nombre no puede superar los 100 caracteres' })
  nombre: string;

  @IsString({ message: 'El DNI debe ser un texto' })
  @Matches(/^\d{7,8}$/, { message: 'El DNI debe tener 7 u 8 dígitos numéricos' })
  dni: string;

  @IsInt({ message: 'La edad debe ser un número entero' })
  @Min(14, { message: 'La edad mínima es 14' })
  @Max(60, { message: 'La edad máxima es 60' })
  edad: number;

 @IsInt({ message: 'La posición debe ser un número entero' })
 @Min(1, { message: 'La posición debe ser mayor a 0' })
 posicion_id: number;

  @IsInt({ message: 'El equipo_id debe ser un número entero' })
  @Min(1, { message: 'El equipo_id debe ser mayor a 0' })
  equipo_id: number;

  @IsInt({ message: 'El número debe ser un número entero' })
  @Min(1, { message: 'El número mínimo es 1' })
  @Max(99, { message: 'El número máximo es 99' })
  numero: number;
}