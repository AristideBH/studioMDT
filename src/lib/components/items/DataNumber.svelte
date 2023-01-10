<script>

	export let options = {
		data: 9000,
		ico: '/favicon.png',
		subtitle: 'un peu de texte'
	};

	let current = 0;
	let duration = 1000;
	const increment = 
		options.data > 101 
		? options.data / (duration / 10) 
		: 1 ;

	const counter = () => {
		current += increment;
		if (current >= options.data) {
			current = options.data;
		}
	}

	const formatNumber = (num, decimalPlaces = 2, thousandsSeparator = ' ') => new Intl.NumberFormat('fr-FR', { maximumFractionDigits: decimalPlaces, useGrouping: true,  groupSeparator: thousandsSeparator }).format(num);
	setInterval(counter, 10);
// $: console.log(`💬 ~ nb`, nb);
	
</script>

<li>
	<img src={options?.ico} alt="{options.data} {options.subtitle}" />
	<span >{formatNumber(current)}</span>
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
		font-size: 2.5rem;
		font-weight: bolder;
	}
</style>
