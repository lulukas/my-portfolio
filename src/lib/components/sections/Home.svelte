<script lang="ts">
	import LL from '$lib/i18n/i18n-svelte';
	import imgOfMe from '$lib/assets/Me1.png';
</script>

<section class="flex h-screen w-screen flex-col">
	<div class="h-[28rem] lg:h-[32rem]" />
	<div
		class="relative flex-grow rounded-[2rem] rounded-b-none bg-gradient-to-br from-antrazit to-antrazit-light p-8 pt-32 text-white lg:p-32">
		<p class="max-w-3xl">
			{$LL.HOME.DESCRIPTION()}
		</p>
		<img
			class="absolute top-[-225px] right-[50vw] z-30 w-[200px] translate-x-[50%] object-contain lg:right-[27vw] lg:top-[-360px] lg:w-[310px] 2xl:top-[-480px] 2xl:w-[420px]"
			src={imgOfMe}
			alt="Lukas Klier" />
	</div>
</section>
