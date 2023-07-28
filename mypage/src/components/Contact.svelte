<script>
  import { tick } from "svelte";
  /**
   * @type {string | undefined}
   */
  export let mailApiKey;
  let status = "";
  let isSubmitting = false;

  const subject = "Message depuis ronankerveno.dev";
  let name = "";
  let email = "";
  let message = "";

  async function handleDelay() {
    await tick();
    setTimeout(() => {
      status = "";
    }, 7000);
  }

  const handleSubmit = async (
    /** @type {{ preventDefault: () => void; }} */ event
  ) => {
    event.preventDefault();
    isSubmitting = true;

    const object = {
      access_key: mailApiKey,
      subject: subject,
      name: name,
      email: email,
      message: message,
    };
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      const result = await response.json();
      status = result.success
        ? "L'Email a bien été envoyé !"
        : "Erreur: " + result.message;
      if (result.success) {
        name = "";
        email = "";
        message = "";
      }
    } catch (error) {
      if (error instanceof Error) {
        status = "Error: " + error.message;
      } else {
        status = "Error: " + JSON.stringify(error);
      }
    } finally {
      isSubmitting = false;
    }

    handleDelay();
  };
</script>

<section id="Contact">
  <h2>Contact</h2>
  <hr class="separator" />
  <div class="contact-container">
    <p>
      N'hésitez pas à me contacter en remplissant le formulaire, je vous
      répondrais dès que possible.
    </p>
    <div class="form-container">
      <form on:submit|preventDefault={handleSubmit}>
        <div class="input-container">
          <h3>Nom</h3>
          <input
            type="text"
            bind:value={name}
            placeholder="Entrez votre nom"
            required
          />
        </div>
        <div class="input-container">
          <h3>Email</h3>
          <input
            type="email"
            bind:value={email}
            placeholder="Entrez votre email"
            required
          />
        </div>
        <div class="input-container">
          <h3>Message</h3>
          <textarea
            bind:value={message}
            placeholder="Entrez votre message"
            required
            rows="3"
          />
        </div>
        <div class="submit-container">
          <input
            type="submit"
            value="Envoyer"
            disabled={isSubmitting}
            class:success={!isSubmitting && status.startsWith("Success")}
            class:error={status.startsWith("Error")}
          />
        </div>
        {#if status}
          <p class="status">{status}</p>
        {/if}
      </form>
    </div>
  </div>
</section>

<style>
  section {
    background-color: #fafafa;
    padding-bottom: 7rem;
  }
  p,
  .status {
    text-align: center;
    margin-bottom: 2.5rem;
  }
  .form-container {
    padding: 1.5rem;
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 1.7rem;
    margin: 0 auto;
  }
  h3 {
    margin: 0 0 1rem 0;
    font-size: 1rem;
  }
  input,
  textarea {
    border: 1px solid #cccccc;
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    background-color: #fafafa;
  }
  .submit-container {
    text-align: right;
  }
  input[type="submit"] {
    width: fit-content;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background-color: #82c2db;
    border: none;
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
  input[type="submit"]:hover {
    background-color: #68a5c4;
  }

  input::placeholder,
  textarea::placeholder {
    color: gray;
    font-size: 0.9rem;
  }

  @media (min-width: 800px) {
    .contact-container {
      width: 94%;
      margin: auto;
    }
  }

  @media (min-width: 1080px) {
    .form-container {
      width: 50rem;
      margin: auto;
    }

    section {
      padding-bottom: 7.5rem;
    }
  }
</style>
