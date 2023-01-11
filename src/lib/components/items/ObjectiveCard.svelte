<script>
	import  'iconify-icon';
  export let title, subtitle, link, ico, color;
</script>

<a href="{link}">
  <article style:--c={color}>
    <h2>{title}</h2>

    {#if subtitle}
      <p>{subtitle}</p>
    {/if}

    <iconify-icon height="36" icon={ico}></iconify-icon>
  
  </article>
</a>

<style lang="scss">
  a, article{
    height: 100%;
    &:hover, &:focus{
      text-decoration: none;
    }
  }

  article{
    background-color: var(--c);
    padding: 1.5em;
    display: flex;
    flex-direction: column;
    transition: transform 0.125s ease-out;

    &:hover{
      transform: scale(0.98);
    }
  }

  h2{
    line-height: 1.25;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }

  h2, p{
    color:white;
  }

  iconify-icon{
    color:var(--primary-inverse);
    margin-left: auto;
  }


</style>