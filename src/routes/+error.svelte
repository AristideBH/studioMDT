<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="container">
	<hgroup>
		<h1>{$page.status}</h1>
		<h2>{$page.error?.message}</h2>
	</hgroup>
</div>

<style>
	.container {
		padding-top: 2em;
	}
</style>
