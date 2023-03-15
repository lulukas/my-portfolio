<script lang="ts">
	import '../app.css';
	import LL from '$lib/i18n/i18n-svelte';
	import ChangeLanguage from '$lib/components/ChangeLanguage.svelte';
	import Navigation from '$lib/components/Navigation.svelte';
</script>

<div class="inline-block w-screen bg-gradient-to-br from-blue-100 to-yellow-100 text-antrazit-dark">
	<header>
		<div class="fixed inset-0 z-0 mx-8 mb-64 mt-20 lg:my-64 lg:mx-32 lg:max-w-[55vw]">
			<h1 class=" text-xl font-extralight lg:text-3xl">
				{$LL.HOME.MY()}
				<span class="font-bold text-orange">Lukas Klier </span>
				{$LL.HOME.IAM()}
			</h1>
			<h2 class="text-3xl font-bold lg:text-5xl">{$LL.HOME.TITLE()}</h2>
		</div>
		<div class="fixed top-0 right-0 z-20 p-8 backdrop-blur-md lg:top-32 lg:right-16">
			<Navigation />
		</div>
	</header>

	<main class="relative">
		<slot />
	</main>

	<footer class="flex w-full justify-between bg-antrazit-dark p-4 px-16 text-right text-slate-100">
		<p>made with ❤ by me</p>
		<ChangeLanguage />
	</footer>
</div>
