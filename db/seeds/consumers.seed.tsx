import { UserRole, MembershipName, MembershipRole } from ".prisma/client"
import db from "db"
import * as faker from "faker"
import { recipeFactory } from "./recipes.factory"

export const consumerSeed = async (
  accountsToGenerate: number,
  recipesToGenerate: number,
  ingredientsToGenerate: number
) => {
  console.log(
    `🟡  --   creating ${accountsToGenerate} consumers accounts and ${recipesToGenerate} recipes for each...`
  )

  // Set to guarantee unique ids
  const consumerMails: Set<string> = new Set()
  while (consumerMails.size < accountsToGenerate) {
    consumerMails.add(faker.internet.email().toLowerCase())
  }

  for (let i = 0; i < accountsToGenerate; i++) {
    const recipes = recipeFactory(recipesToGenerate, ingredientsToGenerate)
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
