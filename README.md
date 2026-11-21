# ⚽ Gestor de Torneos de Fútbol

### Backend REST API — NestJS + TypeScript + Prisma + MySQL

API REST desarrollada para la gestión de torneos de fútbol. Permite administrar equipos, jugadores, posiciones y partidos, además de contar con funcionalidades de registro e inicio de sesión de usuarios.

El proyecto utiliza **NestJS** como framework backend, **Prisma ORM** para interactuar con la base de datos MySQL y **JWT** para la autenticación.

---

## 📋 Tabla de contenido

- [Descripción del proyecto](#-descripción-del-proyecto)
- [Características](#-características)
- [Tecnologías utilizadas](#️-tecnologías-utilizadas)
- [Arquitectura](#-arquitectura)
- [Módulos](#-módulos)
- [Base de datos](#️-base-de-datos)
- [Endpoints](#-endpoints)
- [Validaciones](#-validaciones)
- [Autenticación](#-autenticación)
- [Instalación](#-instalación)
- [Variables de entorno](#️-variables-de-entorno)
- [Ejecución](#-ejecución)
- [Pruebas con Postman](#-pruebas-con-postman)
- [Estructura del proyecto](#-estructura-del-proyecto)
- [Organización de Git](#-organización-de-git)
- [Estado del proyecto](#-estado-del-proyecto)
- [Autor](#-autor)

---

## ⚽ Descripción del proyecto

**Gestor de Torneos de Fútbol** es un proyecto backend que permite administrar los datos necesarios para la organización de un torneo de fútbol mediante una API REST.

El sistema está desarrollado utilizando una arquitectura modular de NestJS, separando las responsabilidades de controladores, servicios, DTO y módulos.

La persistencia de datos se realiza mediante **Prisma ORM**, conectado a una base de datos relacional **MySQL**.

El sistema permite administrar:

- Equipos.
- Jugadores.
- Posiciones.
- Partidos.
- Usuarios mediante registro e inicio de sesión.

---

## ✨ Características

### ⚽ Gestión de equipos

- Registrar equipos.
- Consultar todos los equipos.
- Consultar un equipo por ID.
- Modificar información de un equipo.
- Eliminar equipos.
- Asociar equipos con ligas y usuarios.

### 👤 Gestión de jugadores

- Registrar jugadores.
- Consultar todos los jugadores.
- Consultar un jugador por ID.
- Modificar información de jugadores.
- Eliminar jugadores.
- Asociar jugadores a equipos.
- Asignar posiciones.
- Registrar DNI, edad y número de camiseta.

### 📍 Gestión de posiciones

- Registrar posiciones.
- Consultar todas las posiciones.
- Consultar una posición por ID.
- Modificar posiciones.
- Eliminar posiciones.

### 📅 Gestión de partidos

- Registrar partidos.
- Consultar todos los partidos.
- Consultar un partido por ID.
- Modificar partidos.
- Eliminar partidos.
- Asociar equipos local y visitante.
- Registrar cancha, fecha y hora del encuentro.

### 🔐 Autenticación

- Registro de usuarios.
- Inicio de sesión.
- Validación de credenciales.
- Encriptación de contraseñas mediante bcrypt.
- Generación de tokens JWT.

---

## 🛠️ Tecnologías utilizadas

| Tecnología        | Utilización                               |
| ----------------- | ----------------------------------------- |
| NestJS            | Framework para desarrollar el backend     |
| TypeScript        | Lenguaje de programación                  |
| Node.js           | Entorno de ejecución                      |
| Prisma ORM        | Acceso y gestión de la base de datos      |
| MySQL             | Sistema de gestión de base de datos       |
| XAMPP             | Entorno local para ejecutar MySQL         |
| phpMyAdmin        | Administración visual de la base de datos |
| @nestjs/config    | Gestión de variables de entorno           |
| class-validator   | Validación de datos                       |
| class-transformer | Transformación de datos                   |
| bcrypt            | Encriptación de contraseñas               |
| JWT               | Autenticación mediante tokens             |
| Git               | Control de versiones                      |
| GitHub            | Alojamiento del repositorio               |
| Postman           | Pruebas de endpoints                      |

---

## 🧩 Arquitectura

El backend utiliza una arquitectura modular proporcionada por NestJS.

Cada módulo organiza sus componentes y separa las responsabilidades de la aplicación.

| Componente    | Responsabilidad                                                  |
| ------------- | ---------------------------------------------------------------- |
| Controller    | Recibe solicitudes HTTP y define las rutas                       |
| Service       | Contiene la lógica de negocio y operaciones                      |
| DTO           | Define y valida los datos recibidos                              |
| Module        | Agrupa e integra los componentes                                 |
| PrismaService | Gestiona la conexión y acceso a la base de datos mediante Prisma |

El flujo general de una solicitud es:

```text
Cliente (Postman)
       │
       ▼
   Controller
       │
       ▼
     DTO
       │
       ▼
    Service
       │
       ▼
  PrismaService
       │
       ▼
     MySQL
```

---

## 📦 Módulos

### AppModule

Es el módulo principal de la aplicación.

Se encarga de integrar los módulos y configurar los componentes principales del backend.

### EquiposModule

Gestiona las operaciones CRUD de los equipos.

### JugadoresModule

Gestiona los jugadores y sus relaciones con equipos y posiciones.

### PartidosModule

Gestiona los encuentros entre equipos.

### PosicionesModule

Gestiona las posiciones de los jugadores.

### AuthModule

Gestiona el registro y el inicio de sesión de usuarios.

---

## 🗄️ Base de datos

El proyecto utiliza una base de datos relacional MySQL denominada:

```text
gestor_torneos
```

La comunicación entre NestJS y MySQL se realiza mediante Prisma ORM.

Prisma permite consultar, crear, modificar y eliminar registros de la base de datos mediante Prisma Client.

La estructura de la base de datos se encuentra definida e introspectada en:

```text
prisma/schema.prisma
```

### Modelos principales

- Equipos
- Jugadores
- Posiciones
- Partidos
- Usuarios
- Ligas
- Liga_Usuarios
- Canchas

### Relaciones

El sistema utiliza relaciones entre las tablas para mantener la integridad de los datos.

Entre las principales relaciones se encuentran:

- Un equipo puede tener varios jugadores.
- Un jugador pertenece a un equipo.
- Una posición puede estar asignada a varios jugadores.
- Un jugador tiene una posición asociada.
- Un partido tiene un equipo local y un equipo visitante.
- Los equipos pueden participar en varios partidos.

---

## 🌐 Endpoints

La API utiliza los métodos HTTP para realizar operaciones CRUD.

### URL base

```text
http://localhost:4000
```

### ⚽ Equipos

| Método | Endpoint       | Descripción               |
| ------ | -------------- | ------------------------- |
| GET    | `/equipos`     | Obtener todos los equipos |
| GET    | `/equipos/:id` | Obtener un equipo por ID  |
| POST   | `/equipos`     | Registrar un equipo       |
| PATCH  | `/equipos/:id` | Actualizar un equipo      |
| DELETE | `/equipos/:id` | Eliminar un equipo        |

### 👤 Jugadores

| Método | Endpoint         | Descripción                 |
| ------ | ---------------- | --------------------------- |
| GET    | `/jugadores`     | Obtener todos los jugadores |
| GET    | `/jugadores/:id` | Obtener un jugador por ID   |
| POST   | `/jugadores`     | Registrar un jugador        |
| PATCH  | `/jugadores/:id` | Actualizar un jugador       |
| DELETE | `/jugadores/:id` | Eliminar un jugador         |

### 📍 Posiciones

| Método | Endpoint          | Descripción                  |
| ------ | ----------------- | ---------------------------- |
| GET    | `/posiciones`     | Obtener todas las posiciones |
| GET    | `/posiciones/:id` | Obtener una posición por ID  |
| POST   | `/posiciones`     | Registrar una posición       |
| PATCH  | `/posiciones/:id` | Actualizar una posición      |
| DELETE | `/posiciones/:id` | Eliminar una posición        |

### 📅 Partidos

| Método | Endpoint        | Descripción                |
| ------ | --------------- | -------------------------- |
| GET    | `/partidos`     | Obtener todos los partidos |
| GET    | `/partidos/:id` | Obtener un partido por ID  |
| POST   | `/partidos`     | Registrar un partido       |
| PATCH  | `/partidos/:id` | Actualizar un partido      |
| DELETE | `/partidos/:id` | Eliminar un partido        |

### 🔐 Autenticación

| Método | Endpoint         | Descripción          |
| ------ | ---------------- | -------------------- |
| POST   | `/auth/register` | Registrar un usuario |
| POST   | `/auth/login`    | Iniciar sesión       |

---

## 🛡️ Validaciones

El proyecto utiliza DTO y las librerías `class-validator` y `class-transformer` para validar y transformar los datos recibidos.

Además, se encuentra configurado un `ValidationPipe` global.

Las validaciones permiten controlar:

- Campos obligatorios.
- Tipos de datos.
- Formatos de datos.
- Longitudes de campos.
- Datos incorrectos enviados desde las solicitudes HTTP.
- Propiedades no permitidas.

La configuración global permite aplicar validaciones a las solicitudes entrantes antes de que lleguen a los servicios.

---

## 🔐 Autenticación

El sistema implementa registro e inicio de sesión.

### Registro

Endpoint:

```http
POST /auth/register
```

Ejemplo de solicitud:

```json
{
  "nombre": "Usuario Prueba",
  "email": "prueba@example.com",
  "password": "Prueba123"
}
```

### Inicio de sesión

Endpoint:

```http
POST /auth/login
```

Ejemplo:

```json
{
  "email": "prueba@example.com",
  "password": "Prueba123"
}
```

El sistema valida las credenciales y utiliza bcrypt para proteger las contraseñas almacenadas.

Cuando el inicio de sesión es exitoso, se genera un token JWT.

---

## 🚀 Instalación

### Requisitos previos

Antes de ejecutar el proyecto es necesario tener instalado:

- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)
- [XAMPP](https://www.apachefriends.org/)
- [Visual Studio Code](https://code.visualstudio.com/)

### 1. Clonar el repositorio

```bash
git clone https://github.com/romanogabrielnicolas-hue/gestor-torneos-futbol-backend.git
```

### 2. Ingresar al proyecto

```bash
cd gestor-torneos-futbol-backend
```

### 3. Instalar dependencias

```bash
npm install
```

### 4. Configurar MySQL

1. Abrir XAMPP.
2. Iniciar el servicio MySQL.
3. Abrir phpMyAdmin.
4. Crear o verificar la base de datos `gestor_torneos`.
5. Comprobar que las tablas y relaciones se encuentren correctamente configuradas.

### 5. Configurar variables de entorno

Crear un archivo `.env` en la raíz del proyecto.

Ver la sección [Variables de entorno](#️-variables-de-entorno).

### 6. Generar Prisma Client

```bash
npx prisma generate
```

---

## ⚙️ Variables de entorno

Crear un archivo `.env` en la raíz del proyecto.

Ejemplo:

```env
PORT=4000

DATABASE_URL=mysql://root:@localhost:3306/gestor_torneos

JWT_SECRET=una_clave_secreta_para_desarrollo
```

### Descripción

| Variable     | Descripción                            |
| ------------ | -------------------------------------- |
| PORT         | Puerto donde se ejecuta el servidor    |
| DATABASE_URL | URL de conexión a MySQL                |
| JWT_SECRET   | Clave utilizada para firmar tokens JWT |

> **Importante:** No subir el archivo `.env` al repositorio. Las credenciales y claves secretas deben mantenerse privadas.

---

## 💻 Ejecución del proyecto

### Modo desarrollo

```bash
npm run start:dev
```

El servidor estará disponible en:

```text
http://localhost:4000
```

### Compilar el proyecto

```bash
npm run build
```

### Ejecutar la versión compilada

```bash
npm run start:prod
```

### Validar el esquema de Prisma

```bash
npx prisma validate
```

### Generar Prisma Client

```bash
npx prisma generate
```

---

## 🧪 Pruebas con Postman

El proyecto cuenta con una colección de Postman para probar los endpoints de la API.

Las pruebas permiten verificar:

- Consultas de registros.
- Consultas por identificador.
- Creación de registros.
- Modificación de registros.
- Eliminación de registros.
- Validaciones ante datos incorrectos.
- Registro de usuarios.
- Validación de usuarios duplicados.
- Inicio de sesión.
- Validación de credenciales incorrectas.

La colección se encuentra organizada por módulos:

- Equipos.
- Jugadores.
- Partidos.
- Posiciones.
- Registro.
- Login.

### URL base para las pruebas

```text
http://localhost:4000
```

---

## 📁 Estructura del proyecto

```text
gestor-torneos-futbol-backend/
│
├── prisma/
│   └── schema.prisma
│
├── src/
│   ├── generated/
│   │   └── prisma/
│   │
│   ├── modules/
│   │   ├── app/
│   │   │   ├── app.controller.ts
│   │   │   ├── app.module.ts
│   │   │   └── app.service.ts
│   │   │
│   │   ├── prisma/
│   │   │   ├── prisma.module.ts
│   │   │   └── prisma.service.ts
│   │   │
│   │   ├── equipos/
│   │   │   ├── dto/
│   │   │   ├── equipos.controller.ts
│   │   │   ├── equipos.module.ts
│   │   │   └── equipos.service.ts
│   │   │
│   │   ├── jugadores/
│   │   │   ├── dto/
│   │   │   ├── jugadores.controller.ts
│   │   │   ├── jugadores.module.ts
│   │   │   └── jugadores.service.ts
│   │   │
│   │   ├── partidos/
│   │   │   ├── dto/
│   │   │   ├── partidos.controller.ts
│   │   │   ├── partidos.module.ts
│   │   │   └── partidos.service.ts
│   │   │
│   │   ├── posiciones/
│   │   │   ├── dto/
│   │   │   ├── posiciones.controller.ts
│   │   │   ├── posiciones.module.ts
│   │   │   └── posiciones.service.ts
│   │   │
│   │   └── auth/
│   │       ├── dto/
│   │       ├── auth.controller.ts
│   │       ├── auth.module.ts
│   │       └── auth.service.ts
│   │
│   ├── main.ts
│   └── ...
│
├── postman/
│
├── .env
├── .gitignore
├── nest-cli.json
├── package.json
├── package-lock.json
├── tsconfig.json
├── tsconfig.build.json
└── README.md
```

---

## 🌿 Organización de Git

El proyecto utiliza Git y GitHub para el control de versiones y organización del desarrollo.

### Ramas principales

| Rama        | Utilización                               |
| ----------- | ----------------------------------------- |
| `main`      | Versión estable del proyecto              |
| `dev`       | Integración de funcionalidades            |
| `feature/*` | Desarrollo de funcionalidades específicas |

### Convención de commits

Se utilizan mensajes descriptivos para identificar los cambios.

Ejemplos:

```bash
git commit -m "feat: agregar modulo de equipos"
```

```bash
git commit -m "feat: integrar Prisma con MySQL"
```

```bash
git commit -m "feat: implementar autenticacion JWT"
```

```bash
git commit -m "fix: corregir validaciones de jugadores"
```

```bash
git commit -m "docs: actualizar README"
```

---

## 📌 Estado del proyecto

El proyecto cuenta con las siguientes funcionalidades implementadas:

- [x] Creación del proyecto NestJS.
- [x] Arquitectura modular.
- [x] Configuración de variables de entorno.
- [x] Conexión con MySQL.
- [x] Integración de Prisma ORM.
- [x] Modelos de base de datos.
- [x] CRUD de equipos.
- [x] CRUD de jugadores.
- [x] CRUD de partidos.
- [x] CRUD de posiciones.
- [x] DTO para validación de datos.
- [x] Configuración de ValidationPipe global.
- [x] Registro de usuarios.
- [x] Inicio de sesión.
- [x] Encriptación de contraseñas.
- [x] Autenticación JWT.
- [x] Pruebas de endpoints mediante Postman.
- [x] Organización de módulos y servicios.

---

## 👨‍💻 Autor

**Romano Gabriel Nicolás**

Proyecto académico — Gestor de Torneos de Fútbol.

Desarrollado utilizando NestJS, TypeScript, Prisma y MySQL.

GitHub:

https://github.com/romanogabrielnicolas-hue
