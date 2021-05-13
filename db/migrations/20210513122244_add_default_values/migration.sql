-- AlterTable
ALTER TABLE "Ingredient" ALTER COLUMN "energy" SET DEFAULT 0,
ALTER COLUMN "isCooked" SET DEFAULT false,
ALTER COLUMN "isAlcohol" SET DEFAULT false,
ALTER COLUMN "carbs" SET DEFAULT 0,
ALTER COLUMN "fat" SET DEFAULT 0,
ALTER COLUMN "proteins" SET DEFAULT 0,
ALTER COLUMN "calcium" SET DEFAULT 0,
ALTER COLUMN "iron" SET DEFAULT 0,
ALTER COLUMN "magnesium" SET DEFAULT 0,
ALTER COLUMN "sodium" SET DEFAULT 0,
ALTER COLUMN "potassium" SET DEFAULT 0,
ALTER COLUMN "vitaminD" SET DEFAULT 0,
ALTER COLUMN "zinc" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "Recipe" ALTER COLUMN "servings" SET DEFAULT 1,
ALTER COLUMN "image" DROP NOT NULL,
ALTER COLUMN "prepTime" SET DEFAULT 0,
ALTER COLUMN "cookTime" SET DEFAULT 0,
ALTER COLUMN "activeTime" SET DEFAULT 0,
ALTER COLUMN "inactiveTime" SET DEFAULT 0,
ALTER COLUMN "readyTime" SET DEFAULT 0,
ALTER COLUMN "totalTime" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "Week" ALTER COLUMN "weekNumber" SET DEFAULT 0;