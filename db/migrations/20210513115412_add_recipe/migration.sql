-- CreateTable
CREATE TABLE "Recipe" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "servings" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "prepTime" INTEGER,
    "cookTime" INTEGER,
    "activeTime" INTEGER,
    "inactiveTime" INTEGER,
    "readyTime" INTEGER,
    "totalTime" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Recipe.name_unique" ON "Recipe"("name");
