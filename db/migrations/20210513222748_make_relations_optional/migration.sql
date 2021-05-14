-- AlterTable
ALTER TABLE "Day" ALTER COLUMN "weekId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "RecipeIngredient" ALTER COLUMN "recipeId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "RecipeUpvote" ALTER COLUMN "recipeId" DROP NOT NULL,
ALTER COLUMN "userId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Token" ALTER COLUMN "userId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Week" ALTER COLUMN "userId" DROP NOT NULL;
