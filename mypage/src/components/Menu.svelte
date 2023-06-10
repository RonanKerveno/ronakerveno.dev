<script>
    import { frontPageHeight } from '../stores/frontPage';
    import { fly, scale, fade } from "svelte/transition";
    import { quadOut } from "svelte/easing";

    /**
     * @type {boolean}
     */
    export let open;

    function handleClick() {
        frontPageHeight.set('auto');
        open = false
    }
</script>

{#if open}
    <div class="menu" out:fade={{ duration: 200 }}>
        {#each ["Accueil", "A propos", "Projets", "Contact"] as link, i}
        <a href={"#"+link} rel="external" on:click={handleClick}>
            <p transition:fly={{ y: -15, delay: 50 * i }}>
                {link}
            </p>
        </a>
        {/each}
        <div
            class="bar"
            transition:scale={{ duration: 300, easing: quadOut, opacity: 1 }}
        />
    </div>
{/if}

<style>
    .menu {
        position: fixed;
        top: 3.9rem;
        left: 0;
        right: 0;
        text-align: center;
        font-size: 1.5em;
        letter-spacing: 0.15em;
        padding: 1em;
        padding-top: 0;
        color: #eef;
        background-color: rgba(0, 0, 0, 0.664);
        z-index: 1;
    }
    p {
        cursor: pointer;
        width: max-content;
        margin: 1rem auto;
    }
    .bar {
        border-style: solid;
        border-color: white;
        border-width: 1px;
        height: 0;
    }
</style>
