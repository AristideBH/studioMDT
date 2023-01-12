<script lang="ts">
	import { fly } from 'svelte/transition';
	export let pathname = '';
</script>

{#key pathname}
	<div
		class="gab TransitionHolder"
		in:fly={{ duration: 500, delay: 500, y: 100 }}
		out:fly={{ duration: 500, y: -100 }}
	>
		<slot />
	</div>
{/key}
