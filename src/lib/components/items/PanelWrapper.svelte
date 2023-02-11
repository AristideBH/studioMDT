<script lang="ts">
	import PanelItem from './PanelItem.svelte';
	export let content;
	let openedItem = 0;
	let open = true;

	const isActive = (i: number) => {
		return i == openedItem ? true : false;
	};

	function handleClick(e: Event) {
		if (!e.target) return;
		let targetIndex = e.target?.dataset?.index;
		if (targetIndex !== openedItem) {
			open = false;
			openedItem = targetIndex;
			open = true;
		}
	}

	const content_Ided = content.map((o: any, i: number) => ({ ...o, id: i }));
</script>

<div class="wrapper">
	{#each content_Ided as item}
		<PanelItem {item} open={isActive(item.id) && open} on:click={handleClick} />
	{/each}
</div>

<style>
	.wrapper {
		display: flex;
		gap: 1rem;
		margin-bottom: 3rem;
		min-height: 560px;
	}

	@media only screen and (max-width: 56em) {
		.wrapper {
			flex-direction: column;
		}
	}
</style>
