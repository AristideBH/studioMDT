// import { PrismaClient } from '../../../node_modules/.prisma/client'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// if (process.env.NODE_ENV === "development") {
//   global.prisma = prisma
// }

export { prisma }