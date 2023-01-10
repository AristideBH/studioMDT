<script>
	import ContactBtn from '$lib/components/items/ContactBtn.svelte';
	import Menu from '$lib/components/layout/Menu.svelte';
	import { scroll } from '$lib/utils';
	import { fade } from 'svelte/transition';
	import { locale, locales } from '$lib/i18n';
	let menuOpen;
	let bodyScroll = new scroll();

	$: menuOpen == true ? bodyScroll.disable() : bodyScroll.enable();
</script>

<header class="container-fluid">
	<a href="/">
		<img src="/logo-white.png" alt="" />
	</a>

	<nav>
		<Menu />
	</nav>

	<select bind:value={$locale}>
		{#each locales as l}
			<option value={l}>
				{l}
			</option>
		{/each}
	</select>

	<ContactBtn class="contrast" />

	<label for="menuMobile" class="flex:col">
		<input
			type="checkbox"
			name="menuMobile"
			id="menuMobile"
			role="switch"
			bind:checked={menuOpen}
		/>
	</label>
</header>

{#if menuOpen}
	<section id="mobileMenu" class="container-fluid" transition:fade={{ duration: 150 }}>
		<nav class="container">
			<Menu class="mobile" />
		</nav>
	</section>
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

	label {
		align-items: start;
		justify-content: center;
		gap: 0.25em;
		@media only screen and (min-width: 70em) {
			display: none;
		}
	}

	select {
		width: fit-content;
		margin-bottom: 0;
	}

	#mobileMenu {
		position: fixed;
		top: var(--header-height);
		height: calc(100vh - var(--header-height));
		background-color: var(--modal-overlay-background-color);
		backdrop-filter: blur(15px);
		z-index: 10;
		padding-block: 1.5em 2.5em;
		display: flex;
		align-items: center;
		justify-content: center;

		@media only screen and (min-width: 70em) {
			display: none;
		}
	}
</style>
