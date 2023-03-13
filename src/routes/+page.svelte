<script lang="ts">
	// import Counter from './Counter.svelte';
	// import welcome from '$lib/images/svelte-welcome.webp';
	// import welcome_fallback from '$lib/images/svelte-welcome.png';
	import LL from '$lib/i18n/i18n-svelte';
	import imgOfMe from '$lib/assets/Me1.png';
</script>

<svelte:head>
	<title>I'm Lukas Klier</title>
	<meta
		name="description"
		content="This is the Portfolio of Lukas Klier, your web-frontend enthusiast" />
</svelte:head>

<section class="flex flex-grow flex-col">
	<div class="mx-8 mb-64 mt-8 lg:my-64 lg:mx-32 lg:max-w-[55vw]">
		<h1 class=" text-xl font-extralight lg:text-3xl">
			{$LL.HOME.MY()}
			<span class="font-bold text-orange">Lukas Klier </span>{$LL.HOME.IAM()}
		</h1>
		<h2 class="text-3xl font-bold lg:text-5xl">{$LL.HOME.TITLE()}</h2>
	</div>
	<div
		class="relative flex-grow rounded-[2rem] rounded-b-none bg-gradient-to-br from-antrazit to-antrazit-light p-8 pt-32 text-white lg:p-32">
		<p class="max-w-3xl">
			{$LL.HOME.DESCRIPTION()}
		</p>
		<img
			class="absolute top-[-225px] right-[50vw] w-[200px] translate-x-[50%] object-contain lg:right-[25vw] lg:top-[-360px] lg:w-[310px] 2xl:top-[-120%] 2xl:w-[420px]"
			src={imgOfMe}
			alt="Lukas Klier" />
	</div>
</section>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
