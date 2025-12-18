<script lang="ts">
	import { browser } from '$app/environment';
	import BackgroundGrid from './BackgroundGrid.svelte';

	interface Project {
		title: string;
		description: string;
		tech: string[];
		github?: string;
		web?: string;
	}

	interface Props {
		project: Project;
	}

	let { project }: Props = $props();
</script>

<div class="corner-brackets group relative bg-[#131313] p-5">
	{#if browser}
		<BackgroundGrid />
	{/if}

	<article class="relative z-10">
		<h3 class="block w-full text-xl font-medium text-white">
			{project.title}
		</h3>
		<p class="mt-2 block text-lg text-gray-200">
			{project.description}
		</p>
		<div class="mt-3 flex flex-wrap gap-2">
			{#each project.tech as tech}
				<span class="bg-neutral-600 px-2 py-1 text-sm text-white">
					{tech}
				</span>
			{/each}
		</div>
		<div class="space-x-5">
			{#if project.github}
				<a
					href={project.github}
					target="_blank"
					rel="noopener noreferrer"
					class="mt-3 inline-block text-blue-400 hover:text-blue-300"
				>
					View on GitHub
				</a>
			{/if}
			{#if project.web}
				<a
					href={project.web}
					target="_blank"
					rel="noopener noreferrer"
					class="mt-3 inline-block text-blue-400 hover:text-blue-300"
				>
					View Live
				</a>
			{/if}
		</div>
	</article>
</div>
