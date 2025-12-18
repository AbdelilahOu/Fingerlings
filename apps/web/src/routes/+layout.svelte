<script lang="ts">
	import { QueryClientProvider } from '@tanstack/svelte-query';
	import { SvelteQueryDevtools } from '@tanstack/svelte-query-devtools';
	import '../app.css';
	import { queryClient } from '$lib/orpc';

	let { children } = $props();
</script>

<QueryClientProvider client={queryClient}>
	<main class="min-h-svh">
		{@render children()}
	</main>
	<SvelteQueryDevtools />
</QueryClientProvider>
