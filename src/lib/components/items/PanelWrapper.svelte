<script>
	import PanelItem from './PanelItem.svelte';
	export let news;
	let openedItem = 0;
	let open = true;

	const isActive = (i) => {
		return i == openedItem ? true : false;
	};

	function handleClick(e) {
		let targetIndex = e.target.dataset.index;
		if (targetIndex == openedItem) {
			// open = false;
			// openedItem = undefined;
		} else {
			open = false;
			openedItem = targetIndex;
			open = true;
		}
	}

	const newsWid = news.map((o, i) => ({ ...o, id: i }));
</script>

<div class="wrapper">
	{#each newsWid as actu}
		<PanelItem {actu} open={isActive(actu.id) && open} on:click={handleClick} />
	{/each}
</div>

<style>
	.wrapper {
		/* background-color: var(--muted-border-color); */
		display: flex;
		gap: 1rem;
		margin-bottom: 3rem;
		min-height: 500px;
	}
</style>
