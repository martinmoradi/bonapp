import db from "db"
import * as faker from "faker"

export const recipeTagSeed = async (numberToGenerate: number) => {
  console.log(`🟡  --   creating ${numberToGenerate} recipeTags...`)

  for (let i = 0; i < numberToGenerate; i++) {
    await db.recipeTag.create({
      data: {
        name: faker.company.bsAdjective(),
      },
    })
  }
  console.log("✅  --   SUCCESS recipeTags created")
}
