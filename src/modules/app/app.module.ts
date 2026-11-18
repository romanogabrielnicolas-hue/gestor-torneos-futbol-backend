import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { PrismaModule } from '../prisma/prisma.module';
import { EquiposModule } from '../equipos/equipos.module';
import { JugadoresModule } from '../jugadores/jugadores.module';
import { PartidosModule } from '../partidos/partidos.module';
import { PosicionesModule } from '../posiciones/posiciones.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    PrismaModule,

    EquiposModule,
    JugadoresModule,
    PartidosModule,
    PosicionesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}