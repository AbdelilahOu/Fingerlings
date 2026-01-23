<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';

	let { children } = $props();
</script>

<div class="min-h-screen w-screen bg-[#0d0d0d] px-4 py-8">
	<div class="m-auto w-full max-w-3xl space-y-8">
		<Nav />
		{@render children()}
	</div>
</div>
