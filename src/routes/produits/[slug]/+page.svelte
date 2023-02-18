<script lang="ts">
	import type { PageData } from './$houdini';

	export let data: PageData;
	$: ({ GetProductBySlug } = data);

	$: product = $GetProductBySlug.data?.product;
</script>

<svelte:head>
	<title>{$GetProductBySlug.data?.product?.title} | Studio.MDT</title>
</svelte:head>

<pre>
			{JSON.stringify($GetProductBySlug, undefined, 2)}
		</pre>
{#if product}
	<section class="container">
		{#if product.data_product?.hero}
			<img
				src={product.data_product?.hero?.sourceUrl}
				alt=""
				srcset={product.data_product?.hero?.srcSet}
			/>
		{/if}

		<article>
			<div class="flex gap:2">
				<main>
					<h1>{product.title}</h1>
					{#each product.data_product?.type as type}
						<kbd> {type.name}</kbd>
					{/each}
					{#if product.data_product?.description}
						<p>{@html product.data_product?.description}</p>
					{/if}
				</main>
				<aside>
					<img
						src={product.data_product?.featured?.sourceUrl}
						alt=""
						sizes={product.data_product?.featured?.sizes}
						srcset={product.data_product?.featured?.srcSet}
					/>
				</aside>
			</div>
			{#if product.data_product?.gallery}
				<footer>
					<ul class="gallery autoGrid">
						{#each product.data_product?.gallery as item}
							<li>
								<img src={item.sourceUrl} alt={item.altText} srcset={item.srcSet} />
							</li>
						{/each}
					</ul>
				</footer>
			{/if}
		</article>
	</section>
{/if}

<style lang="scss">
	section {
		padding-top: 0;
		img {
			width: 100%;
			aspect-ratio: 16 / 9;
			object-fit: cover;
		}
	}

	article {
		margin-top: 1rem;
		padding-block: 2rem;
	}

	main {
		flex: 3;
		h1 {
			margin-bottom: 0;
		}
		kbd {
			margin-block: 0.75em 2rem;
		}
	}

	aside {
		flex: 1;
		min-width: 200px;

		img {
			width: 100%;
			aspect-ratio: unset;
		}
	}

	.gallery {
	}
</style>
