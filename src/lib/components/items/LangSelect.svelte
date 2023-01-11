<script>
	import { locale, locales } from '$lib/i18n';
</script>

<select bind:value={$locale}>
  {#each locales as l}
    <option value={l}>
      {l.toLocaleUpperCase()}
    </option>
  {/each}
</select>

<style>
  select {
		width: fit-content;
		margin-bottom: 0;
    font-size: 0.8rem;;
    padding-block: 0.5em;
    padding-inline: 0.8em 2em;
    background-position: center right 0.5rem;
	}
</style>