import { pickRandomIntInRange, sample } from "./tools"
import db from "db"
import * as faker from "faker"

type Ingredient = { content: string }
type UserIdObject = { id: number }

export const recipeSeed = async (recipesToGenerate: number, ingredientsToGenerate: number) => {
  console.log(`🟡  --   creating ${recipesToGenerate} recipes...`)

  const recipeNames: Set<string> = new Set()
  while (recipeNames.size < recipesToGenerate) {
    recipeNames.add(faker.random.words())
  }

  const recipeIngredients: Ingredient[] = []
  for (let i = 0; i < ingredientsToGenerate; i++) {
    recipeIngredients.push({ content: faker.lorem.word() })
  }

  const recipeTags = await db.recipeTag.findMany()

  const users = await db.user.findMany()

  for (let i = 0; i < recipesToGenerate; i++) {
    const usersId: UserIdObject[] = []
    for (let j = 0; j < sample([1, 2, 3, 4, 5]); j++) {
      usersId.push({ id: pickRandomIntInRange(users.length) })
    }

    await db.recipe.create({
      data: {
        name: [...recipeNames][i],
        servings: sample([1, 2, 3, 4]),
        totalTime: sample([5, 10, 15, 20]),
        image: faker.image.imageUrl(),
        recipeTags: {
          connect: [{ id: sample(recipeTags).id }, { id: sample(recipeTags).id }],
        },
        recipeIngredients: {
          create: [...recipeIngredients],
        },
        recipeUpvotes: {
          create: { userId: pickRandomIntInRange(users.length) },
        },
        author: {
          connect: sample(usersId),
        },
      },
    })
  }
  console.log("✅  --   SUCCESS recipes created")
}
