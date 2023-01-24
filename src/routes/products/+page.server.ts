import type { PageServerLoad } from './$types';
import { prisma } from '$lib/server/prisma';

export const load = (async () => {

  const products = await prisma.product.findMany()

  return {
    products
  }


}) satisfies PageServerLoad;