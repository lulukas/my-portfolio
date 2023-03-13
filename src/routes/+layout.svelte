<script lang="ts">
	import '../app.css';
	import { setLocale } from '$lib/i18n/i18n-svelte';
	import type { LayoutData } from './$types.js';

	export let data: LayoutData;
	setLocale(data.locale);
</script>

<div class="flex h-screen flex-col">
	<header>
		<nav class="flex gap-8 p-4 lg:absolute lg:right-0 lg:flex-col lg:gap-4 lg:p-24">
			{#each [['Home', '/'], ['CV', '/'], ['Projects', '/'], ['About', '/']] as [title, url]}
				<a
					href={url}
					class="rounded-lg px-3 py-2 text-right font-medium text-slate-700 hover:bg-slate-900 hover:text-slate-100"
					>{title}</a>
			{/each}
		</nav>
	</header>

	<main class="flex-grow">
		<slot />
	</main>

	<footer class="w-full bg-gray-900 p-4 text-white">
		<p>made with ❤ by me</p>
	</footer>
</div>
