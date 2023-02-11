<script>
	import { slide } from 'svelte/transition';
	export let open = false;
	export let item = {
		title: 'default title',
		subtitle: 'default subtitle',
		content: 'default content',
		imgUrl: '/favicon.png',
		extLink: '/',
		id: 0
	};
</script>

<article class:open>
	<summary data-index={item.id} on:click>{item.title}</summary>
	{#if open}
		<div class="content">
			<h2>{item.subtitle}</h2>
			<p>
				{item.content}
			</p>
			<img src="/favicon.png" alt="" />
			<!-- <a href="/">En voir plus</a> -->
		</div>
	{/if}
</article>

<style lang="scss">
	article {
		margin-block: 0;
		padding: 0px;
		display: flex;
		flex-direction: row;
		// background-color: var(--background-color);
		align-items: stretch;
		text-align: end;
		justify-content: center;
		color: var(--muted-color);
		&:hover {
			color: var(--color);
		}

		&.open {
			summary {
				color: var(--primary);
			}
		}
	}
	summary {
		padding: 1.25rem 0.35em;
		cursor: pointer;
		writing-mode: tb-rl;
		transform: rotate(-180deg);
		font-size: 2rem;
		font-weight: 900;
		text-transform: uppercase;
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		text-align: start;
		border-left: 1px solid var(--muted-border-color);
		// background-color: var(--code-background-color);
		padding: 0.85rem 1.5rem 1.5rem;

		img {
			max-height: 200px;
			margin-bottom: 1rem;
		}

		a {
			margin-top: auto;
			width: fit-content;
		}
	}
</style>
