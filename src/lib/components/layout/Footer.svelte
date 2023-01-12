<script lang="ts">
	import Socials from '$lib/components/items/Socials.svelte';
</script>

<footer class="container">
	<nav>
		<ul>
			<li>
				<Socials />
			</li>
			<li><a href="/">Cookies</a></li>
		</ul>
	</nav>
</footer>

<style lang="scss">
	footer {
		margin-top: auto;
		padding-block: 1rem;
	}
	nav,
	ul {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	ul {
		gap: 1em;

		li {
			margin-bottom: 0;
		}
	}

	a {
		color: var(--h1-color);
	}
</style>
