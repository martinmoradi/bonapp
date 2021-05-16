import { Prisma, RecipeArgs } from "@prisma/client"

// 1: Define a type that includes the relation to children
const recipeWithChildrens = Prisma.validator<RecipeArgs>()({
  include: { ingredients: true, instructions: true },
})

// 2: This type will include a recipe with selected children
export type RecipeWithChildren = Prisma.RecipeGetPayload<typeof recipeWithChildrens>

const recipeSeedValidator = Prisma.validator<Prisma.RecipeArgs>()({
  select: {
    name: true,
    servings: true,
    prepTime: true,
    cookTime: true,
    inactiveTime: true,
    activeTime: true,
    readyTime: true,
    totalTime: true,
  },
})

export type RecipeSeed = Prisma.RecipeGetPayload<typeof recipeSeedValidator>
