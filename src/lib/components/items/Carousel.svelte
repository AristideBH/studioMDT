<script>
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';

	export let data;
	const options = {
		rewind: true,
		gap: '1rem',
		autoplay: true,
		arrows: true
	};
</script>

<Splide aria-label="Galerie" {options}>
	{#each data as item}
		<SplideSlide>
			<img src={item.sourceUrl} alt="" srcset={item.srcSet} />
		</SplideSlide>
	{/each}
</Splide>
