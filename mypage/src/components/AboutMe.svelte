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
    "Linux"
  ];
</script>

<section>
  <h2>A propos de moi</h2>
  <hr class="separator" />
  <div class="aboutme-subsection">
    <h3>De technicien à développeur</h3>
    <p>
      <strong>Technicien support</strong> de 2010 à 2022 dans une ESN, j'ai pu au
      cours de mes diverses missions développer différentes solutions de scripting
      (AutoHotkey, VBA) qui m'ont donné le goût du code.
    </p>
    <p>
      Toujours en veille technologique, je me suis autoformé en
      html/CSS/JavaScript puis en 2022/2023 j'ai intégré la formation <strong
        >Fullstack JavaScript</strong
      >
      de l'école <strong>O'Clock</strong>, avec une spécialisation en
      <strong>React</strong>. De part mon background de technicien et de
      passionné de <strong>Linux</strong>, je m'interesse aussi au déploiement
      des sites web.
    </p>
    <p>
      J'aime aussi partager mes expériences et j'ai créé un <strong>blog</strong
      > documentant mes découvertes et apprentissages de développeur et linuxien.
    </p>
    <div id="aboutme-buttons">
      <a href="#contact">
        <button>Mon blog</button>
      </a>
      <a href="#contact">
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
</section>

<style>
  p {
    margin-bottom: 1.2rem;
  }
  .aboutme-subsection {
    margin-bottom: 3rem;
  }
  #aboutme-buttons {
    display: flex;
    justify-content: space-around;
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
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
  .skill-tag {
    padding: 0.5rem 1rem;
    background-color: rgba(153,153,153,.2);
    border-radius: 5px;
    font-size: 0.9rem;
  }
</style>
