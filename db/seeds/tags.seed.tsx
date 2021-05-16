import db from "db"
import * as faker from "faker"
import { sample } from "./tools"

export const tagSeed = async (
  tagsCount: number,
  tagsPerRecipes: number,
  tagsPerIngredient: number
) => {
  console.log(`🟡  --   creating ${tagsCount} tags...`)

  const recipesAll = await db.recipe.findMany()
  const ingredientsAll = await db.ingredient.findMany()

  // First create tags
  for (let i = 0; i < tagsCount; i++) {
    await db.tag.create({
      data: {
        body: faker.company.bsAdjective(),
      },
    })
  }

  const tagsAll = await db.tag.findMany()

  // Now that tags are created, create relations with recipes and ingredients
  recipesAll.forEach(async (recipe) => {
    // Set to guarantee unique ids
    const tags: Set<{ id: number }> = new Set()
    while (tags.size < tagsPerRecipes) {
      tags.add({ id: sample(tagsAll).id })
    }
    await db.recipe.update({
      where: { id: recipe.id },
      data: {
        tags: {
          connect: [...tags],
        },
      },
    })
  })

  // add X tags per ingredient
  ingredientsAll.forEach(async (ingredient) => {
    // we use Set to guarantee unique ids
    const tags: Set<{ id: number }> = new Set()
    while (tags.size < tagsPerIngredient) {
      tags.add({ id: sample(tagsAll).id })
    }
    await db.ingredient.update({
      where: { id: ingredient.id },
      data: {
        tags: {
          connect: [...tags],
        },
      },
    })
  })
  console.log("✅  --   SUCCESS tags created and linked")
}
