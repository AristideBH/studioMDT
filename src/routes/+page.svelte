<script lang="ts">
	import PanelWrapper from '$lib/components/items/PanelWrapper.svelte';
	import ViewMore from '$lib/components/items/ViewMore.svelte';
	import { slugify } from '$lib/js/utils';

	import PocketBase from 'pocketbase';
	const pb = new PocketBase('http://127.0.0.1:8090');
	const allCategories = pb.collection('categories').getList(1, 20);
	const pinnedProducts = pb.collection('pinnedProducts').getList(1, 20, {
		expand: 'title'
	});

	const getPinnedProductByID = (id: number) => {
		let product = pb.collection('pinnedProducts').getOne(id);
		return product.data;
	};

	import { news } from '$lib/news';
</script>

<!-- # HERO -->
<section id="hero">
	<img src="hero.jpg" alt="" />
	<div class="overlay" />

	<div class="container">
		<hgroup>
			<h1>Création & design</h1>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur autem esse</p>

			<div class="container">
				{#await allCategories}
					<p>chargement des Catégories...</p>
				{:then value}
					<ul class="flex gap">
						{#each value.items as item}
							<li>
								<a href="/produits?tags={slugify(item.name)}">{item.name}</a>
							</li>
						{/each}
					</ul>
				{:catch error}
					<p>une erreur s'est produite dans le cgargment des filtres</p>
					<code>{error}</code>
				{/await}
			</div>
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

		{#await pinnedProducts}
			<p>chargement des Catégories...</p>
		{:then value}
			<ul class="flex gap">
				{#each value.items as item}
					<li>
						{console.log(item)}
						<p>{item.id}</p>
						<!-- {#await getPinnedProductByID(item.id) then value}
							<img src="http://127.0.0.1:8090/api/files/pinnedProducts/{item.id}/{value}" alt="" />
						{/await} -->
					</li>
				{/each}
			</ul>
		{:catch error}
			<p>une erreur s'est produite dans le cgargment des filtres</p>
			<code>{error}</code>
		{/await}
		<a href="/" class="mx:auto outline" role="button"> découvrir le reste</a>
	</div>
</section>

<!-- # A PROPOS -->
<section id="about" class="container">
	<span class="flex:col">
		<h2>À propos</h2>
		<PanelWrapper {news} />
		<a class="mx:auto outline" role="button" href="/">En savoir plus</a>
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

		&:hover {
			.overlay {
				opacity: 0.5;
			}
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

	#products .grid {
		--grid-spacing-horizontal: 3rem;
		--grid-spacing-vertical: 1.5rem;
	}

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
	}
</style>
