<script>
	import { fade, fly, slide } from 'svelte/transition';
	import { clipPath, Direction } from '$lib/js/transition';
	import { quadOut } from 'svelte/easing';
	export let open = false;
	export let item = {
		title: 'default title',
		subtitle: 'default subtitle',
		content: 'default content',
		imgUrl: '/favicon.png',
		extLink: '/',
		id: 0
	};
	let status = 'waiting';

	let shown = open;

	$: console.log('💬:', status);
</script>

<article class:open={shown}>
	<summary data-index={item.id} on:click>{item.title}</summary>
	{#if open}
		<div
			class="flex"
			in:fade={{ duration: 350, delay: 250 }}
			out:fade={{ duration: 350 }}
			on:introend={() => (shown = true)}
			on:outroend={() => (shown = false)}
		>
			{#if shown}
				<div class="content" in:fly|local={{ delay: 250, y: -10 }} out:fade>
					<h2>{item.subtitle}</h2>
					<p>
						{item.content}
					</p>
					<img src="/favicon.png" alt="" />
				</div>
				<!-- <a href="/">En voir plus</a> -->
			{/if}
		</div>
	{/if}
</article>

<style lang="scss">
	article {
		position: relative;
		margin-block: 0;
		padding: 0px;
		display: flex;
		flex-direction: row;
		// background-color: unset;
		align-items: stretch;
		text-align: end;
		justify-content: start;
		border: 1px solid var(--muted-border-color);
		transition: all 500ms;
		flex: 0 1 1rem;
		// overflow: hidden;

		&:hover {
			color: var(--color);
		}

		&.open {
			flex: 1000 0 1rem;
			summary {
				color: var(--primary);
			}
		}

		@media only screen and (max-width: 56em) {
			flex-direction: column;
			summary {
				writing-mode: unset;
				text-align: left;
				transform: unset;
				padding: 0.85rem 1.5rem 1rem;
				border-bottom: 1px solid var(--muted-border-color);
			}
			.content {
				border-left: unset;
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
		background: var(--card-background-color);
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		text-align: start;
		border-left: 1px solid var(--muted-border-color);
		background-color: var(--code-background-color);
		padding: 0.85rem 1.5rem 1.5rem;
		max-height: 500px;

		img {
			max-height: 200px;
			margin-bottom: 1rem;
		}
	}
</style>
