<script lang="ts">
	import BackgroundGrid from './BackgroundGrid.svelte';
	import { formatDateRange, calculateDuration } from '$lib/data/experiences';

	interface Experience {
		slug: string;
		title: string;
		company: string;
		companyUrl?: string;
		type: string;
		description: string;
		startDate: string;
		endDate: string | null;
		location: string;
		locationType: string;
		technologies: string[];
	}

	interface Props {
		experience: Experience;
	}

	let { experience }: Props = $props();
</script>

<BackgroundGrid>
	<article>
		<a href="/career/{experience.slug}" class="block" title="{experience.title} at {experience.company}">
			<h3 class="text-lg md:text-xl font-medium text-white hover:text-gray-300 transition-colors">
				{experience.title}
			</h3>
		</a>
		<div class="mt-1 flex flex-wrap items-center gap-2 text-sm md:text-base text-gray-400">
			{#if experience.companyUrl}
				<a
					href={experience.companyUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="text-blue-400 hover:text-blue-300 transition-colors"
				>
					{experience.company}
				</a>
			{:else}
				<span>{experience.company}</span>
			{/if}
			<span>-</span>
			<span>{experience.type}</span>
		</div>
		<div class="mt-1 text-sm text-gray-500">
			<span>{formatDateRange(experience.startDate, experience.endDate)}</span>
			<span class="mx-2">-</span>
			<span>{calculateDuration(experience.startDate, experience.endDate)}</span>
		</div>
		<div class="mt-1 text-sm text-gray-500">
			{experience.location} - {experience.locationType}
		</div>
		<p class="mt-3 block text-base md:text-lg text-gray-200">
			{experience.description}
		</p>
		<div class="mt-3 flex flex-wrap gap-2">
			{#each experience.technologies as tech}
				<span class="bg-neutral-600 px-2 py-1 text-sm text-white">
					{tech}
				</span>
			{/each}
		</div>
		<div class="mt-3 flex items-center gap-2 md:gap-5">
			<a
				href="/career/{experience.slug}"
				title="View details about {experience.title} at {experience.company}"
				class="text-blue-400 hover:text-blue-300 transition-colors text-sm md:text-base"
			>
				View Details
			</a>
			{#if experience.companyUrl}
				-
				<a
					href={experience.companyUrl}
					target="_blank"
					rel="noopener noreferrer"
					title="View {experience.company} on LinkedIn"
					class="text-blue-400 hover:text-blue-300 transition-colors text-sm md:text-base"
				>
					Company
				</a>
			{/if}
		</div>
	</article>
</BackgroundGrid>
