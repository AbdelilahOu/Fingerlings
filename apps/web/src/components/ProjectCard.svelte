<script lang="ts">
	import { browser } from '$app/environment';
	import BackgroundGrid from './BackgroundGrid.svelte';

	interface Project {
		slug: string;
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
		<a href="/projects/{project.slug}" class="block">
			<h3 class="text-xl font-medium text-white hover:text-gray-300 transition-colors">
				{project.title}
			</h3>
		</a>
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
		<div class="mt-3 flex items-center gap-5">
			<a
				href="/projects/{project.slug}"
				class="text-green-400 hover:text-green-300 transition-colors"
			>
				Read More
			</a>
			{#if project.github}
				<a
					href={project.github}
					target="_blank"
					rel="noopener noreferrer"
					class="text-blue-400 hover:text-blue-300 transition-colors"
				>
					GitHub
				</a>
			{/if}
			{#if project.web}
				<a
					href={project.web}
					target="_blank"
					rel="noopener noreferrer"
					class="text-blue-400 hover:text-blue-300 transition-colors"
				>
					Live Demo
				</a>
			{/if}
		</div>
	</article>
</div>
