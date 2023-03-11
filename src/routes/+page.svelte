<script>
	// import Counter from './Counter.svelte';
	// import welcome from '$lib/images/svelte-welcome.webp';
	// import welcome_fallback from '$lib/images/svelte-welcome.png';
</script>

<svelte:head>
	<title>I'm Lukas Klier</title>
	<meta
		name="description"
		content="This is the Portfolio of Lukas Klier, your web-frontend enthusiast"
	/>
</svelte:head>

<section>
	<h1 class="text-3xl font-bold underline">Lukas Klier</h1>
	<h2 class="text-2xl font-bold">Web-Frontend Enthusiast</h2>

	<p>
		I've traveled all the way from being an electronic technition, to working on a desktop-app for
		an ECAD-Library, to work as a fullstack web developer in a software startup, to endup as a web
		frontend specialist in a software agency.
	</p>
</section>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
