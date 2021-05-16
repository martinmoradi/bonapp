import { range, sample, times } from "../../app/tools"
import * as faker from "faker"
import { RecipeSeed } from "db/types"

export const recipeSeed = async (recipesToGenerate: number, ingredientsToGenerate: number) => {
  const recipes: RecipeSeed[] = []
  for (let i = 0; i < recipesToGenerate; i++) {
    // storing random times in an array allow totalTime to be calculated
    const timers = times(5).map(() => sample([2, 5, 10, 15, 20]))
    const recipe = {
      name: faker.random.words(sample(range(5, 10))),
      servings: sample(range(1, 6)),
      prepTime: timers[0],
      cookTime: timers[1],
      inactiveTime: timers[2],
      activeTime: timers[3],
      readyTime: timers[4],
      totalTime: timers.reduce((sum, item) => sum + item),
      images: { create: [{ url: faker.image.imageUrl() }] },
      ingredients: {
        create: times(ingredientsToGenerate).map(() => ({
          body: faker.random.words(sample(range(1, 3))),
        })),
      },
      instructions: {
        create: times(5).map(() => ({
          body: faker.random.words(sample(range(10, 30))),
        })),
      },
    }
    recipes.push(recipe)
  }
  return recipes
}
