import { PrismaClient } from 'node_modules/.pnpm/@prisma+client@4.9.0_prisma@4.9.0/node_modules/.prisma/client/index.js'


const prisma = global.prisma || new PrismaClient()

if (process.env.NODE_ENV === "development") {
  global.prisma = prisma
}

export { prisma }