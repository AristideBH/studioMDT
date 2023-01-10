<script lang="ts">
	import DataNumber from '$lib/components/items/DataNumber.svelte';
</script>

<svelte:head>
	<title>Titre de la page</title>
</svelte:head>

<section class="container ">
	<h2>About</h2>

	<p style="height: 200vh">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus iure assumenda saepe
		perspiciatis, possimus necessitatibus magni suscipit commodi quibusdam vero itaque mollitia
		culpa voluptatem inventore odio officia sunt nulla ea?
	</p>
</section>

<DataNumber options={{ data: 9000, ico: '/picto/1.png', subtitle: 'text 1' }} />
