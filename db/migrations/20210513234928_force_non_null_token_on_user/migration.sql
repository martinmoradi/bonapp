/*
  Warnings:

  - Made the column `userId` on table `Token` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Token" ALTER COLUMN "userId" SET NOT NULL;
