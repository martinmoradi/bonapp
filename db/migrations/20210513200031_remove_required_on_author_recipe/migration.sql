/*
  Warnings:

  - You are about to drop the `RecipeTagsOnRecipes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "RecipeTagsOnRecipes" DROP CONSTRAINT "RecipeTagsOnRecipes_recipeId_fkey";

-- DropForeignKey
ALTER TABLE "RecipeTagsOnRecipes" DROP CONSTRAINT "RecipeTagsOnRecipes_recipeTagId_fkey";

-- AlterTable
ALTER TABLE "Recipe" ALTER COLUMN "authorId" DROP NOT NULL;

-- DropTable
DROP TABLE "RecipeTagsOnRecipes";
