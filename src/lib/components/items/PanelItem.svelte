<script>
	export let open = false;
	export let i;
	export let actu = {
		title: 'default title',
		subtitle: 'default subtitle',
		content: 'default content',
		imgUrl: '/favicon.png',
		extLink: '/'
	};
	if (i == 0) open = true;
</script>

<details {open}>
	<summary>{actu.title}</summary>
	<h2>{actu.subtitle}</h2>
	<p>
		{actu.content}
	</p>
	<img src="/favicon.png" alt="" />
	<a href="/">En voir plus</a>
</details>
