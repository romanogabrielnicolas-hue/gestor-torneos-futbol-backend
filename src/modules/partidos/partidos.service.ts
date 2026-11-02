
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Partido } from './entities/partido.entity';
import { CreatePartidoDto } from './dto/create-partido.dto';
import { UpdatePartidoDto } from './dto/update-partido.dto';

@Injectable()
export class PartidosService {
  constructor(
    @InjectRepository(Partido)
    private readonly partidosRepository: Repository<Partido>,
  ) {}

  create(createPartidoDto: CreatePartidoDto) {
    const partido = this.partidosRepository.create(createPartidoDto);
    return this.partidosRepository.save(partido);
  }

  findAll() {
    return this.partidosRepository.find({
      relations: {
        equipoLocal: true,
        equipoVisitante: true,
      },
    });
  }

  async findOne(id: number) {
    const partido = await this.partidosRepository.findOne({
      where: { id },
      relations: {
        equipoLocal: true,
        equipoVisitante: true,
      },
    });

    if (!partido) {
      throw new NotFoundException(`Partido con ID ${id} no encontrado`);
    }

    return partido;
  }

  async update(id: number, updatePartidoDto: UpdatePartidoDto) {
    const partido = await this.findOne(id);

    Object.assign(partido, updatePartidoDto);

    return this.partidosRepository.save(partido);
  }

  async remove(id: number) {
    const partido = await this.findOne(id);

    await this.partidosRepository.remove(partido);

    return { message: 'Partido eliminado correctamente' };
  }
}
