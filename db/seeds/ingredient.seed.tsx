import db from "db"
import * as faker from "faker"

export const ingredientSeed = async (numberToGenerate: number) => {
  console.log(`🟡  --   creating ${numberToGenerate} ingredients...`)

  const ingredientNames: Set<string> = new Set()

  while (ingredientNames.size < numberToGenerate) {
    ingredientNames.add(faker.random.word())
  }

  for (let i = 0; i < numberToGenerate; i++) {
    await db.ingredient.create({
      data: {
        name: [...ingredientNames][i],
      },
    })
  }
  console.log("✅  --   SUCCESS ingredients created")
}
