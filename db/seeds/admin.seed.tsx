import { UserRole, MembershipName, MembershipRole } from ".prisma/client"
import db from "db"
import { recipeSeed } from "./recipes.seed"

export const adminSeed = async (recipesCount: number, ingredientsCount: number) => {
  console.log(`🟡  --   creating admin account with ${recipesCount} recipes...`)

  const recipes = await recipeSeed(20, ingredientsCount)
  await db.user.create({
    data: {
      email: "admin@bonapp.fr",
      role: UserRole.ADMIN,
      hashedPassword: "123456",
      memberships: {
        create: {
          name: MembershipName.BONAPP,
          role: MembershipRole.ADMIN,
          recipes: {
            create: [...recipes],
          },
        },
      },
    },
  })

  console.log("✅  --   SUCCESS admin + recipes created")
}
