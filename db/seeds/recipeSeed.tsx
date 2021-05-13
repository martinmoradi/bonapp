import db from "db"
import * as faker from "faker"

export const recipeSeed = async (numberToGenerate: number) => {
  console.log(`🟡  --   creating ${numberToGenerate} recipes...`)
  const recipeNames: Set<string> = new Set()
  while (recipeNames.size < numberToGenerate) {
    recipeNames.add(faker.random.words())
  }
  for (let i = 0; i < numberToGenerate; i++) {
    await db.recipe.create({
      data: {
        name: [...recipeNames][i],
      },
    })
  }
  console.log("✅  --   SUCCESS recipes created")
}
