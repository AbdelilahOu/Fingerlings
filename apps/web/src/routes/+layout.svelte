<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<main class="min-h-svh">
	{@render children()}
</main>
