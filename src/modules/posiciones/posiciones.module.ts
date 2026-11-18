import { Module } from '@nestjs/common';
import { PosicionesController } from './posiciones.controller';
import { PosicionesService } from './posiciones.service';

@Module({
  controllers: [PosicionesController],
  providers: [PosicionesService],
})
export class PosicionesModule {}