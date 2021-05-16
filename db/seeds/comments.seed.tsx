import { range, sample } from "app/tools"
import db from "db"
import * as faker from "faker"

export const commentsSeed = async (
  commentsToGenerate: number,
  commentsOnCommentsToGenerate: number
) => {
  console.log(
    `🟡  --   creating ${commentsToGenerate} comments and ${commentsOnCommentsToGenerate} comments on comments...`
  )

  const recipesAll = await db.recipe.findMany()
  const membershipsAll = await db.membership.findMany()

  for (let i = 0; i < commentsToGenerate; i++) {}
  await db.comment.create({
    data: {
      body: faker.lorem.words(sample(range(1, 10))),
      Recipe: {
        connect: { id: sample(recipesAll).id },
      },
      Membership: {
        connect: { id: sample(membershipsAll).id },
      },
    },
  })

  const commentsAll = await db.comment.findMany()

  for (let i = 0; i < commentsOnCommentsToGenerate; i++) {
    await db.comment.create({
      data: {
        body: faker.lorem.words(sample(range(1, 10))),
        Recipe: {
          connect: { id: sample(recipesAll).id },
        },
        Membership: {
          connect: { id: sample(membershipsAll).id },
        },
        Comment: {
          connect: { id: sample(commentsAll).id },
        },
      },
    })
  }
  console.log("✅  --   comments + comments on comments created")
}
