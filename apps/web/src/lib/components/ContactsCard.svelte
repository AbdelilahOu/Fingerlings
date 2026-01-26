<script lang="ts">
	import { browser } from '$app/environment';
	import BackgroundGrid from '$lib/components/BackgroundGrid.svelte';
</script>

<div class="corner-brackets group relative w-full bg-[#131313] text-white">
	{#if browser}
		<BackgroundGrid />
	{/if}
	<div class="relative z-10 space-y-2 p-5">
		<a
			href="mailto:abdelilah4dev@gmail.com"
			title="abdelilah4dev@gmail.com"
			class="flex justify-between border-white text-sm hover:border-l hover:pl-2 md:text-base"
			target="_blank"
			rel="noopener noreferrer"
		>
			<span class="underline underline-offset-2">abdelilah4dev@gmail.com</span>
			<span class="inline-block">Email</span>
		</a>
		<a
			href="https://www.linkedin.com/in/ar7al/"
			title="Abdelilah ouaadouch"
			class="flex justify-between border-white text-sm hover:border-l hover:pl-2 md:text-base"
			target="_blank"
			rel="noopener noreferrer"
		>
			<span class="underline underline-offset-2">Abdelilah ouaadouch</span>
			<span class="inline-block">Linkedin</span>
		</a>
		<a
			href="https://github.com/AbdelilahOu"
			title="@AbdelilahOu"
			class="flex justify-between border-white text-sm hover:border-l hover:pl-2 md:text-base"
			target="_blank"
			rel="noopener noreferrer"
		>
			<span class="underline underline-offset-2">@AbdelilahOu</span>
			<span class="inline-block">Github</span>
		</a>
		<a
			href="https://x.com/Abdelilah4dev"
			title="@Abdelilah4dev"
			class="flex justify-between border-white text-sm hover:border-l hover:pl-2 md:text-base"
			target="_blank"
			rel="noopener noreferrer"
		>
			<span class="underline underline-offset-2">@Abdelilah4dev</span>
			<span class="inline-block">Twitter/x</span>
		</a>
	</div>
</div>
