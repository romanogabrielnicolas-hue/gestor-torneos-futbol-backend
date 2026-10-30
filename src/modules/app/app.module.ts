import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { EquiposModule } from '../equipos/equipos.module';
import { JugadoresModule } from '../jugadores/jugadores.module';
import { PartidosModule } from '../partidos/partidos.module';

@Module({
  imports: [
    EquiposModule,
    JugadoresModule,
    PartidosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}