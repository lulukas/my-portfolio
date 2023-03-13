<script lang="ts">
	// import Counter from './Counter.svelte';
	// import welcome from '$lib/images/svelte-welcome.webp';
	// import welcome_fallback from '$lib/images/svelte-welcome.png';
	import LL from '$lib/i18n/i18n-svelte';
</script>

<svelte:head>
	<title>I'm Lukas Klier</title>
	<meta
		name="description"
		content="This is the Portfolio of Lukas Klier, your web-frontend enthusiast" />
</svelte:head>

<section>
	<div class="mx-8 my-32 md:mx-16 lg:my-64 lg:mx-32">
		<h1 class=" text-xl font-thin lg:text-3xl">
			{$LL.HOME.MY()}
			<span class="font-bold text-orange-400">Lukas Klier </span>{$LL.HOME.IAM()}
		</h1>
		<h2 class="text-3xl font-bold lg:text-5xl">{$LL.HOME.TITLE()}</h2>
	</div>
	<div class="rounded-md bg-blue-800 p-8 text-white md:p-16 lg:p-32">
		<p class="max-w-3xl">
			{$LL.HOME.DESCRIPTION()}
		</p>
	</div>
</section>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
