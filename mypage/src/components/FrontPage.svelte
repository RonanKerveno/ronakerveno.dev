<div id="frontpage">
  <div id="home">
    <div id="catching">
      <h1>Bonjour, je suis Ronan Kerveno</h1>
      <p id="catchphrase">Développeur Web Javascript Frontend</p>
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
  <div id="portfolio-section">
    <a href="#portfolio">
      <button>Mes projets</button>
    </a>
  </div>
</div>

<style>
  #frontpage {
    height: 100vh;
  }
  #home {
    background-color: #82c2db;
    padding-top: 4rem;
    color: #333333;
  }
  #catching {
    margin: 2rem 1rem;
  }
  h1 {
    font-size: 1.7rem;
    font-weight: 400;
  }
  #catchphrase {
    margin-top: 1rem;
  }
  #home__picture {
    background-color: white;
  }
  .home__image {
    margin-bottom: -0.5rem;
  }
  #portfolio-section {
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
</style>
