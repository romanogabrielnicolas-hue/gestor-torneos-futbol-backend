
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { Equipo } from '../../equipos/entities/equipo.entity';

@Entity('partidos')
export class Partido {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  equipo_local_id: number;

  @Column({ type: 'int' })
  equipo_visitante_id: number;

  @Column({ type: 'date' })
  fecha: string;

  @Column({ type: 'time' })
  hora: string;

  @Column({ type: 'varchar', length: 100 })
  cancha: string;

  @ManyToOne(() => Equipo)
  @JoinColumn({ name: 'equipo_local_id' })
  equipoLocal: Equipo;

  @ManyToOne(() => Equipo)
  @JoinColumn({ name: 'equipo_visitante_id' })
  equipoVisitante: Equipo;
}