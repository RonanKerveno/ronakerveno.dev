<script>
  let skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Svelte",
    "Tailwind",
    "Sass",
    "Node.js",
    "Express",
    "PostgreSQL",
    "Sequelize",
    "Directus",
    "GIT",
    "Terminal",
    "Linux",
  ];
</script>

<section id="A propos">
  <h2>A propos de moi</h2>
  <hr class="separator" />
  <div class="aboutme-container">
    <div class="aboutme-subsection">
      <h3>De technicien à développeur</h3>
      <p>
        <strong>Technicien support</strong> de 2010 à 2022 dans une ESN, j'ai pu
        au cours de mes diverses missions développer différentes solutions de scripting
        (AutoHotkey, VBA) qui m'ont donné le goût du code.
      </p>
      <p>
        Après m'être autoformé en HTML, CSS et JavaScript j'ai intégré en 2022
        la formation <strong>Fullstack JavaScript</strong>
        de l'école <strong>O'Clock</strong>, avec une spécialisation en
        <strong>React</strong>. De part mon background de technicien et de
        passionné de <strong>Linux</strong>, je m'interesse aussi au déploiement
        des sites web.
      </p>
      <p>
        J'aime aussi partager mes expériences et j'ai créé un <strong
          >blog</strong
        > documentant mes découvertes et apprentissages de développeur et linuxien.
      </p>
      <div class="aboutme-buttons">
        <a href="https://blog.ronankerveno.dev/">
          <button>Mon blog</button>
        </a>
        <a href="doc/Ronan_Kerveno_CV.pdf">
          <button>Mon CV</button>
        </a>
      </div>
    </div>
    <div class="aboutme-subsection">
      <h3>Compétences</h3>
      <div class="skills-container">
        {#each skills as skill (skill)}
          <div class="skill-tag">{skill}</div>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  section {
    background-color: #f3f3f3;
  }
  p {
    margin-bottom: 1.2rem;
    font-size: 0.95rem;
  }
  .aboutme-subsection {
    margin-bottom: 4rem;
  }
  .aboutme-subsection:last-child {
    margin-bottom: 0;
  }
  .aboutme-buttons {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-top: 2.5rem;
  }
  button {
    text-align: center;
    padding: 0.7rem;
    width: 6.5rem;
    color: #333333;
    background-color: #82c2db;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  button:hover {
    background-color: #68a5c4;
  }
  .skills-container {
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
  .skill-tag {
    padding: 0.5rem 1rem;
    color: #4e4e4e;
    background-color: rgba(153, 153, 153, 0.2);
    border-radius: 5px;
    font-size: 0.9rem;
  }

  @media (min-width: 800px) {
    .aboutme-container {
      width: 94%;
      margin: auto;
    }
  }

  @media (min-width: 1080px) {
    section {
      background-color: white;
      padding: 2rem 1rem 1rem 1rem;
      margin: 2.5rem 0;
    }
    .aboutme-container {
      margin-top: 4rem;
      display: flex;
      justify-content: space-between;
      gap: 6rem;
    }
    .aboutme-buttons {
      justify-content: left;
      margin-top: 2.5rem;
    }
  }

  @media (min-width: 1350px) {
    .aboutme-container {
      width: 78rem;
    }
  }
</style>
