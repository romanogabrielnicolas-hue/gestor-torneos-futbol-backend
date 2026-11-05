
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Equipo } from './entities/equipo.entity';
import { CreateEquipoDto } from './dto/create-equipo.dto';
import { UpdateEquipoDto } from './dto/update-equipo.dto';

@Injectable()
export class EquiposService {
  constructor(
    @InjectRepository(Equipo)
    private readonly equiposRepository: Repository<Equipo>,
  ) {}

  create(createEquipoDto: CreateEquipoDto) {
    const equipo = this.equiposRepository.create(createEquipoDto);
    return this.equiposRepository.save(equipo);
  }

  findAll() {
    return this.equiposRepository.find({
      relations: {
  jugadores: true,
},
    });
  }

  async findOne(id: number) {
    const equipo = await this.equiposRepository.findOne({
      where: { id },
      relations: {
  jugadores: true,
},
    });

    if (!equipo) {
      throw new NotFoundException(`Equipo con ID ${id} no encontrado`);
    }

    return equipo;
  }

  async update(id: number, updateEquipoDto: UpdateEquipoDto) {
    const equipo = await this.findOne(id);

    Object.assign(equipo, updateEquipoDto);

    return this.equiposRepository.save(equipo);
  }

  async remove(id: number) {
    const equipo = await this.findOne(id);
    await this.equiposRepository.remove(equipo);

    return { message: 'Equipo eliminado correctamente' };
  }
}
