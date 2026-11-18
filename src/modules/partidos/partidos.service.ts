import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { CreatePartidoDto } from './dto/create-partido.dto';
import { UpdatePartidoDto } from './dto/update-partido.dto';

@Injectable()
export class PartidosService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPartidoDto: CreatePartidoDto) {
    return this.prisma.partidos.create({
      data: {
        equipo_local_id: createPartidoDto.equipo_local_id,
        equipo_visitante_id: createPartidoDto.equipo_visitante_id,
        cancha_id: createPartidoDto.cancha_id,
        fecha: this.convertirFecha(createPartidoDto.fecha),
        hora: this.convertirHora(createPartidoDto.hora),
      },
      include: {
        equipos_partidos_equipo_local_idToequipos: true,
        equipos_partidos_equipo_visitante_idToequipos: true,
        canchas: true,
      },
    });
  }

  findAll() {
    return this.prisma.partidos.findMany({
      include: {
        equipos_partidos_equipo_local_idToequipos: true,
        equipos_partidos_equipo_visitante_idToequipos: true,
        canchas: true,
      },
    });
  }

  async findOne(id: number) {
    const partido = await this.prisma.partidos.findUnique({
      where: { id },
      include: {
        equipos_partidos_equipo_local_idToequipos: true,
        equipos_partidos_equipo_visitante_idToequipos: true,
        canchas: true,
      },
    });

    if (!partido) {
      throw new NotFoundException(`Partido con ID ${id} no encontrado`);
    }

    return partido;
  }

  async update(id: number, updatePartidoDto: UpdatePartidoDto) {
  await this.findOne(id);

  await this.prisma.partidos.update({
    where: { id },
    data: {
      equipo_local_id: updatePartidoDto.equipo_local_id,
      equipo_visitante_id: updatePartidoDto.equipo_visitante_id,
      cancha_id: updatePartidoDto.cancha_id,
      fecha: updatePartidoDto.fecha
        ? this.convertirFecha(updatePartidoDto.fecha)
        : undefined,
      hora: updatePartidoDto.hora
        ? this.convertirHora(updatePartidoDto.hora)
        : undefined,
    },
  });

  return this.findOne(id);
}

  async remove(id: number) {
    await this.findOne(id);

    await this.prisma.partidos.delete({
      where: { id },
    });

    return { message: 'Partido eliminado correctamente' };
  }

  private convertirFecha(fecha: string): Date {
    return new Date(`${fecha}T00:00:00.000Z`);
  }

  private convertirHora(hora: string): Date {
    const horaCompleta = hora.length === 5 ? `${hora}:00` : hora;

    return new Date(`1970-01-01T${horaCompleta}.000Z`);
  }
}