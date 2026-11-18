import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { CreatePosicioneDto } from './dto/create-posicione.dto';
import { UpdatePosicioneDto } from './dto/update-posicione.dto';

@Injectable()
export class PosicionesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPosicioneDto: CreatePosicioneDto) {
    await this.validateNombre(createPosicioneDto.nombre);

    return this.prisma.posiciones.create({
      data: createPosicioneDto,
    });
  }

  findAll() {
    return this.prisma.posiciones.findMany();
  }

  async findOne(id: number) {
    const posicion = await this.prisma.posiciones.findUnique({
      where: { id },
    });

    if (!posicion) {
      throw new NotFoundException(
        `Posición con ID ${id} no encontrada`,
      );
    }

    return posicion;
  }

  async update(
    id: number,
    updatePosicioneDto: UpdatePosicioneDto,
  ) {
    await this.findOne(id);

    if (updatePosicioneDto.nombre) {
      await this.validateNombre(updatePosicioneDto.nombre, id);
    }

    await this.prisma.posiciones.update({
      where: { id },
      data: updatePosicioneDto,
    });

    return this.findOne(id);
  }

  async remove(id: number) {
    await this.findOne(id);

    await this.prisma.posiciones.delete({
      where: { id },
    });

    return {
      message: 'Posición eliminada correctamente',
    };
  }

  private async validateNombre(
    nombre: string,
    posicionId?: number,
  ) {
    const existingPosicion =
      await this.prisma.posiciones.findUnique({
        where: { nombre },
        select: { id: true },
      });

    if (
      existingPosicion &&
      existingPosicion.id !== posicionId
    ) {
      throw new ConflictException(
        'Ya existe una posición con ese nombre.',
      );
    }
  }
}