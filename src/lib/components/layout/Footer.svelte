<script>
	import 'iconify-icon';
</script>

<footer class="container">
	<nav>
		<ul>
			<li>
				<a href="/">
					<iconify-icon icon="uil:facebook-f" />
				</a>
			</li>
			<li>
				<a href="/">
					<iconify-icon icon="uil:instagram" />
				</a>
			</li>
			<li>
				<a href="/">
					<iconify-icon icon="uil:twitter" />
				</a>
			</li>
			<li>
				<a href="/">
					<iconify-icon icon="uil:youtube" />
				</a>
			</li>
		</ul>

		<ul>
			<li><a href="/">Cookies</a></li>
			<li><a href="/">Work</a></li>
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
		color: var(--primrary-inverse);
	}
</style>
