import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { PrismaService } from '../prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto) {
    const passwordHash = await bcrypt.hash(registerDto.password, 10);

    try {
      const user = await this.prisma.usuarios.create({
        data: {
          nombre: registerDto.nombre,
          email: registerDto.email,
          password: passwordHash,
        },
        select: {
          id: true,
          nombre: true,
          email: true,
          created_at: true,
        },
      });

      return user;
    } catch (error) {
      if (
        typeof error === 'object' &&
        error !== null &&
        'code' in error &&
        error.code === 'P2002'
      ) {
        throw new ConflictException('Ya existe un usuario con ese email');
      }

      throw error;
    }
  }

  async login(loginDto: LoginDto) {
    const user = await this.prisma.usuarios.findUnique({
      where: {
        email: loginDto.email,
      },
    });

    if (
      !user ||
      !(await bcrypt.compare(loginDto.password, user.password))
    ) {
      throw new UnauthorizedException('Email o contraseña incorrectos');
    }

    const accessToken = await this.jwtService.signAsync({
      sub: user.id,
      email: user.email,
    });

    return {
      access_token: accessToken,
      user: {
        id: user.id,
        nombre: user.nombre,
        email: user.email,
        created_at: user.created_at,
      },
    };
  }
}
