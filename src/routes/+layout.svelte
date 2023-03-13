<script lang="ts">
	import '../app.css';
	import { setLocale } from '$lib/i18n/i18n-svelte';
	import type { LayoutData } from './$types.js';

	export let data: LayoutData;
	setLocale(data.locale);
</script>

<div
	class="flex h-screen flex-col bg-gradient-to-br from-blue-100 to-yellow-100 text-antrazit-dark">
	<header>
		<nav
			class="flex flex-wrap gap-4 p-4 md:gap-8 lg:absolute lg:right-0 lg:flex-col lg:gap-4 lg:p-24">
			{#each [['Home', '/'], ['CV', '/'], ['Projects', '/'], ['About', '/']] as [title, url]}
				<a
					href={url}
					class="rounded-lg px-3 py-2 text-right font-medium hover:bg-antrazit-light hover:text-slate-100"
					>{title}</a>
			{/each}
		</nav>
	</header>

	<main class="flex flex-grow flex-col">
		<slot />
	</main>

	<footer class="w-full bg-antrazit-dark p-4 px-16 text-right text-slate-100">
		<p>made with ❤ by me</p>
	</footer>
</div>
