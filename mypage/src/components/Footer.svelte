<script>
  import Icon from "@iconify/svelte";
  const iconStyle = "color: white; font-size: 1.5rem;";
  const currentYear = new Date().getFullYear();
</script>

<footer>
  <div class="icon-container">
    <Icon icon="ri:linkedin-fill" style={iconStyle} />
    <Icon icon="teenyicons:github-solid" style={iconStyle} />
    <Icon icon="fa6-solid:blog" style={iconStyle} />
  </div>
  <div class="techno">
    <Icon icon="simple-icons:svelte" style={iconStyle} />
    <p>
      Propulsé par
      <a href="https://kit.svelte.dev/" class="techno-link"> SvelteKit </a>
    </p>
  </div>
  <div class="footer__copyright">
    <p>
      &#xa9; <span class="footer__year" id="footer-year" />{currentYear} Ronan Kerveno
    </p>
  </div>
</footer>

<style>
  footer {
    color: white;
    background-color: black;
    width: 100%;
    padding: 1.5rem 1rem;
    text-align: center;
  }
  .icon-container {
    display: flex;
    gap: 2rem;
    justify-content: center;
    margin-bottom: 2rem;
  }
  .techno {
    margin-bottom: 1.7rem;
    display: flex;
    justify-content: center;
    gap: 0.7rem;
  }
  .techno-link {
    font-size: 1rem;
    text-decoration: underline;
  }

  @media (min-width: 1080px) {
    footer {
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    .icon-container,
    .techno {
      margin-bottom: 0;
    }
  }
</style>
