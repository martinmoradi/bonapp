import db from "db"
import * as faker from "faker"

export const recipeIngredientSeed = async (numberToGenerate: number) => {
  console.log(`🟡  --   creating ${numberToGenerate} RecipeIngredients per recipe...`)

  const recipes = await db.recipe.findMany()

  recipes.forEach(async (recipe) => {
    for (let i = 0; i < numberToGenerate; i++) {
      await db.recipeIngredient.create({
        data: {
          content: faker.lorem.word(),
          recipeId: recipe.id,
        },
      })
    }
  })
  console.log("✅  --   SUCCESS RecipeIngredients created")
}
