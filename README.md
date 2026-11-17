# ⚽ Gestor de Torneos de Fútbol

### Backend REST API — NestJS + TypeScript + MySQL

API REST para la gestión de equipos, jugadores, posiciones y partidos de un torneo de fútbol. Desarrollada con NestJS, TypeScript y TypeORM, utilizando MySQL como sistema de gestión de base de datos.

---

## 📋 Tabla de contenido

- [⚽ Descripción del proyecto](#-descripción-del-proyecto)
- [✨ Características](#-características)
- [🧩 Arquitectura y módulos](#-arquitectura-y-módulos)
- [🛠️ Tecnologías utilizadas](#️-tecnologías-utilizadas)
- [🗄️ Base de datos](#️-base-de-datos)
- [🔗 Relaciones entre tablas](#-relaciones-entre-tablas)
- [🌐 Endpoints de la API](#-endpoints-de-la-api)
- [🚀 Instalación](#-instalación)
- [⚙️ Variables de entorno](#️-variables-de-entorno)
- [💻 Ejecución del proyecto](#-ejecución-del-proyecto)
- [🧪 Pruebas con Postman](#-pruebas-con-postman)
- [📁 Estructura del proyecto](#-estructura-del-proyecto)
- [🌿 Organización de Git](#-organización-de-git)
- [📌 Estado del proyecto](#-estado-del-proyecto)
- [👨‍💻 Autor](#-autor)

---

## ⚽ Descripción del proyecto

**Gestor de Torneos de Fútbol** es un proyecto backend desarrollado para administrar la información de un torneo de fútbol mediante una API REST.

El sistema está organizado en módulos independientes, siguiendo la arquitectura modular de NestJS. Cada módulo separa sus responsabilidades mediante controladores, servicios, entidades y DTO.

La aplicación utiliza **MySQL** para almacenar la información y **TypeORM** para gestionar la comunicación entre el backend y la base de datos.

El proyecto contempla los siguientes recursos:

- ⚽ Equipos.
- 👤 Jugadores.
- 📍 Posiciones.
- 📅 Partidos.
- 🔐 Autenticación (estructura inicial).
- 👥 Usuarios (estructura inicial).

## ✨ Características

### ⚽ Gestión de equipos

- Registrar nuevos equipos.
- Consultar todos los equipos.
- Consultar un equipo por su identificador.
- Actualizar información de un equipo.
- Eliminar equipos.
- Consultar los jugadores asociados a cada equipo.
- Registrar el identificador de liga y usuario asociado.

### 👤 Gestión de jugadores

- Registrar jugadores.
- Almacenar nombre, DNI y edad.
- Asignar una posición a cada jugador.
- Asignar un jugador a un equipo.
- Registrar el número de camiseta.
- Consultar jugadores.
- Consultar un jugador por su identificador.
- Actualizar y eliminar jugadores.
- Consultar la información relacionada con su equipo.

### 📍 Gestión de posiciones

Se incorpora la estructura del módulo de posiciones para administrar las posiciones de los jugadores.

- Definición de la entidad Posición.
- Identificador autoincremental.
- Nombre de la posición.
- Controlador y servicio inicial.
- Rutas CRUD estructuradas.

**Nota:** la lógica de persistencia del módulo todavía se encuentra pendiente de implementación.

### 📅 Gestión de partidos

- Registrar partidos entre dos equipos.
- Establecer equipo local y visitante.
- Guardar fecha y hora del encuentro.
- Registrar el identificador de la cancha.
- Consultar todos los partidos.
- Consultar un partido por su identificador.
- Actualizar y eliminar partidos.
- Consultar información de los equipos participantes.

### 🔐 Autenticación y usuarios

Se incorporan las estructuras iniciales de los módulos:

- **Auth:** destinado a gestionar los procesos de autenticación.
- **Users:** destinado a administrar los usuarios del sistema.

Ambos módulos cuentan con controladores, servicios, DTO y entidades iniciales.

**Nota:** estos módulos todavía no tienen implementada su lógica funcional ni están registrados en el módulo principal de la aplicación.

### 🛡️ Validaciones e integridad de datos

- Validación de los datos recibidos mediante DTO.
- Validación de tipos de datos.
- Restricción de campos obligatorios.
- Validación de longitudes máximas.
- Validación del formato del DNI.
- Validación de edad y número de camiseta.
- Validación de fechas y horarios.
- Restricciones de unicidad para el DNI.
- Relaciones entre entidades mediante claves foráneas.

---

## 🧩 Arquitectura y módulos

El backend utiliza una arquitectura modular basada en NestJS.

Cada módulo separa las responsabilidades de la aplicación:

| Componente | Responsabilidad                                       |
| ---------- | ----------------------------------------------------- |
| Controller | Recibe las solicitudes HTTP y devuelve respuestas.    |
| Service    | Contiene la lógica de negocio y operaciones CRUD.     |
| Entity     | Representa las tablas de la base de datos.            |
| DTO        | Define y valida la estructura de los datos recibidos. |
| Module     | Agrupa e integra los componentes de cada recurso.     |

### Módulo de equipos

`EquiposModule`

Se encarga de gestionar los equipos y su relación con los jugadores.

### Módulo de jugadores

`JugadoresModule`

Administra los jugadores y las relaciones con los equipos y las posiciones.

### Módulo de partidos

`PartidosModule`

Gestiona los encuentros y las relaciones con los equipos local y visitante.

### Módulo de posiciones

`PosicionesModule`

Contiene la estructura para administrar las posiciones de los jugadores. Se encuentra registrado en el módulo principal.

### Módulo de autenticación

`AuthModule`

Contiene la estructura inicial destinada a implementar los procesos de autenticación. Pendiente de integración y desarrollo funcional.

### Módulo de usuarios

`UsersModule`

Contiene la estructura inicial para administrar usuarios. Pendiente de integración y desarrollo funcional.

### Módulo principal

`AppModule`

Es el módulo principal de la aplicación. Integra los módulos de equipos, jugadores, partidos y posiciones, además de configurar las variables de entorno y la conexión con MySQL mediante TypeORM.

---

## 🛠️ Tecnologías utilizadas

| Tecnología        | Utilización                                |
| ----------------- | ------------------------------------------ |
| NestJS            | Framework para desarrollar el backend.     |
| TypeScript        | Lenguaje de programación.                  |
| Node.js           | Entorno de ejecución.                      |
| MySQL             | Sistema de gestión de base de datos.       |
| XAMPP             | Entorno local para ejecutar MySQL.         |
| phpMyAdmin        | Administración visual de la base de datos. |
| TypeORM           | Mapeo objeto-relacional (ORM).             |
| mysql2            | Driver de conexión con MySQL.              |
| @nestjs/config    | Gestión de variables de entorno.           |
| class-validator   | Validación de datos mediante DTO.          |
| class-transformer | Transformación de datos recibidos.         |
| Git               | Control de versiones.                      |
| GitHub            | Alojamiento del repositorio.               |
| Postman           | Prueba y documentación de endpoints.       |

---

## 🗄️ Base de datos

El proyecto utiliza una base de datos relacional llamada:

`gestor_torneos`

La conexión se realiza mediante TypeORM y el driver mysql2.

### Tabla: equipos

Almacena la información de los equipos participantes.

| Campo      | Tipo         | Descripción                         |
| ---------- | ------------ | ----------------------------------- |
| id         | INT          | Identificador principal.            |
| nombre     | VARCHAR(100) | Nombre del equipo.                  |
| color      | VARCHAR(50)  | Color del equipo.                   |
| liga_id    | INT          | Identificador de la liga.           |
| usuario_id | INT          | Identificador del usuario asociado. |

### Tabla: jugadores

Almacena los datos de los jugadores y sus relaciones correspondientes.

| Campo       | Tipo         | Descripción                   |
| ----------- | ------------ | ----------------------------- |
| id          | INT          | Identificador principal.      |
| nombre      | VARCHAR(100) | Nombre del jugador.           |
| dni         | VARCHAR(20)  | Documento de identidad único. |
| edad        | INT          | Edad del jugador.             |
| posicion_id | INT          | Referencia a la posición.     |
| equipo_id   | INT          | Referencia al equipo.         |
| numero      | INT          | Número de camiseta.           |

### Tabla: posiciones

Almacena las posiciones disponibles para los jugadores.

| Campo  | Tipo        | Descripción              |
| ------ | ----------- | ------------------------ |
| id     | INT         | Identificador principal. |
| nombre | VARCHAR(50) | Nombre de la posición.   |

### Tabla: partidos

Almacena los encuentros programados entre los equipos.

| Campo               | Tipo | Descripción                         |
| ------------------- | ---- | ----------------------------------- |
| id                  | INT  | Identificador principal.            |
| equipo_local_id     | INT  | Identificador del equipo local.     |
| equipo_visitante_id | INT  | Identificador del equipo visitante. |
| cancha_id           | INT  | Identificador de la cancha.         |
| fecha               | DATE | Fecha del encuentro.                |
| hora                | TIME | Hora del encuentro.                 |

**Importante:** la configuración de TypeORM utiliza `synchronize: false`. Por lo tanto, las tablas deben estar creadas previamente en MySQL y respetar la estructura de las entidades.

---

## 🔗 Relaciones entre tablas

La base de datos utiliza relaciones para mantener la integridad de la información.

### Equipos y jugadores

Un equipo puede tener muchos jugadores, pero cada jugador pertenece a un único equipo.

**Relación: uno a muchos (1:N).**

### Posiciones y jugadores

Una posición puede estar asignada a varios jugadores, pero cada jugador tiene una posición asociada.

**Relación: uno a muchos (1:N).**

### Equipos y partidos

Cada partido tiene dos referencias a la tabla equipos:

- Equipo local.
- Equipo visitante.

Un equipo puede participar en distintos partidos, tanto como local como visitante.

**Relación: uno a muchos (1:N) desde cada referencia de equipo.**

### Diagrama conceptual

```text
          ┌──────────────────┐
          │      EQUIPOS     │
          ├──────────────────┤
          │ id (PK)          │
          │ nombre           │
          │ color            │
          │ liga_id          │
          │ usuario_id       │
          └────────┬─────────┘
                   │
                1  │  N
                   │
          ┌────────▼─────────┐
          │    JUGADORES     │
          ├──────────────────┤
          │ id (PK)          │
          │ nombre           │
          │ dni              │
          │ edad             │
          │ posicion_id (FK) │
          │ equipo_id (FK)   │
          │ numero           │
          └────────┬─────────┘
                   │
                N  │  1
                   │
          ┌────────▼─────────┐
          │    POSICIONES    │
          ├──────────────────┤
          │ id (PK)          │
          │ nombre           │
          └──────────────────┘


          ┌──────────────────┐
          │      EQUIPOS     │
          │    (equipo 1)    │
          └────────┬─────────┘
                   │ equipo_local_id
                   │
          ┌────────▼─────────┐
          │     PARTIDOS     │
          ├──────────────────┤
          │ id (PK)          │
          │ equipo_local_id  │
          │ equipo_visitante_id
          │ cancha_id        │
          │ fecha            │
          │ hora             │
          └────────▲─────────┘
                   │ equipo_visitante_id
                   │
          ┌────────┴─────────┐
          │      EQUIPOS     │
          │    (equipo 2)    │
          └──────────────────┘
```

---

## 🌐 Endpoints de la API

La API utiliza los métodos HTTP para realizar las operaciones CRUD (Crear, Leer, Actualizar y Eliminar).

**URL local de la API:**

`http://localhost:3000`

### ⚽ Equipos

| Método | Endpoint       | Descripción                |
| ------ | -------------- | -------------------------- |
| GET    | `/equipos`     | Obtener todos los equipos. |
| GET    | `/equipos/:id` | Obtener un equipo por ID.  |
| POST   | `/equipos`     | Registrar un equipo.       |
| PATCH  | `/equipos/:id` | Actualizar un equipo.      |
| DELETE | `/equipos/:id` | Eliminar un equipo.        |

### 👤 Jugadores

| Método | Endpoint         | Descripción                  |
| ------ | ---------------- | ---------------------------- |
| GET    | `/jugadores`     | Obtener todos los jugadores. |
| GET    | `/jugadores/:id` | Obtener un jugador por ID.   |
| POST   | `/jugadores`     | Registrar un jugador.        |
| PATCH  | `/jugadores/:id` | Actualizar un jugador.       |
| DELETE | `/jugadores/:id` | Eliminar un jugador.         |

### 📍 Posiciones

Las rutas están creadas, pero la lógica de persistencia del servicio está pendiente.

| Método | Endpoint          | Descripción                    |
| ------ | ----------------- | ------------------------------ |
| GET    | `/posiciones`     | Consultar posiciones.          |
| GET    | `/posiciones/:id` | Consultar una posición por ID. |
| POST   | `/posiciones`     | Registrar una posición.        |
| PATCH  | `/posiciones/:id` | Actualizar una posición.       |
| DELETE | `/posiciones/:id` | Eliminar una posición.         |

### 📅 Partidos

| Método | Endpoint        | Descripción                 |
| ------ | --------------- | --------------------------- |
| GET    | `/partidos`     | Obtener todos los partidos. |
| GET    | `/partidos/:id` | Obtener un partido por ID.  |
| POST   | `/partidos`     | Registrar un partido.       |
| PATCH  | `/partidos/:id` | Actualizar un partido.      |
| DELETE | `/partidos/:id` | Eliminar un partido.        |

### 🔐 Autenticación y usuarios

Los módulos `Auth` y `Users` cuentan con controladores y rutas iniciales en el código, pero todavía no están registrados en `AppModule`. Por lo tanto, sus endpoints no están disponibles actualmente en la API.

---

## 🚀 Instalación

### Requisitos previos

Antes de ejecutar el proyecto, es necesario tener instalado:

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

### 4. Crear la base de datos

1. Abrir XAMPP.
2. Iniciar el servicio MySQL.
3. Ingresar a phpMyAdmin.
4. Crear la base de datos `gestor_torneos`.
5. Crear las tablas correspondientes a las entidades del proyecto.
6. Configurar las claves primarias, relaciones y restricciones necesarias.

**Nota:** TypeORM tiene desactivada la sincronización automática de esquemas. La creación y modificación de tablas debe realizarse manualmente o mediante migraciones.

### 5. Configurar las variables de entorno

Crear un archivo `.env` en la raíz del proyecto.

Consultar la sección [Variables de entorno](#️-variables-de-entorno).

---

## ⚙️ Variables de entorno

La aplicación utiliza variables de entorno para configurar el servidor y la conexión con la base de datos.

Crear un archivo `.env`:

```env
PORT=3000

DATABASE_URL=mysql://root:@localhost:3306/gestor_torneos
```

### Descripción de variables

| Variable     | Descripción                              |
| ------------ | ---------------------------------------- |
| PORT         | Puerto en el que se ejecuta el servidor. |
| DATABASE_URL | Dirección de conexión con MySQL.         |

**Importante:**

- La configuración de ejemplo utiliza el usuario `root` de XAMPP sin contraseña.
- Si MySQL tiene una contraseña configurada, modificar `DATABASE_URL`.
- El archivo `.env` está excluido del repositorio mediante `.gitignore`.
- No publicar credenciales ni información sensible en GitHub.

---

## 💻 Ejecución del proyecto

Para iniciar el servidor en modo desarrollo, ejecutar:

```bash
npm run start:dev
```

El servidor estará disponible en:

`http://localhost:3000`

### Compilar el proyecto

```bash
npm run build
```

### Ejecutar la versión compilada

```bash
npm run start:prod
```

### Ejecutar pruebas

```bash
npm run test
```

### Ejecutar pruebas en modo observación

```bash
npm run test:watch
```

---

## 🧪 Pruebas con Postman

Postman permite realizar solicitudes HTTP para comprobar el funcionamiento de los endpoints de la API.

Se pueden utilizar los siguientes métodos:

- **GET:** consultar información.
- **POST:** registrar nuevos datos.
- **PATCH:** actualizar información.
- **DELETE:** eliminar registros.

La URL base para las pruebas locales es:

`http://localhost:3000`

Se recomienda organizar las solicitudes en colecciones separadas por módulo:

- Equipos.
- Jugadores.
- Posiciones.
- Partidos.

Los módulos de autenticación y usuarios podrán incorporarse a las pruebas cuando su implementación funcional esté terminada.

---

## 📁 Estructura del proyecto

```text
gestor-torneos-futbol-backend/
│
├── src/
│   ├── main.ts
│   │
│   └── modules/
│       │
│       ├── app/
│       │   ├── app.controller.ts
│       │   ├── app.module.ts
│       │   └── app.service.ts
│       │
│       ├── auth/
│       │   ├── dto/
│       │   ├── entities/
│       │   ├── auth.controller.ts
│       │   ├── auth.module.ts
│       │   └── auth.service.ts
│       │
│       ├── equipos/
│       │   ├── dto/
│       │   │   ├── create-equipo.dto.ts
│       │   │   └── update-equipo.dto.ts
│       │   ├── entities/
│       │   │   └── equipo.entity.ts
│       │   ├── equipos.controller.ts
│       │   ├── equipos.module.ts
│       │   └── equipos.service.ts
│       │
│       ├── jugadores/
│       │   ├── dto/
│       │   │   ├── create-jugadore.dto.ts
│       │   │   └── update-jugadore.dto.ts
│       │   ├── entities/
│       │   │   └── jugadore.entity.ts
│       │   ├── jugadores.controller.ts
│       │   ├── jugadores.module.ts
│       │   └── jugadores.service.ts
│       │
│       ├── partidos/
│       │   ├── dto/
│       │   │   ├── create-partido.dto.ts
│       │   │   └── update-partido.dto.ts
│       │   ├── entities/
│       │   │   └── partido.entity.ts
│       │   ├── partidos.controller.ts
│       │   ├── partidos.module.ts
│       │   └── partidos.service.ts
│       │
│       ├── posiciones/
│       │   ├── dto/
│       │   ├── entities/
│       │   │   └── posicione.entity.ts
│       │   ├── posiciones.controller.ts
│       │   ├── posiciones.module.ts
│       │   └── posiciones.service.ts
│       │
│       └── users/
│           ├── dto/
│           ├── entities/
│           ├── users.controller.ts
│           ├── users.module.ts
│           └── users.service.ts
│
├── postman/
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

El proyecto utiliza Git y GitHub para gestionar los cambios y organizar el desarrollo mediante ramas.

### Ramas principales

| Rama                        | Utilización                                                     |
| --------------------------- | --------------------------------------------------------------- |
| `main`                      | Versión estable del proyecto.                                   |
| `dev`                       | Integración de las funcionalidades desarrolladas.               |
| `feature/estructura-nestjs` | Creación de la estructura inicial de NestJS.                    |
| `feature/conexion-mysql`    | Conexión con MySQL, entidades, servicios CRUD y nuevos módulos. |

### Convención de commits

Se utilizan mensajes descriptivos para identificar los cambios realizados.

Ejemplos:

```bash
git commit -m "feat: agregar modulo de equipos"

git commit -m "feat: integrar conexion con MySQL"

git commit -m "feat: agregar modulo de posiciones"

git commit -m "fix: corregir conexion con MySQL"

git commit -m "refactor: organizar servicios"

git commit -m "docs: actualizar README"
```

Las funcionalidades se desarrollan en ramas independientes y posteriormente se integran mediante Pull Requests.

---

## 📌 Estado del proyecto

El proyecto se encuentra en desarrollo.

### Funcionalidades implementadas

- [x] Creación del proyecto NestJS.
- [x] Organización de la estructura modular.
- [x] Creación de los módulos de equipos, jugadores y partidos.
- [x] Configuración de variables de entorno.
- [x] Instalación de TypeORM y MySQL.
- [x] Configuración de conexión con MySQL.
- [x] Creación de entidades de equipos, jugadores y partidos.
- [x] Configuración de relaciones entre entidades.
- [x] Implementación de servicios CRUD de equipos, jugadores y partidos.
- [x] Implementación de validaciones mediante DTO.
- [x] Configuración de ValidationPipe global.
- [x] Creación de la estructura inicial del módulo de posiciones.
- [x] Incorporación de la estructura inicial de Auth.
- [x] Incorporación de la estructura inicial de Users.

### Funcionalidades pendientes

- [ ] Implementar la lógica CRUD del módulo de posiciones.
- [ ] Integrar el módulo de autenticación.
- [ ] Implementar registro e inicio de sesión.
- [ ] Implementar gestión funcional de usuarios.
- [ ] Incorporar mecanismos de seguridad y autorización.
- [ ] Integrar y documentar las pruebas de todos los endpoints.
- [ ] Completar las pruebas de integración.
- [ ] Documentar la configuración y creación de la base de datos.
- [ ] Completar la documentación técnica del proyecto.

---

## 👨‍💻 Autor

<div align="center">

**Romano Gabriel Nicolas**

Proyecto académico — Gestor de Torneos de Fútbol

Desarrollado con ❤️ utilizando NestJS, TypeScript y MySQL.

[GitHub](https://github.com/romanogabrielnicolas-hue)

</div>
