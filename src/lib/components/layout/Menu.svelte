<script>
	import { menu, menuItems } from '$lib/menu.js';
</script>

<ul class={$$props.class ?? 'desktop'}>
	{#each menuItems as item}
		<li>
			<a href={item.url} on:click={menu.toggle}>
				{item.text}
			</a>
		</li>
	{/each}
</ul>

<style lang="scss">
	ul {
		display: flex;
		gap: 1rem;
		margin-bottom: 0;

		&.mobile {
			flex-flow: column;
			li {
				display: flex;
			}

			a {
				font-size: 2em;
				font-weight: 700;
				margin-inline: auto;
				--color: var(--h1-color);
			}
		}

		&.desktop {
			a {
				font-size: 0.9rem;
				font-weight: 500;
				--color: var(--h1-color);
			}

			@media only screen and (max-width: 70em) {
				display: none;
			}
		}
	}
</style>
