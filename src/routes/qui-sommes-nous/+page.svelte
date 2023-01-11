<script lang="ts">
	import { t } from '$lib/i18n';
</script>

<svelte:head>
	<title>Mi2 | {$t('about.title')}</title>
</svelte:head>

<section class="container ">
	<h2>{$t('about.title')}</h2>
	<p>{$t('about.welcome')}</p>
</section>
