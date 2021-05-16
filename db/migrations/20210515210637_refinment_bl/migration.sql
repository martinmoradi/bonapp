/*
  Warnings:

  - You are about to drop the column `membershipId` on the `Recipe` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Recipe" DROP CONSTRAINT "Recipe_membershipId_fkey";

-- AlterTable
ALTER TABLE "Recipe" DROP COLUMN "membershipId",
ADD COLUMN     "authorId" INTEGER;

-- DropEnum
DROP TYPE "GlobalRole";

-- AddForeignKey
ALTER TABLE "Recipe" ADD FOREIGN KEY ("authorId") REFERENCES "Membership"("id") ON DELETE SET NULL ON UPDATE CASCADE;
