<a class="viewMore" aria-hidden="true" aria-label="En voir plus" href="#data">&nbsp;</a>

<style lang="scss">
	@keyframes scroll-down {
		0% {
			opacity: 0;
		}
		30% {
			opacity: 1;
		}
		60% {
			opacity: 1;
		}
		100% {
			opacity: 0;
			top: 90%;
		}
	}
	.viewMore {
		position: absolute;
		bottom: 1rem;
		left: 50%;
		height: 50px;
		width: 30px;
		// border: 2px white solid;
		border-radius: 50px;
		&:hover,
		&:focus {
			text-decoration: none;
		}

		&::before {
			content: '';
			position: absolute;
			top: 20%;
			left: 50%;
			border: 2px solid white;
			height: 10px;
			width: 10px;
			transform: translate(-50%, -50%) rotate(45deg);
			border-top: transparent;
			border-left: transparent;
			animation: scroll-down 2.5s linear infinite;
		}
	}
</style>
