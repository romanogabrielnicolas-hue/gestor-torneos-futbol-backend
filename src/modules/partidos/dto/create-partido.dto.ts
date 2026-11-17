
import {
  IsInt,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  Min,
} from 'class-validator';

export class CreatePartidoDto {
  @IsInt({ message: 'El equipo local debe ser un número entero' })
  @Min(1, { message: 'El equipo local debe ser mayor a 0' })
  equipo_local_id: number;

  @IsInt({ message: 'El equipo visitante debe ser un número entero' })
  @Min(1, { message: 'El equipo visitante debe ser mayor a 0' })
  equipo_visitante_id: number;

  @IsString({ message: 'La fecha debe ser un texto' })
  @Matches(/^\d{4}-\d{2}-\d{2}$/, {
    message: 'La fecha debe tener el formato YYYY-MM-DD',
  })
  fecha: string;

  @IsString({ message: 'La hora debe ser un texto' })
  @Matches(/^([01]\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/, {
    message: 'La hora debe tener el formato HH:mm o HH:mm:ss',
  })
  hora: string;

  @IsInt({ message: 'La cancha debe ser un número entero' })
  @Min(1, { message: 'La cancha debe ser mayor a 0' })
  cancha_id: number;
}
