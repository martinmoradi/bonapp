import { UserRole, MembershipName, MembershipRole } from ".prisma/client"
import db from "db"

export const newbieSeed = async () => {
  console.log("🟡  --   creating newbie account with 0 recipes...")

  await db.user.create({
    data: {
      email: "newbie@bonapp.fr",
      role: UserRole.USER,
      hashedPassword: "123456",
      memberships: {
        create: {
          name: MembershipName.BONAPP,
          role: MembershipRole.CONSUMER,
        },
      },
    },
  })

  console.log("✅  --   SUCCESS newbie created")
}
