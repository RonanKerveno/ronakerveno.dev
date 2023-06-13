<script lang="ts">
  export let menuItems: string[];

  import { frontPageHeight } from "../stores/frontPage";
  function handleClick() {
    frontPageHeight.set("auto");
  }
</script>

<div class="menu">
  {#each menuItems as link, i}
    <a href={"#" + link} rel="external" on:click={handleClick}>
      <p class="menu-item">
        {link}
      </p>
    </a>
  {/each}
</div>

<style>
  .menu {
    display: flex;
    gap: 2rem;
    align-items: center;
    padding: 1.1rem;
  }
  .menu-item:hover {
    color: #68a5c4;
  }
  p {
    font-size: 1.1rem;
  }  
</style>
