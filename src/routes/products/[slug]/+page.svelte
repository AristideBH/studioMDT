<script lang="ts">
	import type { PageData } from './$houdini';

	export let data: PageData;
	$: ({ GetProductBySlug } = data);
</script>

<!-- <pre>
	{JSON.stringify($GetProductBySlug.data, undefined, 2)}
</pre> -->

<div class="container ">
	<h1>{$GetProductBySlug.data?.product?.title}</h1>

	<img
		src={$GetProductBySlug.data?.product?.data_product?.featured?.sourceUrl}
		alt={$GetProductBySlug.data?.product?.data_product?.featured?.altText}
		sizes={$GetProductBySlug.data?.product?.data_product?.featured?.sizes}
		srcset={$GetProductBySlug.data?.product?.data_product?.featured?.srcSet}
	/>
</div>
