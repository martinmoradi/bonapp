import { userSeed } from "./seeds/user.seed"
import { ingredientSeed } from "./seeds/ingredient.seed"
import { recipeSeed } from "./seeds/recipe.seed"
import { recipeTagSeed } from "./seeds/recipeTag.seed"

/*
 * This seed function is executed when you run `blitz db seed`
 */
const seed = async () => {
  /* --------------------------------------------------------------
  * 0 - you can reset the db with `blitz prisma migrate reset`
  ----------------------------------------------------------------- */

  enum numberToGenerate {
    USERS = 10,
    INGREDIENTS = 30,
    RECIPES_BY_ADMIN = 20,
    RECIPES_PER_USER = 5,
    RECIPE_INGREDIENTS_PER_RECIPE = 5,
    RECIPE_TAGS = 30,
    RECIPE_TAGS_PER_RECIPE = 2,
    RECIPE_UPVOTES = 0,
    WEEKS_PER_USER = 3,
  }

  console.log("🔥  --   seed started")
  /* --------------------------------------------------------------
  * 3 - create Users & Recipes
  ----------------------------------------------------------------- */
  await userSeed(numberToGenerate.USERS)
  /* --------------------------------------------------------------
   * 1 - create Ingredients
  ----------------------------------------------------------------- */
  await ingredientSeed(numberToGenerate.INGREDIENTS)
  /* --------------------------------------------------------------
   * 2 - create RecipeTags
  ----------------------------------------------------------------- */
  await recipeTagSeed(numberToGenerate.RECIPE_TAGS)
  /* --------------------------------------------------------------
  * 4 - create Recipes
  ----------------------------------------------------------------- */
  await recipeSeed(
    numberToGenerate.RECIPES_BY_ADMIN,
    numberToGenerate.RECIPE_INGREDIENTS_PER_RECIPE
  )

  /* --------------------------------------------------------------
   * 5 - create RecipeIngredients
  ----------------------------------------------------------------- */
}

export default seed
