<script>
  import { Hamburger } from "svelte-hamburgers";
  import Menu from "./Menu.svelte";

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
  <div id="burger-container">
    <Hamburger
      bind:open
      --color="white"
      --layer-height="2px"
      --layer-width="27px"
      --hover-opacity="1"
    />
  </div>
</header>
<Menu bind:open />

<style>
  header {
    padding-top: 0.1rem;
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
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
    margin-left: 0.5rem;
  }
  #burger-container {
    margin-top: 0.3rem;
  }

</style>
