import {
  Injectable,
  NotFoundException,
  ConflictException,
  BadRequestException,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  // Crear usuario
  async create(createUserDto: CreateUserDto) {
    const passwordHash = await bcrypt.hash(
      createUserDto.password,
      10,
    );

    try {
      return await this.prisma.usuarios.create({
        data: {
          nombre: createUserDto.nombre,
          email: createUserDto.email,
          password: passwordHash,
        },
        select: {
          id: true,
          nombre: true,
          email: true,
          created_at: true,
        },
      });
    } catch (error) {
      if (
        typeof error === 'object' &&
        error !== null &&
        'code' in error &&
        error.code === 'P2002'
      ) {
        throw new ConflictException(
          'Ya existe un usuario con ese email',
        );
      }

      throw error;
    }
  }

  // Listar usuarios
  async findAll() {
    return this.prisma.usuarios.findMany({
      select: {
        id: true,
        nombre: true,
        email: true,
        created_at: true,
      },
      orderBy: {
        id: 'asc',
      },
    });
  }

  // Buscar usuario por ID
  async findOne(id: number) {
    const usuario = await this.prisma.usuarios.findUnique({
      where: { id },
      select: {
        id: true,
        nombre: true,
        email: true,
        created_at: true,
      },
    });

    if (!usuario) {
      throw new NotFoundException(
        `Usuario con ID ${id} no encontrado`,
      );
    }

    return usuario;
  }

  // Modificar usuario
  async update(id: number, updateUserDto: UpdateUserDto) {
    await this.findOne(id);

    const data: {
      nombre?: string;
      email?: string;
      password?: string;
    } = {};

    if (updateUserDto.nombre !== undefined) {
      data.nombre = updateUserDto.nombre;
    }

    if (updateUserDto.email !== undefined) {
      data.email = updateUserDto.email;
    }

    if (updateUserDto.password !== undefined) {
      data.password = await bcrypt.hash(
        updateUserDto.password,
        10,
      );
    }

    try {
      return await this.prisma.usuarios.update({
        where: { id },
        data,
        select: {
          id: true,
          nombre: true,
          email: true,
          created_at: true,
        },
      });
    } catch (error) {
      if (
        typeof error === 'object' &&
        error !== null &&
        'code' in error &&
        error.code === 'P2002'
      ) {
        throw new ConflictException(
          'El email ya está registrado por otro usuario',
        );
      }

      throw error;
    }
  }

  // Eliminar usuario
  async remove(id: number) {
    await this.findOne(id);

    try {
      await this.prisma.usuarios.delete({
        where: { id },
      });

      return {
        mensaje: 'Usuario eliminado correctamente',
        id,
      };
    } catch (error) {
      if (
        typeof error === 'object' &&
        error !== null &&
        'code' in error &&
        error.code === 'P2003'
      ) {
        throw new BadRequestException(
          'No se puede eliminar este usuario porque tiene registros relacionados',
        );
      }

      throw error;
    }
  }
}