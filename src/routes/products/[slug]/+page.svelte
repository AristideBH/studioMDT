<script lang="ts">
	import type { PageData } from './$houdini';

	export let data: PageData;
	$: ({ GetProductBySlug } = data);
</script>

<!-- <pre>
	{JSON.stringify($GetProductBySlug.data, undefined, 2)}
</pre> -->

<article class="container ">
	<main>
		<hgroup>
			<h1>{$GetProductBySlug.data?.product?.title}</h1>
			<kbd>{$GetProductBySlug.data?.product?.data_product?.type?.name}</kbd>
		</hgroup>

		{#if $GetProductBySlug.data?.product?.data_product?.description}
			<p>{@html $GetProductBySlug.data?.product?.data_product?.description}</p>
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
</article>

<style lang="scss">
	article {
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
		min-width: 200px;
		margin-top: 1em;

		img {
			width: 100%;
		}
	}
</style>
