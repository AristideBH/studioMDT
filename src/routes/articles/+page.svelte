<script lang="ts">
	import type { PageData } from '../users/$types';

	export let data: PageData;
</script>

<pre>{JSON.stringify(data, undefined, 2)}</pre>
