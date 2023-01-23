// import {PrismaClient} from '../node_modules/.prisma/client'
import { PrismaClient } from 'node_modules/.pnpm/@prisma+client@4.9.0_prisma@4.9.0/node_modules/.prisma/client/index'

const prisma = global.prisma || new PrismaClient()

if (process.env.NODE_ENV === "development") {
  global.prisma = prisma
}

export { prisma }