<script lang="ts">
	import { slugify } from '$lib/js/utils';

	import { slide } from 'svelte/transition';

	import { Directus } from '@directus/sdk';
	const directus = new Directus('https://n7egmyag.directus.app');

	const products = directus.items('products').readByQuery({
		sort: ['id']
	});
	const categories = directus.items('categories').readByQuery({ limit: 10 });
</script>

<div class="container">
	{#await categories}
		<p transition:slide>chargement des filtres...</p>
	{:then value}
		<label for="categories">
			Catégories :
			<select name="categories" id="categories">
				<option value="">Tous les projets</option>
				{#each value.data as item}
					<option value={item.id}>{item.name}</option>
				{/each}
			</select>
		</label>
	{:catch error}
		<p transition:slide>une erreur s'est produite dans le cgargment des filtres</p>
		<code>{error}</code>
	{/await}

	{#await products}
		<p transition:slide>chargement...</p>
	{:then value}
		{#each value.data as item}
			<div transition:slide>
				<a href="/produits/{slugify(item.title)}">
					<h2>{item.title}</h2>
				</a>
			</div>
		{/each}
	{:catch error}
		<p transition:slide>une erreur s'est produite</p>
		<code>{error}</code>
	{/await}
</div>
