import type { PageServerLoad } from './$types';
import { prisma } from '$lib/server/prisma';

export const load = (async () => {

  const articles = await prisma.article.findMany();
  return {
    articles
  }

}) satisfies PageServerLoad;