<script lang="ts">
	import { quadOut } from 'svelte/easing';
	import { crossfade, fade, fly, slide } from 'svelte/transition';
	import type { PageData } from './$houdini';

	export let data: PageData;

	$: ({ GetAllProducts } = data);

	$: selectedTypes = 'all';
</script>

<!-- <pre>
	{JSON.stringify($GetAllProducts.data?.types?.nodes, undefined, 2)}
</pre> -->

<section class="container ">
	{#if $GetAllProducts.fetching !== true}
		{#if $GetAllProducts.data.types}
			<aside class="filter-list">
				<h2>Filtrer par matière:</h2>
				<label>
					<input type="radio" bind:group={selectedTypes} name="types" value="all" />
					Tous
				</label>
				{#each $GetAllProducts.data.types.nodes as type, i}
					{#if type.count}
						<label>
							<input type="radio" bind:group={selectedTypes} name="types" value={type.slug} />
							{type.name}
						</label>
					{/if}
				{/each}
			</aside>
		{/if}

		<main class=" products-list">
			{#each $GetAllProducts.data?.products?.edges as { node }}
				{#if selectedTypes === 'all' || selectedTypes === node.data_product.type.slug}
					<a
						href="/produits/{node.slug}"
						in:fly={{
							y: 10,
							opacity: 0.5,
							easing: quadOut
						}}
						out:fly={{
							y: -10,
							opacity: 0.5,
							easing: quadOut
						}}
					>
						<article>
							{#if node.data_product.featured}
								<img
									src=""
									alt=""
									sizes={node.data_product.featured.sizes}
									srcset={node.data_product.featured.srcSet}
								/>
							{/if}

							<footer>
								<h2>{node.title}</h2>
								<kbd>{node.data_product.type.name}</kbd>
							</footer>
						</article>
					</a>
				{/if}
			{/each}
		</main>
	{:else}
		<span aria-busy="true" />
	{/if}
</section>

<style lang="scss">
	section.container {
		display: grid;
		gap: 1rem;
		grid-template-columns: 1fr 2fr;
		grid-template-areas: 'sidebar main';
	}

	.filter-list {
		grid-area: sidebar;
	}
	.products-list {
		grid-area: main;
		display: grid;
		--p-width: 300px;
		--gap: 2em;
		grid-template-columns: repeat(
			auto-fit,
			minmax(calc(var(--p-width) - calc(var(--gap) / 2)), 1fr)
		);
		gap: var(--gap);
		margin-bottom: 3rem;

		@media only screen and (max-width: 48em) {
			--p-width: 175px;
			--gap: 1rem;
		}
		article {
			--spacing: 0.75rem;
			max-width: var(--p-width);

			padding: 0;
			margin: 0;
			img {
				width: 100%;
				padding: 1rem 2rem;
			}
		}

		footer {
			padding-block: var(--spacing) calc(var(--spacing) * 2);
			margin: 0;

			h2 {
				margin: 0;
			}
		}
	}
</style>
