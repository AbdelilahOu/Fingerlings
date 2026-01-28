<script lang="ts">
	import BackgroundGrid from './BackgroundGrid.svelte';

	interface Props {
		skills: string[];
	}

	let { skills }: Props = $props();
</script>

<BackgroundGrid>
	<div class="flex flex-wrap gap-5 text-sm text-white md:text-base">
		{#each skills as skill}
			<span class="w-full flex-1 whitespace-nowrap border border-[gray] bg-[#131313] px-2 py-1 text-center text-gray-300">
				- {skill} -
			</span>
		{/each}
	</div>
</BackgroundGrid>
