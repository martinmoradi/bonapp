import { userSeed } from "./seeds/userSeed"
import { ingredientSeed } from "./seeds/ingredientSeed"
import { recipeSeed } from "./seeds/recipeSeed"
import { recipeIngredientSeed } from "./seeds/recipeIngredientSeed"

/*
 * This seed function is executed when you run `blitz db seed`
 */
const seed = async () => {
  /* --------------------------------------------------------------
  * 0 - if you need to reset the db run `blitz prisma migrate reset`
  ----------------------------------------------------------------- */

  enum numberToGenerate {
    USERS = 10,
    INGREDIENTS = 30,
    RECIPES = 50,
    RECIPE_INGREDIENTS_PER_RECIPE = 5,
    RECIPE_TAGS = 30,
    RECIPE_TAGS_PER_RECIPE = 2,
    RECIPE_UPVOTES = 0,
    WEEKS_PER_USER = 3,
  }

  console.log("🔥  --   seed started")

  /* --------------------------------------------------------------
   * 1 - create Users
  ----------------------------------------------------------------- */
  await userSeed(numberToGenerate.USERS)
  /* --------------------------------------------------------------
   * 2 - create Ingredients
  ----------------------------------------------------------------- */
  await ingredientSeed(numberToGenerate.INGREDIENTS)
  /* --------------------------------------------------------------
   * 3 - create Recipes
  ----------------------------------------------------------------- */
  await recipeSeed(numberToGenerate.RECIPES)
  /* --------------------------------------------------------------
   * 4 - create RecipeIngredients
  ----------------------------------------------------------------- */
  await recipeIngredientSeed(numberToGenerate.RECIPE_INGREDIENTS_PER_RECIPE)
  /* --------------------------------------------------------------
   * 4 - create RecipeTags
  ----------------------------------------------------------------- */
}

export default seed
