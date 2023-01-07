<script>
	export let options = {
		data: 9_000,
		ico: '/favicon.png',
		subtitle: 'un peu de texte'
	};
</script>

<li>
	<span>{options.data}</span>
	<img src={options?.ico} alt="{options.data} {options.subtitle}" />
	<p>
		{options.subtitle}
	</p>
</li>

<style>
	li {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10px;
	}

	span {
		font-size: 2rem;
		font-weight: bolder;
	}
</style>
