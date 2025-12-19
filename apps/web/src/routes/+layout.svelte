<script lang="ts">
	import { QueryClientProvider } from '@tanstack/svelte-query';
	import '../app.css';
	import { queryClient } from '$lib/orpc';

	let { children } = $props();
	export const ssr = true;
</script>

<QueryClientProvider client={queryClient}>
	<main class="min-h-svh">
		{@render children()}
	</main>
</QueryClientProvider>
