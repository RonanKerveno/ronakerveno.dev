<script>
	import Header from "../components/Header.svelte";
	import FrontPage from "../components/FrontPage.svelte";
	import AboutMe from "../components/AboutMe.svelte";
	import Projects from "../components/Projects.svelte";
	import Contact from "../components/Contact.svelte";
	import Footer from "../components/Footer.svelte";
	/** @type {import('../routes/$types').PageData} */
	export let data;
</script>

<Header />

<main>
	<FrontPage />
	<AboutMe />
	<Projects />
	<Contact mailApiKey={data.mailApiKey}/>
</main>

<Footer />
