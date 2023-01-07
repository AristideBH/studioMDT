<script>
	import '$lib/css/pico.scss';
	import '$lib/css/style.scss';

	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
</script>

<svelte:head>
	<link href="https://fonts.cdnfonts.com/css/poppins" rel="stylesheet" />
</svelte:head>
<Header />

<main>
	<slot />
</main>

<Footer />
