import db from "db"
import * as faker from "faker"

export const userSeed = async (numberToGenerate: number) => {
  console.log(`🟡  --   creating ${numberToGenerate} users...`)
  for (let i = 0; i < numberToGenerate; i++) {
    await db.user.create({
      data: {
        name: faker.name.firstName(),
        email: faker.internet.email(),
      },
    })
  }
  console.log("✅  --   SUCCESS users created")
}
