<script lang="ts">
	import PanelWrapper from '$lib/components/items/PanelWrapper.svelte';
	import ViewMore from '$lib/components/items/ViewMore.svelte';
	// import { slugify } from '$lib/js/utils';
	import type { PageData } from './$houdini';
	export let data: PageData;

	// pull the store reference from the route props
	$: ({ HomepageData } = data);

	import { news } from '$lib/news';
	// $: console.log($HomepageData);
</script>

<svelte:head>
	<title>Studio MDT</title>
</svelte:head>

<!-- # HERO -->
<section id="hero">
	<img src="hero.jpg" alt="" />
	<div class="overlay" />

	<div class="container">
		<hgroup>
			<h1>Création & design</h1>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur autem esse</p>

			<div class="container" />
		</hgroup>
	</div>

	<ViewMore />
</section>

<!-- # DATA -->
<section id="data">
	<div class="container flex:col">
		<div class="title flex:col">
			<h2>Quelques chiffres</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus eaque velit veniam
				animi maiores vitae, suscipit impedit, distinctio ab dolorem repudiandae illum totam
				recusandae laborum! Minima officia voluptatibus amet corporis?
			</p>
		</div>

		{#if !$HomepageData.fetching}
			<div class="products-list">
				{#each $HomepageData.data?.options?.optionsPage?.products?.pinned as item}
					<a href="/produits/{item.slug}">
						<article>
							<img
								src=""
								alt=""
								sizes={item.data_product.featured.sizes}
								srcset={item.data_product.featured.srcSet}
							/>
							<footer>
								<h2>{item.title}</h2>
								<kbd>{item.data_product.type.name}</kbd>
							</footer>
						</article>
					</a>
				{/each}
			</div>
		{:else}{/if}

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
		<PanelWrapper content={$HomepageData.data.options?.optionsPage.about} />
		<a class="mx:auto outline" role="button" href="/a-propos">En savoir plus</a>
	</span>
</section>

<style lang="scss">
	#hero {
		position: relative;
		overflow: hidden;
		height: 100vh;
		display: flex;
		align-items: center;
		margin-top: calc(var(--header-height) * -1);
		margin-bottom: 0;

		h1 {
			mix-blend-mode: color;
		}

		.overlay {
			background-color: var(--dropdown-hover-background-color);
			width: 100%;
			height: 100%;
			object-fit: cover;
			position: absolute;
			top: 0;
			opacity: 0;
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
