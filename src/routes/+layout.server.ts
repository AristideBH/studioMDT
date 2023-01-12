import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals, url }) => {
  return {
    pathName: url.pathname,
  };
}; 