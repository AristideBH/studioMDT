<script>
	import ContactBtn from '$lib/components/items/ContactBtn.svelte';
</script>

<header class="container-fluid">
	<a href="/">
		<img src="/logo-white.png" alt="" />
	</a>

	<nav>
		<ul>
			<li><a href="/qui-sommes-nous">Qui sommes-nous ?</a></li>
			<li><a href="/">M2i Biocontrol</a></li>
			<li><a href="/">M2i CDMO</a></li>
			<li><a href="/">Commander</a></li>
		</ul>
	</nav>

	<ContactBtn class="contrast outline " />

	<label for="langSwitch" class="flex:col">
		<!-- <span>FR / EN</span> -->
		<input type="checkbox" name="langSwitch" id="langSwitch" role="switch" />
	</label>
</header>

<style lang="scss">
	header {
		backdrop-filter: blur(15px);
		position: sticky;
		top: 0;
		background-color: var(--modal-overlay-background-color);
		// margin-bottom: 2rem;
		z-index: 5;

		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1.5rem;
		padding-block: var(--padding-header);
	}

	img {
		height: var(--logo-height);
	}

	nav {
		margin-right: auto;
		margin-left: auto;

		ul {
			display: flex;
			gap: 1rem;
			margin-bottom: 0;
		}
		a {
			font-size: 0.9rem;
			--color: var(--primary-inverse);
		}
	}

	label {
		align-items: start;
		justify-content: center;
		gap: 0.25em;

		span {
			font-size: 10px;
		}
	}
</style>
