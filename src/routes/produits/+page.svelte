<script lang="ts">
	import { slugify } from '$lib/js/utils';
	import PocketBase from 'pocketbase';
	const pb = new PocketBase('http://127.0.0.1:8090');
	// list and filter "example" collection records

	let tofecth = 'products';
	const allProjects = pb.collection(tofecth).getList(1, 20);
	const allCategories = pb.collection('categories').getList(1, 20);

	import { slide } from 'svelte/transition';
</script>

<div class="container">
	{#await allCategories}
		<p transition:slide>chargement des filtres...</p>
	{:then value}
		<label for="categories">
			Catégories :
			<select name="categories" id="categories">
				<option value="">Tous les projets</option>
				{#each value.items as item}
					<option value={item.id}>{item.name}</option>
				{/each}
			</select>
		</label>
	{:catch error}
		<p transition:slide>une erreur s'est produite dans le cgargment des filtres</p>
		<code>{error}</code>
	{/await}
	<div />

	{#await allProjects}
		<p transition:slide>chargement...</p>
	{:then value}
		{#each value.items as item}
			<div transition:slide>
				<a href="/produits/{slugify(item.title)}">
					<h2>{item.title}</h2>
					<img src="http://127.0.0.1:8090/api/files/{tofecth}/{item.id}/{item.vignette}" alt="" />
				</a>
			</div>
		{/each}
	{:catch error}
		<p transition:slide>une erreur s'est produite</p>
		<code>{error}</code>
	{/await}
</div>
