<script>
	import PanelItem from './PanelItem.svelte';
	export let content;
	let openedItem = 0;
	let open = true;

	const isActive = (i) => {
		return i == openedItem ? true : false;
	};

	function handleClick(e) {
		let targetIndex = e.target.dataset.index;
		if (targetIndex !== openedItem) {
			open = false;
			openedItem = targetIndex;
			open = true;
		}
	}

	const content_Ided = content.map((o, i) => ({ ...o, id: i }));
</script>

<div class="wrapper">
	{#each content_Ided as item}
		<PanelItem {item} open={isActive(item.id) && open} on:click={handleClick} />
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

	@media only screen and (max-width: 56em) {
		.wrapper {
			flex-direction: column;
		}
	}
</style>
