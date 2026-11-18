import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { CreateJugadoreDto } from './dto/create-jugadore.dto';
import { UpdateJugadoreDto } from './dto/update-jugadore.dto';

@Injectable()
export class JugadoresService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createJugadoreDto: CreateJugadoreDto) {
    await this.validateDni(createJugadoreDto.dni);

    return this.prisma.jugadores.create({
      data: createJugadoreDto,
    });
  }

  findAll() {
    return this.prisma.jugadores.findMany({
      include: {
        equipos: true,
      },
    });
  }

  async findOne(id: number) {
    const jugador = await this.prisma.jugadores.findUnique({
      where: { id },
      include: {
        equipos: true,
      },
    });

    if (!jugador) {
      throw new NotFoundException(
        `Jugador con ID ${id} no encontrado`,
      );
    }

    return jugador;
  }

  async update(
    id: number,
    updateJugadoreDto: UpdateJugadoreDto,
  ) {
    await this.findOne(id);

    if (updateJugadoreDto.dni) {
      await this.validateDni(updateJugadoreDto.dni, id);
    }

    await this.prisma.jugadores.update({
      where: { id },
      data: updateJugadoreDto,
    });

    return this.findOne(id);
  }

  async remove(id: number) {
    await this.findOne(id);

    await this.prisma.jugadores.delete({
      where: { id },
    });

    return {
      message: 'Jugador eliminado correctamente',
    };
  }

  private async validateDni(dni: string, jugadorId?: number) {
    const existingJugador = await this.prisma.jugadores.findUnique({
      where: { dni },
      select: { id: true },
    });

    if (existingJugador && existingJugador.id !== jugadorId) {
      throw new ConflictException(
        'Ya existe un jugador con ese DNI.',
      );
    }
  }
}