
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Jugador } from './entities/jugadore.entity';
import { CreateJugadoreDto } from './dto/create-jugadore.dto';
import { UpdateJugadoreDto } from './dto/update-jugadore.dto';

@Injectable()
export class JugadoresService {
  constructor(
    @InjectRepository(Jugador)
    private readonly jugadoresRepository: Repository<Jugador>,
  ) {}

  create(createJugadoreDto: CreateJugadoreDto) {
    const jugador = this.jugadoresRepository.create(createJugadoreDto);
    return this.jugadoresRepository.save(jugador);
  }

  findAll() {
    return this.jugadoresRepository.find({
      relations: {
        equipo: true,
      },
    });
  }

  async findOne(id: number) {
    const jugador = await this.jugadoresRepository.findOne({
      where: { id },
      relations: {
        equipo: true,
      },
    });

    if (!jugador) {
      throw new NotFoundException(`Jugador con ID ${id} no encontrado`);
    }

    return jugador;
  }

  async update(id: number, updateJugadoreDto: UpdateJugadoreDto) {
    const jugador = await this.findOne(id);

    Object.assign(jugador, updateJugadoreDto);

    return this.jugadoresRepository.save(jugador);
  }

  async remove(id: number) {
    const jugador = await this.findOne(id);

    await this.jugadoresRepository.remove(jugador);

    return { message: 'Jugador eliminado correctamente' };
  }
}
