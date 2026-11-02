import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JugadoresController } from './jugadores.controller';
import { JugadoresService } from './jugadores.service';
import { Jugador } from './entities/jugadore.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Jugador])],
  controllers: [JugadoresController],
  providers: [JugadoresService],
})
export class JugadoresModule {}