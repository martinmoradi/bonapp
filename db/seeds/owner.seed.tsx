import { UserRole, MembershipName, MembershipRole } from ".prisma/client"
import db from "db"
import { recipeFactory } from "./recipes.factory"

export const ownerSeed = async (recipesToGenerate: number, ingredientsToGenerate: number) => {
  console.log(`🟡  --   creating owner account with ${recipesToGenerate} recipes...`)

  const recipes = recipeFactory(recipesToGenerate, ingredientsToGenerate)
  await db.user.create({
    data: {
      email: "bonapp@bonapp.fr",
      role: UserRole.ADMIN,
      hashedPassword: "123456",
      memberships: {
        create: {
          name: MembershipName.BONAPP,
          role: MembershipRole.ADMIN,
          recipes: {
            create: recipes,
          },
        },
      },
    },
  })

  console.log("✅  --   SUCCESS owner + recipes created")
}
