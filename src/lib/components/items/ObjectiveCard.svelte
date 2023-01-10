<script>
  export let title, subtitle, link, ico, color;
</script>

<a href="{link}">
  <article style:--c={color}>
      <h2>{title}</h2>
  
      {#if subtitle}
        <p>{subtitle}</p>
      {/if}
  
    <img src="{ico}" alt="">
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

  img{
    height: 42px;
    width: 42px;
    margin-top: auto;
    align-self: end;
  }
</style>