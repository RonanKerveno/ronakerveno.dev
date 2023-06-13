<script lang="ts">
  import { Hamburger } from "svelte-hamburgers";
  import Menu from "./Menu.svelte";
  import MenuDesktop from "./MenuDesktop.svelte";

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

    <!-- Desktop version -->
    <div class="desktop-menu">
      <MenuDesktop {menuItems} />
    </div>

    <!-- Mobile version -->
    <div class="mobile-menu">
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
    </div>
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
  
  .desktop-menu {
    display: none;
  }

  .mobile-menu {
    display: block;
  }

  @media (min-width: 800px) {
    .header-container {
      width: 94%;
      margin: auto;
    }
    .header-image {
      margin-left: 0rem;
    }
    .desktop-menu {
      display: block;
    }
    .mobile-menu {
      display: none;
    }
  }
</style>
