import type { PrismaClient } from 'node_modules/.pnpm/@prisma+client@4.9.0_prisma@4.9.0/node_modules/.prisma/client/index'
// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Error {}
	// interface Locals {}
	// interface PageData {}
	// interface Platform {}
	let prisma: PrismaClient;
}