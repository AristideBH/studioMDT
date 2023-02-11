<script lang="ts">
	import type { PageData } from './$houdini';

	export let data: PageData;
	$: ({ GetProductBySlug } = data);
</script>

<svelte:head>
	<title>{$GetProductBySlug.data?.product?.title} | Studio.MDT</title>
</svelte:head>

<!-- <pre>
			{JSON.stringify($GetProductBySlug, undefined, 2)}
		</pre> -->

<section class="container">
	{#if $GetProductBySlug.data?.product?.data_product?.hero}
		<img
			src={$GetProductBySlug.data?.product?.data_product?.hero?.sourceUrl}
			alt=""
			srcset={$GetProductBySlug.data?.product?.data_product?.hero?.srcSet}
		/>
	{/if}

	<article>
		<div class="flex">
			<main>
				<h1>{$GetProductBySlug.data?.product?.title}</h1>
				<kbd>{$GetProductBySlug.data?.product?.data_product?.type?.name}</kbd>
				{#if $GetProductBySlug.data?.product?.data_product?.description}
					<p>{@html $GetProductBySlug.data?.product?.data_product?.description}</p>
				{/if}
			</main>
			<!-- {#if $GetProductBySlug.data?.product?.data_product?.featured} -->
			<aside>
				<img
					src={$GetProductBySlug.data?.product?.data_product?.featured?.sourceUrl}
					alt=""
					sizes={$GetProductBySlug.data?.product?.data_product?.featured?.sizes}
					srcset={$GetProductBySlug.data?.product?.data_product?.featured?.srcSet}
				/>
			</aside>
		</div>
		{#if $GetProductBySlug.data?.product?.data_product?.gallery}
			<footer>
				<ul class="gallery">
					{#each $GetProductBySlug.data?.product?.data_product?.gallery as item}
						<li>
							<img
								src={item.sourceUrl}
								alt={item.altText}
								sizes={item.sizes}
								srcset={item.srcSet}
							/>
						</li>
					{/each}
				</ul>
			</footer>
		{/if}
		<!-- {/if} -->
	</article>
</section>

<!-- <pre class="container">
	{JSON.stringify($GetProductBySlug.data, undefined, 2)}
</pre> -->
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
