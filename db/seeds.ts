import db from "./index"

/*
 * This seed function is executed when you run `blitz db seed`.
 *
 * Probably you want to use a library like https://chancejs.com
 * or https://github.com/Marak/Faker.js to easily generate
 * realistic data.
 */
const seed = async () => {
  /*
   * 1 - clean DB
   */
  cleanDB()
  /*
   * 2 - create Users
   */
}

const cleanDB = async () => {
  await db.user.deleteMany()
  await db.session.deleteMany()
  await db.token.deleteMany()
  await db.ingredient.deleteMany()
  await db.recipe.deleteMany()
  await db.recipeIngredient.deleteMany()
  await db.recipeTag.deleteMany()
  await db.recipeUpvote.deleteMany()
  await db.week.deleteMany()
  await db.day.deleteMany()
  console.log("db cleaned up")
}

export default seed
