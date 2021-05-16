/*
  Warnings:

  - You are about to drop the column `ingredientId` on the `Tag` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[url]` on the table `ScrappedRecipe` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `url` to the `ScrappedRecipe` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Tag" DROP CONSTRAINT "Tag_ingredientId_fkey";

-- AlterTable
ALTER TABLE "ScrappedRecipe" ADD COLUMN     "url" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Tag" DROP COLUMN "ingredientId";

-- CreateTable
CREATE TABLE "_IngredientToTag" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_IngredientToTag_AB_unique" ON "_IngredientToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_IngredientToTag_B_index" ON "_IngredientToTag"("B");

-- CreateIndex
CREATE UNIQUE INDEX "ScrappedRecipe.url_unique" ON "ScrappedRecipe"("url");

-- AddForeignKey
ALTER TABLE "_IngredientToTag" ADD FOREIGN KEY ("A") REFERENCES "Ingredient"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IngredientToTag" ADD FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
