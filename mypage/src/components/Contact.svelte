<script>
  /**
   * @type {string | undefined}
   */
  export let mailApiKey;
  let status = "";
  const handleSubmit = async (
    /** @type {{ currentTarget: HTMLFormElement | undefined; }} */ data
  ) => {
    status = "Submitting...";
    const formData = new FormData(data.currentTarget);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
      status = result.message || "Success";
    }
  };
</script>

<section>
  <h2>Contact</h2>
  <hr class="separator" />
  <p>
    N'hésitez pas à me contacter en remplissant le formulaire, je vous
    répondrais dès que possible.
  </p>
  <form on:submit|preventDefault={handleSubmit}>
    <input type="hidden" name="access_key" value={mailApiKey} />
    <input type="text" name="name" required />
    <input type="email" name="email" required />
    <textarea name="message" required rows="3" />
    <input type="submit" />
  </form>
</section>

<style>
  section {
    background-color: #fafafa;
  }
  p {
    text-align: center;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
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
    background-color: #4caf50;
    color: white;
    border: none;
  }
  input[type="submit"]:hover {
    background-color: #45a049;
  }
</style>
