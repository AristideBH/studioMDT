<script lang="ts">
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
	let shown = open;
	let offsetHeight: number;

	// $: console.log('💬:', offsetHeight);
</script>

<article class:open={shown}>
	<summary data-index={item.id} on:click>{item.title}</summary>
	{#if open}
		<div
			style=""
			class=" content-wrapper "
			in:fade={{ duration: 350, delay: 250 }}
			out:fade={{ duration: 350 }}
			on:introend={() => (shown = true)}
			on:outroend={() => (shown = false)}
		>
			{#if shown}
				<div class="content" in:fly|local={{ delay: 250, y: -10 }} out:fade>
					<h2>{item.catchphrase}</h2>
					{#if item.img}
						<img src={item.img.sourceUrl} alt="" sizes={item.img.sizes} srcset={item.img.srcSet} />
					{/if}
					<div class="description">
						{@html item.description}
					</div>
				</div>
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
		align-items: stretch;
		text-align: end;
		justify-content: start;
		border: 1px solid var(--muted-border-color);
		transition: all 500ms ease-out;
		flex: 0 1 1rem;
		max-height: var(--mH);

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

	.content-wrapper {
		display: flex;
		flex-grow: 0;
		flex-shrink: 1;
		background-color: var(--code-background-color);
		overflow-y: scroll;
	}
	.content {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 0 2rem;
		align-items: flex-start;
		align-self: flex-start;
		text-align: start;
		border-left: 1px solid var(--muted-border-color);
		padding: 0.85rem 1.5rem 1.5rem;
		width: 100%;
		overflow-y: auto;

		.description {
			flex: 5;
		}
		img {
			flex: 1;
		}
	}
</style>
