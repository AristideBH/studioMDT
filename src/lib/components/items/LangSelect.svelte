<script>
	import { locale, locales } from '$lib/i18n';
</script>

<select bind:value={$locale}>
  {#each locales as l}
    <option value={l}>
      {l}
    </option>
  {/each}
</select>

<style>
  select {
		width: fit-content;
		margin-bottom: 0;
	}
</style>