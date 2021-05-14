import db from "db"
import * as faker from "faker"

const ADMIN_USER = {
  name: "Toto",
  email: "toto@toto.fr",
  role: "ADMIN",
}

export const userSeed = async (usersToGenerate: number) => {
  console.log(`🟡  --   creating ${usersToGenerate} users...`)

  await db.user.create({
    data: {
      ...ADMIN_USER,
    },
  })

  // we use Sets here to guarantee uniques values
  const userEmails: Set<string> = new Set()
  while (userEmails.size < usersToGenerate) {
    userEmails.add(faker.internet.email())
  }

  for (let i = 0; i < usersToGenerate; i++) {
    await db.user.create({
      data: {
        name: faker.name.firstName(),
        email: [...userEmails][i],
      },
    })
  }
  console.log("✅  --   SUCCESS users created")
}
