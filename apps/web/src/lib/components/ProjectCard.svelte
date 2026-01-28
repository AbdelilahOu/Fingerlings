<script lang="ts">
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

<BackgroundGrid>
	<article>
		<a href="/projects/{project.slug}" class="block" title="{project.title} - {project.description}">
			<h3 class="text-lg md:text-xl font-medium text-white hover:text-gray-300 transition-colors">
				{project.title}
			</h3>
		</a>
		<p class="mt-2 block text-base md:text-lg text-gray-200">
			{project.description}
		</p>
		<div class="mt-3 flex flex-wrap gap-2">
			{#each project.tech as tech}
				<span class="bg-neutral-600 px-2 py-1 text-sm text-white">
					{tech}
				</span>
			{/each}
		</div>
		<div class="mt-3 flex items-center gap-2 md:gap-5">
			<a
				href="/projects/{project.slug}"
				title="{project.title} project overview"
				class="text-blue-400 hover:text-blue-300 transition-colors text-sm md:text-base"
			>
				Overview
			</a>
			{#if project.github}
			-
				<a
					href={project.github}
					target="_blank"
					rel="noopener noreferrer"
					title="View {project.title} source code on GitHub"
					class="text-blue-400 hover:text-blue-300 transition-colors text-sm md:text-base"
				>
					GitHub
				</a>
			{/if}
			{#if project.web}
			-
				<a
					href={project.web}
					target="_blank"
					rel="noopener noreferrer"
					title="View {project.title} live demo"
					class="text-blue-400 hover:text-blue-300 transition-colors text-sm md:text-base"
				>
					Live Demo
				</a>
			{/if}
		</div>
	</article>
</BackgroundGrid>
