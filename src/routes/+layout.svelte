<script>
	import '../app.css';
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
