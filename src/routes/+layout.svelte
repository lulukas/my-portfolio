<script lang="ts">
	import '../app.css';
	import LL from '$lib/i18n/i18n-svelte';
	import ChangeLanguage from '$lib/components/ChangeLanguage.svelte';
</script>

<div class="inline-block w-screen bg-gradient-to-br from-blue-100 to-yellow-100 text-antrazit-dark">
	<header>
		<div class="fixed inset-0 mx-8 mb-64 mt-16 lg:my-64 lg:mx-32 lg:max-w-[55vw]">
			<h1 class=" text-xl font-extralight lg:text-3xl">
				{$LL.HOME.MY()}
				<span class="font-bold text-orange">Lukas Klier </span>
				{$LL.HOME.IAM()}
			</h1>
			<h2 class="text-3xl font-bold lg:text-5xl">{$LL.HOME.TITLE()}</h2>
		</div>

		<nav
			class="fixed top-0 flex flex-wrap gap-4 p-4 md:gap-8 lg:right-0 lg:flex-col lg:gap-4 lg:p-24">
			{#each [['Home', '/'], ['Experience', '/'], ['Education', '/'], ['Projects', '/'], ['About', '/']] as [title, url]}
				<a
					href={url}
					class="rounded-lg px-3 py-2 text-right font-medium transition-colors duration-100 hover:bg-antrazit-light hover:text-slate-100"
					>{title}</a>
			{/each}
		</nav>
	</header>

	<main>
		<slot />
	</main>

	<footer class="flex w-full justify-between bg-antrazit-dark p-4 px-16 text-right text-slate-100">
		<p>made with ❤ by me</p>
		<ChangeLanguage />
	</footer>
</div>
