import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { EquiposModule } from '../equipos/equipos.module';
import { JugadoresModule } from '../jugadores/jugadores.module';
import { PartidosModule } from '../partidos/partidos.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        url: configService.get<string>('DATABASE_URL'),
        autoLoadEntities: true,
        synchronize: false,
      }),
    }),

    EquiposModule,
    JugadoresModule,
    PartidosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}