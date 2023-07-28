<script>
	import Header from "../components/Header.svelte";
	import FrontPage from "../components/FrontPage.svelte";
	import AboutMe from "../components/AboutMe.svelte";
	import Projects from "../components/Projects.svelte";
	import Contact from "../components/Contact.svelte";
	import Footer from "../components/Footer.svelte";
	import { PUBLIC_EMAIL_API_KEY } from '$env/static/public';
</script>

<Header />

<main>
	<FrontPage />
	<AboutMe />
	<Projects />
	<Contact mailApiKey={PUBLIC_EMAIL_API_KEY}/>
</main>

<Footer />
