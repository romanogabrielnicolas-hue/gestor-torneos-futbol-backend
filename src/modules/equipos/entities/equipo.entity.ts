
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from 'typeorm';

import { Jugador } from '../../jugadores/entities/jugadore.entity';

@Entity('equipos')
export class Equipo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  nombre: string;

  @Column({ type: 'varchar', length: 50 })
  color: string;

  @OneToMany(() => Jugador, (jugador) => jugador.equipo)
  jugadores: Jugador[];
}
