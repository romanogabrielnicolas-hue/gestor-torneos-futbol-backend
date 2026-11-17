
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { Equipo } from '../../equipos/entities/equipo.entity';
import { Posicion } from '../../posiciones/entities/posicione.entity';

@Entity('jugadores')
export class Jugador {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  nombre: string;

  @Column({ type: 'varchar', length: 20, unique: true })
  dni: string;

  @Column({ type: 'int' })
  edad: number;

  @Column({ type: 'int' })
  posicion_id: number;

  @Column({ type: 'int' })
  equipo_id: number;

  @Column({ type: 'int' })
  numero: number;

  @ManyToOne(() => Equipo, (equipo) => equipo.jugadores)
  @JoinColumn({ name: 'equipo_id' })
  equipo: Equipo;

  @ManyToOne(() => Posicion)
  @JoinColumn({ name: 'posicion_id' })
  posicion: Posicion;
}
