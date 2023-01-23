import type { PageServerLoad } from './$types';
import { prisma } from '$lib/server/prisma';

export const load = (async () => {

  // try {
  //   await prisma.article
  // } catch (error) {

  // }

}) satisfies PageServerLoad;