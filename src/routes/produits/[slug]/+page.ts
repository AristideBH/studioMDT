import type { PageLoad } from './$types';
import { Directus } from '@directus/sdk';


export const load = (async ({ params }) => {
  const directus = new Directus('https://n7egmyag.directus.app');
  const slug = params.slug;
  const product = await directus.items('products').readByQuery({
    filter: {
      title: {
        _eq: slug,
      },
    },
  });

  return { product };


}) satisfies PageLoad;