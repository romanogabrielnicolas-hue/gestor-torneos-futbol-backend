import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Posicion } from './entities/posicione.entity';
import { PosicionesController } from './posiciones.controller';
import { PosicionesService } from './posiciones.service';

@Module({
  imports: [TypeOrmModule.forFeature([Posicion])],
  controllers: [PosicionesController],
  providers: [PosicionesService],
  exports: [TypeOrmModule],
})
export class PosicionesModule {}