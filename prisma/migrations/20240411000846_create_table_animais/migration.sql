-- CreateTable
CREATE TABLE `animais` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `raca` VARCHAR(191) NOT NULL,
    `genero` VARCHAR(191) NOT NULL,
    `idade` VARCHAR(191) NOT NULL,
    `tamanho` VARCHAR(191) NOT NULL,
    `vacinado` VARCHAR(191) NOT NULL,
    `localizacao` VARCHAR(191) NOT NULL,
    `contato` VARCHAR(191) NOT NULL,
    `fotourl` VARCHAR(191) NOT NULL,
    `informacao` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
