-- CreateTable
CREATE TABLE "Ingredient" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "energy" INTEGER,
    "category" TEXT,
    "isCooked" BOOLEAN,
    "isAlcohol" BOOLEAN,
    "carbs" DOUBLE PRECISION,
    "fat" DOUBLE PRECISION,
    "proteins" DOUBLE PRECISION,
    "calcium" DOUBLE PRECISION,
    "iron" DOUBLE PRECISION,
    "magnesium" DOUBLE PRECISION,
    "sodium" DOUBLE PRECISION,
    "potassium" DOUBLE PRECISION,
    "vitaminD" DOUBLE PRECISION,
    "zinc" DOUBLE PRECISION,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Ingredient.name_unique" ON "Ingredient"("name");
