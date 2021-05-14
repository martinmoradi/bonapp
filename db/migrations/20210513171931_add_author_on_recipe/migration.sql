/*
  Warnings:

  - Made the column `weekId` on table `Day` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `authorId` to the `Recipe` table without a default value. This is not possible if the table is not empty.
  - Made the column `recipeId` on table `RecipeIngredient` required. This step will fail if there are existing NULL values in that column.
  - Made the column `recipeId` on table `RecipeUpvote` required. This step will fail if there are existing NULL values in that column.
  - Made the column `userId` on table `RecipeUpvote` required. This step will fail if there are existing NULL values in that column.
  - Made the column `userId` on table `Week` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Day" ALTER COLUMN "weekId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Recipe" ADD COLUMN     "authorId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "RecipeIngredient" ALTER COLUMN "recipeId" SET NOT NULL;

-- AlterTable
ALTER TABLE "RecipeUpvote" ALTER COLUMN "recipeId" SET NOT NULL,
ALTER COLUMN "userId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Week" ALTER COLUMN "userId" SET NOT NULL;

-- CreateTable
CREATE TABLE "RecipeTagsOnRecipes" (
    "recipeId" INTEGER NOT NULL,
    "recipeTagId" INTEGER NOT NULL,

    PRIMARY KEY ("recipeId","recipeTagId")
);

-- AddForeignKey
ALTER TABLE "RecipeTagsOnRecipes" ADD FOREIGN KEY ("recipeId") REFERENCES "Recipe"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecipeTagsOnRecipes" ADD FOREIGN KEY ("recipeTagId") REFERENCES "RecipeTag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recipe" ADD FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
