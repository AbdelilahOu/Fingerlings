<script lang="ts">
	import { page } from '$app/state';
</script>

<svelte:head>
	<title>{page.status} - Abdelilah Ouaadouch</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<div class="flex min-h-screen w-screen flex-col items-center justify-center bg-[#0d0d0d] px-4">
	<div class="m-auto w-full max-w-lg space-y-6 text-center">
		<div class="corner-brackets bg-[#131313] p-8">
			<h1 class="font-display text-6xl font-bold text-white md:text-8xl">
				{page.status}
			</h1>
			<p class="mt-4 text-lg text-gray-300 md:text-xl">
				{#if page.status === 404}
					Page not found
				{:else if page.status === 500}
					Internal server error
				{:else}
					{page.error?.message ?? 'Something went wrong'}
				{/if}
			</p>
		</div>

		<div class="space-y-2 text-gray-400">
			<p class="font-mono text-sm">
				<span class="text-red-400">$</span> cat ./error.log
			</p>
			<p class="font-mono text-xs text-gray-500">
				{#if page.status === 404}
					Error: ENOENT - no such file or directory
				{:else}
					Error: {page.error?.message ?? 'Unknown error'}
				{/if}
			</p>
		</div>

		<a
			href="/ar7al"
			class="corner-brackets inline-block bg-[#131313] px-6 py-3 text-white transition-colors hover:bg-[#1a1a1a]"
		>
			<span class="text-green-400">$</span> cd ~
		</a>
	</div>
</div>
