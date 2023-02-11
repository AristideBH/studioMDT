<script lang="ts">
	import type { PageData } from './$houdini';

	export let data: PageData;

	$: ({ GetAllProducts } = data);
</script>

<!-- <pre>
	{JSON.stringify($GetAllProducts.data?.products?.edges, undefined, 2)}
</pre> -->

{#if $GetAllProducts.fetching !== true}
	<section class="container products-list">
		{#each $GetAllProducts.data?.products?.edges as { node }}
			<a href="/produits/{node.slug}">
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
		{/each}
	</section>
{/if}

<style lang="scss">
	.products-list {
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
