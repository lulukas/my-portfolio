<script lang="ts">
	const links = [
		['Home', '/'],
		['Experience', '/'],
		['Education', '/'],
		['Projects', '/'],
		['About', '/'],
	];

	let open = false;

	const handleClick = () => (open = !open);
</script>

<nav class="z-10 flex flex-col flex-wrap items-end gap-4 text-right">
	<button class="md:hidden" on:click={handleClick}>
		<svg
			class="m-2"
			width="20"
			height="17"
			viewBox="0 0 20 17"
			stroke="currentColor"
			xmlns="http://www.w3.org/2000/svg">
			<line x1="1.5" y1="1.5" x2="18.5" y2="1.5" stroke-width="3" stroke-linecap="round" />
			<line x1="1.5" y1="8.5" x2="18.5" y2="8.5" stroke-width="3" stroke-linecap="round" />
			<line x1="1.5" y1="15.5" x2="18.5" y2="15.5" stroke-width="3" stroke-linecap="round" />
		</svg>
	</button>
	{#if open}
		<ul
			class="flex border-spacing-0 flex-col flex-wrap items-end  gap-4 rounded-lg  p-4 text-right backdrop-blur-md md:hidden">
			{#each links as [title, url]}
				<li>
					<a
						href={url}
						class="rounded-lg px-3 py-2 font-medium transition-colors duration-100 hover:bg-antrazit-light hover:text-slate-100"
						>{title}</a>
				</li>
			{/each}
		</ul>
	{/if}
	<ul class="hidden flex-col flex-wrap items-end gap-4  p-4 text-right md:flex">
		{#each links as [title, url]}
			<li>
				<a
					href={url}
					class="rounded-lg px-3 py-2 text-right font-medium transition-colors duration-100 hover:bg-antrazit-light hover:text-slate-100"
					>{title}</a>
			</li>
		{/each}
	</ul>
</nav>
