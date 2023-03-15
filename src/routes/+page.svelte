<script lang="ts">
	import Education from '$lib/components/sections/Education.svelte';
	import Projects from '$lib/components/sections/Projects.svelte';
	import Experience from '$lib/components/sections/Experience.svelte';
	import Home from '$lib/components/sections/Home.svelte';
</script>

<svelte:head>
	<title>I'm Lukas Klier</title>
	<meta
		name="description"
		content="This is the Portfolio of Lukas Klier, your web-frontend enthusiast" />
</svelte:head>

<Home />
<Experience />
<Education />
<Projects />

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
