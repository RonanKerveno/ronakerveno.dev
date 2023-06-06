<script>
  import { Hamburger } from "svelte-hamburgers";

  /**
   * @type {boolean}
   */
  let open;
</script>

<header>
  <div id="header-title">
    <img src="img/ronan_kerveno.svg" alt="download icon" id="header-image" />
    <p>Ronan Kerveno</p>
  </div>
  <Hamburger bind:open --color="white" --layer-height="3px"/>
</header>

<style>
  header {
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.664);
    color: white;
  }
  #header-title {
    display: flex;
    font-size: larger;
    gap: 1rem;
    align-items: center;
  }
  #header-image {
    height: 2.7rem;
  }
</style>
