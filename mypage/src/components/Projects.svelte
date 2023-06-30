<section id="Projets">
  <h2>Projets</h2>
  <hr class="separator" />

  <div class="projects-view">
    <div class="project-card">
      <div class="project-card-img">
        <img
          src="img/project-osport.svg"
          alt="download icon"
          class="project-pic"
        />
      </div>
      <div class="project-card-txt">
        <h3>O'Sport</h3>
        <p>
          Projet de fin de formation O'Clock. Vise à mettre
          en relation des particuliers autour d'un projet sportif.
        </p>
        <p class="project-technos">
          Next.js, Tailwind, Express, Sequelize, PostgreSQL
        </p>
        <div class="project-btn">
          <a href="https://osport.ronankerveno.dev/">
            <button>Site web</button>
          </a>
          <a href="https://github.com/RonanKerveno/O-Sport-Frontend">
            <button>GitHub</button>
          </a>
        </div>
      </div>
    </div>

    <div class="project-card">
      <div class="project-card-img">
        <img
          src="img/project-blog.ronankerveno.svg"
          alt="download icon"
          class="project-pic"
        />
      </div>
      <div class="project-card-txt">
        <h3>RK Blog</h3>
        <p>
          Mon carnet de notes partageant mon apprentissage du développement et
          des astuces autour de Linux.
        </p>
        <p class="project-technos">React, Tailwind, Directus</p>
        <div class="project-btn">
          <a href="https://blog.ronankerveno.dev/">
            <button>Site web</button>
          </a>
          <a href="https://github.com/RonanKerveno/blog.ronankerveno.dev">
            <button>GitHub</button>
          </a>
        </div>
      </div>
    </div>

    <div class="project-card">
      <div class="project-card-img">
        <img
          src="img/project-dstromain.svg"
          alt="download icon"
          class="project-pic"
        />
      </div>
      <div class="project-card-txt">
        <h3>D Saint Romain</h3>
        <p>Site vitrine d'un artiste plasticien, réalisé avec Wordpress avant ma reconversion.</p>
        <p class="project-technos">Wordpress</p>
        <div class="project-btn">
          <a href="https://dstromain.fr/">
            <button>Site web</button>
          </a>
        </div>
      </div>
    </div>

    <div class="project-card">
      <div class="project-card-img">
        <img
          src="img/project-crechelespitchouns.svg"
          alt="download icon"
          class="project-pic"
        />
      </div>
      <div class="project-card-txt">
        <h3>Les Pitchoun's</h3>
        <p>Site web d'une crêche parentale, réalisé avec Wordpress avant ma reconversion.</p>
        <p class="project-technos">Wordpress</p>
        <div class="project-btn">
          <a href="https://crechelespitchouns.fr/">
            <button>Site web</button>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  section {
    text-align: center;
    background-color: azure;
  }
  .project-card {
    margin-bottom: 5rem;
  }
  .project-card:last-child {
    margin-bottom: 0;
  }
  img {
    margin-bottom: 1.2rem;
  }
  p {
    margin-bottom: 1.2rem;
    font-size: 0.95rem;
  }
  .project-technos {
    font-weight: 600;
  }
  .project-btn {
    display: flex;
    gap: 1rem;
    justify-content: center;
  }
  button {
    padding: 0.7rem;
    width: 6rem;
    color: #333333;
    background-color: #82c2db;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
  }
  button:hover {
    background-color: #68a5c4;
  }

  @media (min-width: 800px) {
    .projects-view {
      width: 94%;
      margin: auto;
    }
  }

  @media (min-width: 1080px) {
    .projects-view {
      margin-top: 4rem;
    }
    .project-card {
      display: flex;
      justify-content: space-around;
      gap: 4rem;
      text-align: left;
    }
    .project-card-img {
      width: 60%;
    }
    .project-card-txt {
      width: 40%;
      margin-top: 1rem;
    }
    .project-btn {
      justify-content: left;
    }
  }

  @media (min-width: 1350px) {
    .projects-view {
      width: 78rem;
    }
  }
</style>
