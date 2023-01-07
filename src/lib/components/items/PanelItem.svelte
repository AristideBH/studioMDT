<script>
	import { slide } from 'svelte/transition';
	export let open = false;
	export let actu = {
		title: 'default title',
		subtitle: 'default subtitle',
		content: 'default content',
		imgUrl: '/favicon.png',
		extLink: '/',
		id: 0
	};
</script>

<article class:open>
	<summary data-index={actu.id} on:click>{actu.title}</summary>
	{#if open}
		<div class="content">
			<h2>{actu.subtitle}</h2>
			<p>
				{actu.content}
			</p>
			<img src="/favicon.png" alt="" />
			<a href="/">En voir plus</a>
		</div>
	{/if}
</article>

<style lang="scss">
	article {
		display: flex;
		flex-direction: row;
		background-color: var(--background-color);
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
		background-color: var(--code-background-color);
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
