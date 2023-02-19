<script>
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';

	export let data;

	const options = {
		rewind: true,
		gap: '1rem',
		// autoplay: true,
		arrows: true,
		height: '35rem',
		focus: 'center',
		autoWidth: true,
		lazyLoad: 'nearby'
	};
</script>

<Splide aria-label="Galerie" {options}>
	{#each data as item}
		<SplideSlide>
			<img src={item.sourceUrl} alt="" srcset={item.srcSet} />
		</SplideSlide>
	{/each}
</Splide>

<style>
	img {
		width: 100%;
		object-fit: cover;
		height: 100%;
	}

	:global([aria-busy='true']:not(input, select, textarea)::before) {
		display: none !important;
	}
</style>
