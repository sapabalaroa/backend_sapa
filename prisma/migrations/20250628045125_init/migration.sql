-- CreateTable
CREATE TABLE "Pengaduan" (
    "id" SERIAL NOT NULL,
    "nama" TEXT,
    "email" TEXT,
    "jenisKelamin" TEXT,
    "noTelepon" TEXT,
    "kronologi" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Pengaduan_pkey" PRIMARY KEY ("id")
);
