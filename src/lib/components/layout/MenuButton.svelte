<script>
  import { menu } from "$lib/menu";
</script>

<div class="menu-icon" class:active={$menu}	on:click={menu.toggle}>
	<div>
		<span />
		<span />
	</div>
</div>


<style lang="scss">
  .menu-icon {
		--line-color: var(--h1-color);
		--back-color: var(--primary);
		position: relative;
		width: calc(1.075em + 2rem);
		height: calc(1.07em + 2rem);
		cursor: pointer;

		div {
			margin: auto;
			position: absolute;
			top: 0;
			right: 0;
			left: 0;
			bottom: 0;
			width: 22px;
			height: 12px;
			display: flex;
			align-items: center;
			justify-content: center;
			pointer-events: none;
		}
    
		span {
			position: absolute;
			display: block;
			width: 100%;
			height: 2px;
			background-color: var(--line-color);
			border-radius: 1px;
			transition: all 0.2s cubic-bezier(0.1, 0.82, 0.76, 0.965);

			&:first-of-type {
				top: 0;
			}
			&:last-of-type {
				bottom: 0;
			}
		}

		&.active {
			span {
				opacity: 0;
				&:first-of-type {
					transform: rotate(45deg);
					top: 5px;
					opacity: 1;
				}
				&:last-of-type {
					transform: rotate(-45deg);
					bottom: 5px;
					opacity: 1;
				}
			}
      &:hover span {
        width: 22px;
      }
		}

		&:hover {
			// no need hover effect on mobile.
			@media (min-width: 768px) {
				span {
					width: 28px;
				}
			}
		}

    @media only screen and (min-width: 70em) {
			display: none;
    }
	}

</style>