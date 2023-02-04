<script>
  import Menu from "$lib/components/layout/Menu.svelte";
	import { slide } from 'svelte/transition';  
	import {expoOut} from 'svelte/easing';
</script>

<section id="mobileMenu" class="container-fluid" transition:slide={{ duration: 400, easing: expoOut }}>
  <nav class="container">
    <Menu class="mobile" />
  </nav>
</section>

<style lang="scss">
  
	#mobileMenu {
		position: fixed;
		top: var(--header-height);
		height: calc(100vh - var(--header-height));
		background-color: var(--modal-overlay-background-color);
		backdrop-filter: blur(15px);
		z-index: 10;
		padding-block: 1.5em 5em;
		display: flex;
		align-items: center;
		justify-content: center;

		@media only screen and (min-width: 70em) {
			display: none;
		}
	}

</style>