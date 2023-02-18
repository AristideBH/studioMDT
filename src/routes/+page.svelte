<script lang="ts">
	import PanelWrapper from '$lib/components/items/PanelWrapper.svelte';
	import ViewMore from '$lib/components/items/ViewMore.svelte';
	// import { slugify } from '$lib/js/utils';
	import type { PageData } from './$houdini';
	export let data: PageData;

	// pull the store reference from the route props
	$: ({ HomepageData } = data);

	$: products = $HomepageData?.data?.options?.optionsPage?.products;
	$: hero = $HomepageData?.data?.options?.optionsPage?.hero;
	$: about = $HomepageData?.data?.options?.optionsPage?.about;
	// $: console.log($HomepageData);
</script>

<svelte:head>
	<title>Studio MDT</title>
</svelte:head>

<!-- <pre>
{JSON.stringify($HomepageData.data?.options?.optionsPage?.products, undefined, 2)}
</pre> -->

<!-- # HERO -->
<section id="hero">
	{#if hero?.img}
		<img src={hero?.img.sourceUrl} alt="" />
	{/if}
	<div class="overlay" />

	<div class="container">
		<hgroup>
			<h1>{hero?.title}</h1>
			<p>{hero?.subtitle}</p>

			<div class="container" />
		</hgroup>
	</div>

	<ViewMore />
</section>

<!-- # DATA -->
<section id="data">
	<div class="container flex:col">
		<div class="title flex:col">
			<h2>{products?.title}</h2>
			<p>
				{products?.intro}
			</p>
		</div>

		{#if !$HomepageData.fetching && products?.pinned}
			<div class="products-list">
				{#each products?.pinned as { title, slug, data_product }}
					<a href="/produits/{slug}">
						<article>
							<img
								src=""
								alt=""
								sizes={data_product.featured.sizes}
								srcset={data_product.featured.srcSet}
							/>
							<footer>
								<h2>{title}</h2>
								<kbd>{data_product.type.name}</kbd>
							</footer>
						</article>
					</a>
				{/each}
			</div>
		{:else}
			<span aria-busy="true" />
		{/if}

		<a href="/produits" class="mx:auto outline" role="button"> découvrir le reste</a>
	</div>
</section>

<!-- # A PROPOS -->
<section id="about" class="container">
	<span class="flex:col">
		<h2>En quelques mots...</h2>
		<!-- <pre>
			{JSON.stringify($HomepageData.data.options?.optionsPage.about, undefined, 2)}
		</pre> -->
		<PanelWrapper content={about} />
		<a class="mx:auto outline" role="button" href="/a-propos">En savoir plus</a>
	</span>
</section>

<style lang="scss">
	#hero {
		position: relative;
		overflow: hidden;
		height: 100vh;
		display: flex;
		align-items: end;
		padding-bottom: 5rem;
		margin-top: calc(var(--header-height) * -1);
		margin-bottom: 0;

		h1 {
			mix-blend-mode: color;
		}

		.overlay {
			// background-color: var(--dropdown-hover-background-color);
			background-image: linear-gradient(
				to bottom,
				rgba(0, 0, 0, 0) 0%,
				rgba(0, 0, 0, 0) 55%,
				var(--form-element-background-color) 100%
			);
			// mix-blend-mode: darken;
			width: 100%;
			height: 100%;
			object-fit: cover;
			position: absolute;
			top: 0;
			opacity: 0.5;
			transition: opacity 250ms ease-out;
		}

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			position: absolute;
			top: 0;
		}

		.container {
			z-index: 3;
			position: relative;
			* {
				--color: var(--primary-inverse);
			}
		}
	}

	// #products .grid {
	// 	--grid-spacing-horizontal: 3rem;
	// 	--grid-spacing-vertical: 1.5rem;
	// }

	#data {
		padding-block: 4rem;
		background-color: var(--code-background-color);

		.title {
			align-items: center;
			text-align: center;
			padding-bottom: 1rem;

			p {
				max-width: max(640px, 65vh);
			}
		}

		.products-list {
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(calc(350px - 1rem), 1fr));
			gap: 2rem;
			margin-bottom: 3rem;

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
	}
</style>
