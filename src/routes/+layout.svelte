<script lang="ts">
	import '../app.css';
	import { setLocale } from '$lib/i18n/i18n-svelte';
	import type { LayoutData } from './$types.js';

	export let data: LayoutData;
	setLocale(data.locale);
</script>

<div class="app">
	<header>
		<ul class="flex gap-8 py-8  ">
			<a href="/"> <li>Home</li></a>
			<a href="/"> <li>CV</li></a>
			<a href="/"> <li>Projects</li></a>
			<a href="/"> <li>About</li></a>
		</ul>
	</header>

	<main>
		<slot />
	</main>

	<footer class="">
		<p>made with ❤ by me</p>
	</footer>
</div>
