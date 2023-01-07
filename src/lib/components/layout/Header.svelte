<script>
	import ContactBtn from '$lib/components/items/ContactBtn.svelte';
</script>

<header>
	<span class="container">
		<a href="/">
			<img src="/favicon.png" alt="" />
		</a>

		<nav>
			<ul>
				<li><a href="/qui-sommes-nous">Qui sommes-nous ?</a></li>
				<li><a href="/">M2i Biocontrol</a></li>
				<li><a href="/">M2i CDMO</a></li>
				<li><a href="/">Commander</a></li>
			</ul>
		</nav>

		<ContactBtn />

		<label for="langSwitch">
			<span>FR / EN</span>
			<input type="checkbox" name="langSwitch" id="langSwitch" />
		</label>
	</span>
</header>

<style lang="scss">
	header {
		position: sticky;
		top: 0;
		background-color: var(--modal-overlay-background-color);
		margin-bottom: 2rem;

		& > span {
			display: flex;
			justify-content: space-between;
			align-items: center;
			gap: 1.5rem;
			padding: 1.5rem 0;

			ul {
				margin-bottom: 0;
			}
		}
	}

	img {
		max-height: 68px;
	}

	nav {
		margin-right: auto;

		ul {
			display: flex;
			gap: 1rem;
		}
	}
</style>
