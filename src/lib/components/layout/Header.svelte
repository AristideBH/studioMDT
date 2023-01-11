<script>
	import ContactBtn from '$lib/components/items/ContactBtn.svelte';
	import Menu from '$lib/components/layout/Menu.svelte';
	import LangSelect from '$lib/components/items/LangSelect.svelte';
	import MobileMenu from '$lib/components/layout/MobileMenu.svelte';
	import MenuButton from '$lib/components/layout/MenuButton.svelte';
	import { menu } from '$lib/menu';
	import { scroll } from '$lib/utils';

	let bodyScroll = new scroll();
	$: $menu === true ? bodyScroll.disable() : bodyScroll.enable();
</script>

<header class="container-fluid">
	<a href="/">
		<img src="/logo-white.png" alt="M2i, Lead the change" />
	</a>

	<nav>
		<Menu />
	</nav>

	<div class="actions">
		<LangSelect/>
		<ContactBtn class="contrast" />
		<MenuButton/>
	</div>

</header>

{#if $menu}
	<MobileMenu/>
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

		.actions{
			display: flex;
			gap:0.75rem;
		}
	}

	img {
		height: var(--logo-height);
		min-width: 163px;
		object-fit: contain;
		aspect-ratio: 163 / 71;
	}

	nav {
		margin-right: auto;
		margin-left: auto;
		&:empty {
			display: none;
		}
	}

</style>
