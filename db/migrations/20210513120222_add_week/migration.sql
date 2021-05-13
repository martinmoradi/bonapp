-- CreateTable
CREATE TABLE "Week" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "weekNumber" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);
