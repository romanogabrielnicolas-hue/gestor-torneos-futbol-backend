
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateEquipoDto } from './dto/create-equipo.dto';
import { UpdateEquipoDto } from './dto/update-equipo.dto';

@Injectable()
export class EquiposService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createEquipoDto: CreateEquipoDto) {
    const { nombre, color, liga_id, usuario_id } = createEquipoDto;

    return this.prisma.equipos.create({
      data: {
        nombre,
        color,
        liga_usuarios: {
          connect: {
            liga_id_usuario_id: {
              liga_id,
              usuario_id,
            },
          },
        },
      },
      include: {
        jugadores: true,
      },
    });
  }

  findAll() {
    return this.prisma.equipos.findMany({
      include: {
        jugadores: true,
      },
    });
  }

  async findOne(id: number) {
    const equipo = await this.prisma.equipos.findUnique({
      where: { id },
      include: {
        jugadores: true,
      },
    });

    if (!equipo) {
      throw new NotFoundException(`Equipo con ID ${id} no encontrado`);
    }

    return equipo;
  }

  async update(id: number, updateEquipoDto: UpdateEquipoDto) {
  await this.findOne(id);

  await this.prisma.equipos.update({
    where: { id },
    data: updateEquipoDto,
  });

  return this.findOne(id);
}

  async remove(id: number) {
    await this.findOne(id);

    await this.prisma.equipos.delete({
      where: { id },
    });

    return { message: 'Equipo eliminado correctamente' };
  }
}
