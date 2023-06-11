<script>
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";
  import { frontPageHeight } from "../stores/frontPage";

  let animate = false;

  let pageHeight = "100vh";

  const unsubscribe = frontPageHeight.subscribe((value) => {
    pageHeight = value;
  });

  onMount(() => {
    animate = true;
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        frontPageHeight.set("auto");
      } else {
        frontPageHeight.set("100vh");
      }
    });
    return unsubscribe;
  });

  let title = "Bonjour, je suis Ronan Kerveno".split("");
  let subtitle = "Développeur Web Javascript Frontend".split("");
</script>

<div id="Accueil" style="height: {pageHeight};">
  <div id="home">
    <div id="catching">
      <h1>
        {#each title as letter, index (index)}
          <span
            class={animate ? "letter animate" : "letter"}
            style="animation-delay: {animate ? index * 0.04 + 's' : '0s'}"
            >{letter}</span
          >
        {/each}
      </h1>
      <p id="catchphrase">
        {#each subtitle as letter, index (index)}
          <span
            class={animate ? "letter animate" : "letter"}
            style="animation-delay: {animate
              ? (title.length + index) * 0.04 + 's'
              : '0s'}">{letter}</span
          >
        {/each}
      </p>
    </div>

    <picture id="home__picture">
      <source media="(max-width: 600px)" srcset="img/image_accueil_small.jpg" />
      <source
        media="(min-width: 601px) and (max-width: 767px)"
        srcset="img/image_accueil_medium.jpg"
      />
      <source
        media="(min-width: 768px) and (max-width: 1000px)"
        srcset="img/image_accueil_large.jpg"
      />
      <source
        media="(min-width: 1530px) and (max-width: 1799px)"
        srcset="img/image_accueil_larger.jpg"
      />
      <source
        media="(min-width: 1800px)"
        srcset="img/image_accueil_extra_large.jpg"
      />
      <img class="home__image" src="img/image_accueil.jpg" alt="Web devices" />
    </picture>
  </div>
  {#if animate}
    <div id="portfolio-link">
      <a href="#Projets">
        {#if window.scrollY <= 100}
          <button
            in:fly={{ y: 200, duration: 4000 }}
            on:click={() => (pageHeight = "auto")}
          >
            Mes projets
          </button>
        {:else}
          <button on:click={() => (pageHeight = "auto")}> Mes projets </button>
        {/if}
      </a>
    </div>
  {/if}
</div>

<style>
  #Accueil {
    margin-bottom: 4rem;
  }
  #home {
    background-color: #82c2db;
    padding-top: 4rem;
    color: #333333;
  }
  #catching {
    margin: 2.5rem 1rem;
  }
  h1 {
    font-size: 1.7rem;
    font-weight: 500;
    text-transform: uppercase;
  }
  #catchphrase {
    margin-top: 1.5rem;
    font-size: 1rem;
  }
  h1,
  p#catchphrase {
    transition: color 1s ease;
  }
  #home__picture {
    background-color: white;
  }
  .home__image {
    margin-bottom: -0.7rem;
  }
  #portfolio-link {
    margin-top: 4rem;
    text-align: center;
  }
  button {
    padding: 1rem;
    font-size: 1.2rem;
    color: #333333;
    background-color: #82c2db;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  button:hover {
    background-color: #68a5c4;
  }

  .letter {
    color: transparent;
    opacity: 0;
  }

  .letter.animate {
    animation: fadeIn 0.3s forwards;
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
      color: #333333;
    }
  }
</style>
