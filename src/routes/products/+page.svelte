<script lang="ts">
	import type { PageData } from './$houdini';

	export let data: PageData;

	$: ({ GetAllProducts } = data);
</script>

<!-- <pre>
	{JSON.stringify($GetAllProducts.data?.products?.edges, undefined, 2)}
</pre> -->

<section class="container">
	{#each $GetAllProducts.data?.products?.edges as { node }}
		<a href={node.uri}>
			<h2>{node.title}</h2>
		</a>
	{/each}
</section>
