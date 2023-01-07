<script>
	import ContactBtn from '$lib/components/items/ContactBtn.svelte';
	import DataNumber from '$lib/components/items/DataNumber.svelte';
	import PanelItem from '$lib/components/items/PanelItem.svelte';

	import { news } from '$lib/news';
</script>

<!-- ! HERO -->
<section class="hero">
	<img src="" alt="" />

	<div class="container">
		<hgroup>
			<h1>Lead the change</h1>
			<h2>leader mondial bla bla</h2>
		</hgroup>

		<ContactBtn />
	</div>

	<a href="#products">Voir plus</a>
</section>

<!-- ! PRODUCTS -->
<section id="products" class="container">
	<span class="grid">
		<code class="3D--wrapper">3D Object</code>

		<div>
			<h2>Des produits innovants, naturels, et non-nocifs</h2>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat facilis sequi explicabo
				magnam, sit qui nostrum adipisci alias excepturi suscipit similique cum ipsam dolor possimus
				iste, fugit culpa ab nulla!
			</p>
		</div>
	</span>
</section>

<!-- ! RSE -->
<section id="rse" class="container">
	<h2>M2i Group annonce ses objectifs</h2>
	<p>
		Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, fugit ab expedita accusamus
		non voluptatum ea, ratione autem repudiandae cupiditate aliquam. Laboriosam, saepe ipsa qui
		neque similique magnam quam veritatis?
	</p>

	<img src="/favicon.png" alt="" />
</section>

<!-- ! DATA -->
<section id="data" class="container flex:col">
	<div class="title flex:col">
		<h2>Quelques chiffres</h2>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus eaque velit veniam animi
			maiores vitae, suscipit impedit, distinctio ab dolorem repudiandae illum totam recusandae
			laborum! Minima officia voluptatibus amet corporis?
		</p>
	</div>

	<ul class="grid">
		<DataNumber options={{ data: 9000, ico: '/favicon.png', subtitle: 'text 1' }} />
		<DataNumber options={{ data: 30, ico: '/favicon.png', subtitle: 'text 2' }} />
		<DataNumber options={{ data: 60, ico: '/favicon.png', subtitle: 'text 3' }} />
	</ul>

	<a href="/" class="mx:auto"> découvrir le reste</a>
</section>

<!-- ! NEWS -->
<section id="news" class="container ">
	{#each news as actu, i}
		<PanelItem {i} {actu} />
	{/each}

	<a href="/">Voir toutes les actus</a>
</section>

<style lang="scss">
	#products .grid {
		--grid-spacing-horizontal: 3rem;
		--grid-spacing-vertical: 1.5rem;
	}
	#data .title {
		align-items: center;
		text-align: center;
		padding-bottom: 1rem;

		p {
			max-width: max(640px, 65vh);
		}
	}

	section:last-of-type {
		min-height: fit-content;
	}
</style>
