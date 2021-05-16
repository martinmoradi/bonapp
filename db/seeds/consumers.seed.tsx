import { UserRole, MembershipName, MembershipRole } from ".prisma/client"
import db from "db"
import * as faker from "faker"
import { recipeSeed } from "./recipes.seed"

export const consumerSeed = async (
  accountsCount: number,
  recipesCount: number,
  ingredientsCount: number
) => {
  console.log(
    `🟡  --   creating ${accountsCount} consumers accounts with ${recipesCount} recipes...`
  )

  const consumerMails: Set<string> = new Set()
  while (consumerMails.size < accountsCount) {
    consumerMails.add(faker.internet.email().toLowerCase())
  }

  for (let i = 0; i < accountsCount; i++) {
    const recipes = await recipeSeed(recipesCount, ingredientsCount)
    await db.user.create({
      data: {
        email: [...consumerMails][i],
        role: UserRole.USER,
        hashedPassword: "123456",
        memberships: {
          create: {
            name: MembershipName.BONAPP,
            role: MembershipRole.CONSUMER,
            recipes: {
              create: recipes[i],
            },
          },
        },
      },
    })
  }

  console.log("✅  --   SUCCESS consumers + recipes created")
}
