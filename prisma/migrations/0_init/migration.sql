-- CreateTable
CREATE TABLE `canchas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(100) NOT NULL,
    `direccion` VARCHAR(150) NOT NULL,

    UNIQUE INDEX `uq_canchas_nombre`(`nombre`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `equipos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(100) NOT NULL,
    `color` VARCHAR(50) NOT NULL,
    `liga_id` INTEGER NOT NULL,
    `usuario_id` INTEGER NOT NULL,

    INDEX `fk_equipos_membresia`(`liga_id`, `usuario_id`),
    UNIQUE INDEX `uq_equipos_liga_nombre`(`liga_id`, `nombre`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `jugadores` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(100) NOT NULL,
    `dni` VARCHAR(20) NOT NULL,
    `edad` INTEGER NOT NULL,
    `numero` INTEGER NOT NULL,
    `posicion_id` INTEGER NOT NULL,
    `equipo_id` INTEGER NOT NULL,

    UNIQUE INDEX `uq_jugadores_dni`(`dni`),
    INDEX `fk_jugadores_posicion`(`posicion_id`),
    UNIQUE INDEX `uq_jugadores_equipo_numero`(`equipo_id`, `numero`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `liga_usuarios` (
    `liga_id` INTEGER NOT NULL,
    `usuario_id` INTEGER NOT NULL,
    `fecha_ingreso` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `fk_liga_usuarios_usuario`(`usuario_id`),
    PRIMARY KEY (`liga_id`, `usuario_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ligas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(100) NOT NULL,
    `creador_id` INTEGER NOT NULL,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `uq_ligas_nombre`(`nombre`),
    INDEX `fk_ligas_creador`(`creador_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `partidos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `equipo_local_id` INTEGER NOT NULL,
    `equipo_visitante_id` INTEGER NOT NULL,
    `cancha_id` INTEGER NOT NULL,
    `fecha` DATE NOT NULL,
    `hora` TIME(0) NOT NULL,

    INDEX `fk_partidos_local`(`equipo_local_id`),
    INDEX `fk_partidos_visitante`(`equipo_visitante_id`),
    UNIQUE INDEX `uq_partidos_cancha_fecha_hora`(`cancha_id`, `fecha`, `hora`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `posiciones` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(50) NOT NULL,

    UNIQUE INDEX `uq_posiciones_nombre`(`nombre`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usuarios` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(100) NOT NULL,
    `email` VARCHAR(150) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `uq_usuarios_email`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `equipos` ADD CONSTRAINT `fk_equipos_membresia` FOREIGN KEY (`liga_id`, `usuario_id`) REFERENCES `liga_usuarios`(`liga_id`, `usuario_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `jugadores` ADD CONSTRAINT `fk_jugadores_equipo` FOREIGN KEY (`equipo_id`) REFERENCES `equipos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `jugadores` ADD CONSTRAINT `fk_jugadores_posicion` FOREIGN KEY (`posicion_id`) REFERENCES `posiciones`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `liga_usuarios` ADD CONSTRAINT `fk_liga_usuarios_liga` FOREIGN KEY (`liga_id`) REFERENCES `ligas`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `liga_usuarios` ADD CONSTRAINT `fk_liga_usuarios_usuario` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ligas` ADD CONSTRAINT `fk_ligas_creador` FOREIGN KEY (`creador_id`) REFERENCES `usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `partidos` ADD CONSTRAINT `fk_partidos_cancha` FOREIGN KEY (`cancha_id`) REFERENCES `canchas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `partidos` ADD CONSTRAINT `fk_partidos_local` FOREIGN KEY (`equipo_local_id`) REFERENCES `equipos`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `partidos` ADD CONSTRAINT `fk_partidos_visitante` FOREIGN KEY (`equipo_visitante_id`) REFERENCES `equipos`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
