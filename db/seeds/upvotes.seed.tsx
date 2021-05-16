import { sample } from "app/tools"
import db from "db"

export const upvotesSeed = async (upvotesToGenerate: number) => {
  console.log(`🟡  --   creating ${upvotesToGenerate} upvotes...`)
  const recipesAll = await db.recipe.findMany()
  const membershipsAll = await db.membership.findMany()

  for (let i = 0; i < upvotesToGenerate; i++) {
    await db.recipe.update({
      where: { id: sample(recipesAll).id },
      data: {
        upvotes: {
          create: {
            membership: {
              connect: { id: sample(membershipsAll).id },
            },
          },
        },
      },
    })
  }

  console.log("✅  --   upvotes created")
}
