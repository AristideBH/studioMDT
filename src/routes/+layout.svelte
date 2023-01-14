<script lang="ts">
	import '$lib/css/pico.scss';
	import '$lib/css/style.scss';
	import type { PageData } from './$types';

	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import ContentTransition from '$lib/components/layout/ContentTransition.svelte';
	import { Svrollbar } from 'svrollbar';

	export let data: PageData;
</script>

<svelte:head>
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Blinker" />
	<title>Studio MDT</title>
</svelte:head>

<Header />

<main>
	<ContentTransition pathname={data.pathName}>
		<slot />
	</ContentTransition>
</main>

<Footer />

<Svrollbar initiallyVisible />
