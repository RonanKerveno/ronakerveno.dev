<script>
  import { tick } from "svelte";
  /**
   * @type {string | undefined}
   */
  export let mailApiKey;
  let status = "";
  let isSubmitting = false;

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
  <p>
    N'hésitez pas à me contacter en remplissant le formulaire, je vous
    répondrais dès que possible.
  </p>
  <form on:submit|preventDefault={handleSubmit}>
    <input type="text" bind:value={name} placeholder="Nom" required />
    <input type="email" bind:value={email} placeholder="Email" required />
    <textarea bind:value={message} placeholder="Message" required rows="3" />
    <input
      type="submit"
      disabled={isSubmitting}
      class:success={!isSubmitting && status.startsWith("Success")}
      class:error={status.startsWith("Error")}
    />
    {#if status}
      <p class="status">{status}</p>
    {/if}
  </form>
</section>

<style>
  section {
    background-color: #fafafa;
  }
  p,
  .status {
    text-align: center;
    margin-bottom: 2.5rem;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    width: 300px;
    margin: 0 auto;
  }
  input,
  textarea {
    border: 1px solid #cccccc;
    padding: 10px;
    font-size: 16px;
    border-radius: 5px;
  }
  input[type="submit"] {
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
    color:lightslategray
  }
</style>
