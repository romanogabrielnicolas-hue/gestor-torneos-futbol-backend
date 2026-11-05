&#x20;\<div align="center">

# ⚽ Gestor de Torneos de Fútbol

### Backend REST API — NestJS + TypeScript + MySQL

API REST para la gestión de equipos, jugadores y partidos de un torneo de fútbol. Desarrollada con NestJS, TypeScript y TypeORM, utilizando MySQL como sistema de gestión de base de datos.

\<br>

\

\</div>

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
- [📁 Estructura del proyecto](#-estructura-del-proyecto)
- [🌿 Organización de Git](#-organización-de-git)
- [📌 Estado del proyecto](#-estado-del-proyecto)
- [👨‍💻 Autor](#-autor)

---

## ⚽ Descripción del proyecto

**Gestor de Torneos de Fútbol** es un proyecto backend desarrollado para administrar la información de un torneo de fútbol mediante una API REST.

El sistema está organizado en módulos independientes, siguiendo la arquitectura modular de NestJS. Cada módulo contiene sus propios controladores, servicios, entidades y DTO.

La aplicación utiliza **MySQL** para almacenar la información y **TypeORM** para gestionar la comunicación entre el backend y la base de datos.

El proyecto contempla tres recursos principales:

- ⚽ Equipos.
- 👤 Jugadores.
- 📅 Partidos.

## ✨ Características

### ⚽ Gestión de equipos

- Registrar nuevos equipos.
- Consultar todos los equipos.
- Consultar un equipo por su identificador.
- Actualizar información de un equipo.
- Eliminar equipos.
- Consultar los jugadores asociados a cada equipo.

### 👤 Gestión de jugadores

- Registrar jugadores.
- Almacenar nombre, DNI, edad y posición.
- Asignar un jugador a un equipo.
- Registrar el número de camiseta.
- Consultar jugadores.
- Consultar un jugador por su identificador.
- Actualizar y eliminar jugadores.

### 📅 Gestión de partidos

- Registrar partidos entre dos equipos.
- Establecer equipo local y visitante.
- Guardar fecha y hora del encuentro.
- Registrar la cancha donde se juega.
- Consultar todos los partidos.
- Consultar un partido por su identificador.
- Actualizar y eliminar partidos.

### 🔐 Integridad de los datos

- Claves primarias autoincrementales.
- Claves foráneas para relacionar las tablas.
- Restricciones para evitar DNI duplicados.
- Restricción para evitar números de camiseta repetidos dentro de un mismo equipo.
- Restricción para impedir partidos entre un equipo y sí mismo.
- Protección de relaciones mediante restricciones de integridad referencial.

---

## 🧩 Arquitectura y módulos

El backend utiliza una arquitectura modular basada en NestJS.

Cada módulo separa las responsabilidades de la aplicación:

| Componente | Responsabilidad                                    |
| ---------- | -------------------------------------------------- |
| Controller | Recibe las solicitudes HTTP y devuelve respuestas. |
| Service    | Contiene la lógica de negocio y operaciones CRUD.  |
| Entity     | Representa las tablas de la base de datos.         |
| DTO        | Define la estructura de los datos recibidos.       |
| Module     | Agrupa e integra los componentes de cada recurso.  |

### Módulo de equipos

`EquiposModule`

Se encarga de gestionar los equipos y su relación con los jugadores.

### Módulo de jugadores

`JugadoresModule`

Administra los jugadores y la relación con el equipo al que pertenecen.

### Módulo de partidos

`PartidosModule`

Gestiona los encuentros y las relaciones con los equipos local y visitante.

### Módulo principal

`AppModule`

Es el módulo principal de la aplicación. Integra los módulos de equipos, jugadores y partidos, además de configurar las variables de entorno y la conexión con MySQL mediante TypeORM.

---

## 🛠️ Tecnologías utilizadas

| Tecnología     | Utilización                                     |
| -------------- | ----------------------------------------------- |
| NestJS         | Framework para desarrollar el backend.          |
| TypeScript     | Lenguaje de programación.                       |
| Node.js        | Entorno de ejecución.                           |
| MySQL          | Sistema de gestión de base de datos.            |
| XAMPP          | Entorno local para ejecutar MySQL.              |
| phpMyAdmin     | Administración visual de la base de datos.      |
| TypeORM        | Mapeo objeto-relacional (ORM).                  |
| mysql2         | Driver de conexión con MySQL.                   |
| @nestjs/config | Gestión de variables de entorno.                |
| Git            | Control de versiones.                           |
| GitHub         | Alojamiento del repositorio.                    |
| Postman        | Herramienta prevista para probar los endpoints. |

---

## 🗄️ Base de datos

El proyecto utiliza una base de datos relacional llamada:

`gestor_torneos`

La base de datos está compuesta por tres tablas principales.

### Tabla: equipos

Almacena la información de los equipos participantes.

| Campo  | Tipo         | Descripción              |
| ------ | ------------ | ------------------------ |
| id     | INT          | Identificador principal. |
| nombre | VARCHAR(100) | Nombre del equipo.       |
| color  | VARCHAR(50)  | Color del equipo.        |

### Tabla: jugadores

Almacena los datos de los jugadores y su equipo correspondiente.

| Campo     | Tipo         | Descripción                   |
| --------- | ------------ | ----------------------------- |
| id        | INT          | Identificador principal.      |
| nombre    | VARCHAR(100) | Nombre del jugador.           |
| dni       | VARCHAR(20)  | Documento de identidad único. |
| edad      | INT          | Edad del jugador.             |
| posicion  | VARCHAR(50)  | Posición en el campo.         |
| equipo_id | INT          | Referencia al equipo.         |
| numero    | INT          | Número de camiseta.           |

### Tabla: partidos

Almacena los encuentros programados entre los equipos.

| Campo               | Tipo         | Descripción                         |
| ------------------- | ------------ | ----------------------------------- |
| id                  | INT          | Identificador principal.            |
| equipo_local_id     | INT          | Identificador del equipo local.     |
| equipo_visitante_id | INT          | Identificador del equipo visitante. |
| fecha               | DATE         | Fecha del encuentro.                |
| hora                | TIME         | Hora del encuentro.                 |
| cancha              | VARCHAR(100) | Lugar donde se juega.               |

---

## 🔗 Relaciones entre tablas

La base de datos utiliza relaciones para mantener la integridad de la información.

### Equipos y jugadores

Un equipo puede tener muchos jugadores, pero cada jugador pertenece a un único equipo.

**Relación: uno a muchos (1).**

### Equipos y partidos

Cada partido tiene dos referencias a la tabla equipos:

- Equipo local.
- Equipo visitante.

Un equipo puede participar en distintos partidos, tanto como local como visitante.

**Relación: uno a muchos (1) desde cada referencia de equipo.**

### Diagrama conceptual

```text
             ┌──────────────────┐
             │      EQUIPOS     │
             ├──────────────────┤
             │ id (PK)          │
             │ nombre           │
             │ color            │
             └────────┬─────────┘
                      │
               1      │      N
                      │
             ┌────────▼─────────┐
             │    JUGADORES     │
             ├──────────────────┤
             │ id (PK)          │
             │ nombre           │
             │ dni              │
             │ edad             │
             │ posicion         │
             │ equipo_id (FK)   │
             │ numero           │
             └──────────────────┘


             ┌──────────────────┐
             │      EQUIPOS     │
             │    (equipo 1)    │
             └────────┬─────────┘
                      │
                      │ equipo_local_id
                      │
             ┌────────▼─────────┐
             │     PARTIDOS     │
             ├──────────────────┤
             │ id (PK)          │
             │ equipo_local_id  │
             │ equipo_visitante_id
             │ fecha            │
             │ hora             │
             │ cancha           │
             └────────▲─────────┘
                      │
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

### 📅 Partidos

| Método | Endpoint        | Descripción                 |
| ------ | --------------- | --------------------------- |
| GET    | `/partidos`     | Obtener todos los partidos. |
| GET    | `/partidos/:id` | Obtener un partido por ID.  |
| POST   | `/partidos`     | Registrar un partido.       |
| PATCH  | `/partidos/:id` | Actualizar un partido.      |
| DELETE | `/partidos/:id` | Eliminar un partido.        |

**URL local de la API:**

`http://localhost:3000`

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
5. Crear las tablas `equipos`, `jugadores` y `partidos`, incluyendo sus claves primarias, relaciones y restricciones.

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
API_BASE_URL=http://localhost:3000
```

| Variable     | Descripción                              |
| ------------ | ---------------------------------------- |
| PORT         | Puerto en el que se ejecuta el servidor. |
| DATABASE_URL | Dirección de conexión con MySQL.         |
| API_BASE_URL | URL base de la API.                      |

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

Para generar una compilación:

```bash
npm run build
```

Para ejecutar la versión compilada:

```bash
npm run start:prod
```

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
│       ├── equipos/
│       │   ├── dto/
│       │   ├── entities/
│       │   │   └── equipo.entity.ts
│       │   ├── equipos.controller.ts
│       │   ├── equipos.module.ts
│       │   └── equipos.service.ts
│       │
│       ├── jugadores/
│       │   ├── dto/
│       │   ├── entities/
│       │   │   └── jugadore.entity.ts
│       │   ├── jugadores.controller.ts
│       │   ├── jugadores.module.ts
│       │   └── jugadores.service.ts
│       │
│       └── partidos/
│           ├── dto/
│           ├── entities/
│           │   └── partido.entity.ts
│           ├── partidos.controller.ts
│           ├── partidos.module.ts
│           └── partidos.service.ts
│
├── .env                  # Configuración local (no subir)
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

| Rama                        | Utilización                                       |
| --------------------------- | ------------------------------------------------- |
| `main`                      | Versión estable del proyecto.                     |
| `dev`                       | Integración de las funcionalidades desarrolladas. |
| `feature/estructura-nestjs` | Creación de la estructura inicial de NestJS.      |
| `feature/conexion-mysql`    | Conexión con MySQL, entidades y servicios CRUD.   |

### Convención de commits

Se utilizan mensajes descriptivos para identificar los cambios realizados.

Ejemplos:

```bash
git commit -m "feat: agregar modulo de equipos"
git commit -m "fix: corregir conexion con MySQL"
git commit -m "refactor: organizar servicios"
git commit -m "docs: actualizar README"
```

Las funcionalidades se desarrollan en ramas independientes y posteriormente se integran mediante Pull Requests.

---

## 📌 Estado del proyecto

El proyecto se encuentra en desarrollo.

- [x] Creación del proyecto NestJS.
- [x] Organización de la estructura modular.
- [x] Creación de los módulos de equipos, jugadores y partidos.
- [x] Configuración de variables de entorno.
- [x] Instalación de TypeORM y MySQL.
- [x] Creación de la base de datos relacional.
- [x] Creación de entidades.
- [x] Configuración de relaciones entre entidades.
- [x] Conexión del backend con MySQL.
- [x] Implementación de servicios CRUD.
- [ ] Validaciones de DTO.
- [ ] Manejo completo de errores y validaciones de negocio.
- [ ] Pruebas de endpoints con Postman.
- [ ] Documentación de la colección de Postman.
- [ ] Documentación final del proyecto.

---

## 👨‍💻 Autor

\<div align="center">

**Romano Gabriel Nicolas**

Proyecto académico — Gestor de Torneos de Fútbol

Desarrollado con ❤️ utilizando NestJS, TypeScript y MySQL.

[GitHub](https://github.com/romanogabrielnicolas-hue)

\</div>
