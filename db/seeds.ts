import { ownerSeed } from "./seeds/owner.seed"
import { consumerSeed } from "./seeds/consumers.seed"
import { newbieSeed } from "./seeds/newbie.seed"
import { tagSeed } from "./seeds/tags.seed"
import { commentsSeed } from "./seeds/comments.seed"
import { upvotesSeed } from "./seeds/upvotes.seed"
/*
 * This seed function is executed when you run `blitz db seed`
 */
const seed = async () => {
  // * 0 - you can reset the db with `blitz prisma migrate reset`

  enum numberToGenerate {
    RECIPES_BY_ADMIN = 20,
    INGREDIENTS_PER_RECIPE = 6,
    CONSUMER_ACCOUNTS = 10,
    RECIPES_PER_CONSUMER = 8,
    TAGS = 30,
    TAGS_PER_RECIPE = 2,
    TAGS_PER_INGREDIENT = 1,
    COMMENTS_PER_RECIPE = 10,
    COMMENTS_ON_COMMENTS = 3,
    UPVOTES = 10,
  }

  console.log("🔥  --   seed started")

  // * 1 - admin account with recipes, ingredients & instructions
  await ownerSeed(numberToGenerate.RECIPES_BY_ADMIN, numberToGenerate.INGREDIENTS_PER_RECIPE)

  // * 2 - newbie account without any activity
  await newbieSeed()

  // * 3 - consumers accounts with recipes, ingredients & instructions
  await consumerSeed(
    numberToGenerate.CONSUMER_ACCOUNTS,
    numberToGenerate.RECIPES_PER_CONSUMER,
    numberToGenerate.INGREDIENTS_PER_RECIPE
  )

  // * 4 - tags
  await tagSeed(
    numberToGenerate.TAGS,
    numberToGenerate.TAGS_PER_RECIPE,
    numberToGenerate.TAGS_PER_INGREDIENT
  )

  // * 4 - comments
  await commentsSeed(numberToGenerate.COMMENTS_PER_RECIPE, numberToGenerate.COMMENTS_ON_COMMENTS)

  // * 5 - upvotes
  await upvotesSeed(numberToGenerate.UPVOTES)
}

export default seed
