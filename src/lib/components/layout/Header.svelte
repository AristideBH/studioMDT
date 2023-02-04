<script>
	import ContactBtn from '$lib/components/items/ContactBtn.svelte';
	import Menu from '$lib/components/layout/Menu.svelte';
	import MobileMenu from '$lib/components/layout/MobileMenu.svelte';
	import MenuButton from '$lib/components/layout/MenuButton.svelte';

	import { menu } from '$lib/js/menu';
	import { scroll } from '$lib/js/utils';

	let bodyScroll = new scroll();
	$: $menu === true ? bodyScroll.disable() : bodyScroll.enable();
</script>

<header class="container-fluid">
	<a href="/">
		<div class="logo font">Studio.<br />MDT</div>
	</a>

	<nav>
		<Menu />
	</nav>

	<div class="actions">
		<ContactBtn />
		<MenuButton />
	</div>
</header>

{#if $menu}
	<MobileMenu />
{/if}

<style lang="scss">
	header {
		backdrop-filter: blur(15px);
		position: sticky;
		top: 0;
		background-color: var(--modal-overlay-background-color);
		z-index: 5;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1.5rem;
		padding-block: var(--padding-header);

		.actions {
			display: flex;
			gap: 0.75rem;
		}

		nav {
			display: flex;
			gap: 1.5rem;
		}
	}

	.logo {
		font-weight: 900;
		line-height: 0.86;
		font-size: 2em;
		color: var(--h1-color);
	}

	nav {
		margin-right: auto;
		margin-left: auto;
		&:empty {
			display: none;
		}
	}
</style>
