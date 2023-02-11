<script lang="ts">
	import type { PageData } from './$houdini';

	export let data: PageData;
	$: ({ GetProductBySlug } = data);
</script>

<svelte:head>
	<title>{$GetProductBySlug.data?.product?.title} | Studio.MDT</title>
</svelte:head>

<section class="container">
	<img
		src={$GetProductBySlug.data?.product?.data_product?.hero?.sourceUrl}
		alt={$GetProductBySlug.data?.product?.data_product?.hero?.alt}
		srcset={$GetProductBySlug.data?.product?.data_product?.hero?.srcSet}
	/>
</section>

<div class="container hero">
	<main>
		<hgroup>
			<h1>{$GetProductBySlug.data?.product?.title}</h1>
			<kbd>{$GetProductBySlug.data?.product?.data_product?.type?.name}</kbd>
		</hgroup>

		{#if $GetProductBySlug.data?.product?.data_product?.description}
			<p>{@html $GetProductBySlug.data?.product?.data_product?.description}</p>
		{/if}

		{#if $GetProductBySlug.data?.product?.data_product?.gallery}
			<ul class="gallery">
				{#each $GetProductBySlug.data?.product?.data_product?.gallery as item}
					<li>
						<img src={item.sourceUrl} alt={item.altText} sizes={item.sizes} srcset={item.srcSet} />
					</li>
				{/each}
			</ul>
		{/if}
	</main>

	<aside>
		<img
			src={$GetProductBySlug.data?.product?.data_product?.featured?.sourceUrl}
			alt={$GetProductBySlug.data?.product?.data_product?.featured?.altText}
			sizes={$GetProductBySlug.data?.product?.data_product?.featured?.sizes}
			srcset={$GetProductBySlug.data?.product?.data_product?.featured?.srcSet}
		/>
	</aside>
</div>

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
	.hero {
		display: flex;
		margin-top: 2em;
		gap: 2em;
	}

	hgroup {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 0.5em;
	}

	main {
		flex: 3;
	}

	aside {
		flex: 1;
		min-width: 175px;
		margin-top: 1em;

		img {
			width: 100%;
		}
	}

	.gallery {
	}
</style>
