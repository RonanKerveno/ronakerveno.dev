<script lang="ts">
  import { Hamburger } from "svelte-hamburgers";
  import Menu from "./Menu.svelte";
  import MenuDesktop from "./MenuDesktop.svelte";
  import { writable, derived } from "svelte/store";

  // Définition des breakpoints
  const breakpoints = {
    desktop: 800,
  };

  // Écouteur pour le redimensionnement de la fenêtre
  const screenSize = writable([0, 0]);
  if (typeof window !== "undefined") {
    window.addEventListener("resize", () =>
      screenSize.set([window.innerWidth, window.innerHeight])
    );
    screenSize.set([window.innerWidth, window.innerHeight]);
  }

  const isDesktop = derived(
    screenSize,
    ($screenSize) => $screenSize[0] >= breakpoints.desktop
  );

  let open: boolean;
  let menuItems: string[] = ["Accueil", "A propos", "Projets", "Contact"];
</script>

<header>
  <div class="header-container">
    <div class="header-title">
      <a href="/">
        <img
          src="img/ronan_kerveno.svg"
          alt="Ronan Kerveno logo"
          class="header-image"
        />
      </a>
      <p>Ronan Kerveno</p>
    </div>
    {#if $isDesktop}
      <!-- Desktop version -->
      <MenuDesktop {menuItems} />
    {:else}
      <!-- Mobile version -->
      <div class="burger-container">
        <Hamburger
          bind:open
          --color="white"
          --layer-height="2px"
          --layer-width="27px"
          --hover-opacity="1"
        />
      </div>
      <Menu {menuItems} bind:open />
    {/if}
  </div>
</header>

<style>
  p {
    font-size: 1.1rem;
  }
  header {
    padding-top: 0.1rem;
    position: fixed;
    top: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.664);
    color: white;
    z-index: 1;
  }
  .header-container {
    display: flex;
    justify-content: space-between;
  }
  .header-title {
    display: flex;
    font-size: larger;
    gap: 1rem;
    align-items: center;
  }
  .header-title a {
    display: flex;
    align-items: center;
  }
  .header-image {
    height: 2.7rem;
    margin-left: 0.7rem;
  }
  .burger-container {
    margin-top: 0.3rem;
  }

  @media (min-width: 800px) {
    .header-container {
      width: 94%;
      margin: auto;
    }
    .header-image {
      margin-left: 0rem;
    }
  }
</style>
