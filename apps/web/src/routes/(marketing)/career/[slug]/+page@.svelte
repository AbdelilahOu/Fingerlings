<script lang="ts">
	import BackgroundGrid from '$lib/components/BackgroundGrid.svelte';
	import { formatDateRange, calculateDuration, type Experience } from '$lib/data/experiences';

	let props: { data: { experience: Experience; origin: string } } = $props();

	const experience = props.data.experience;
	const url = `${props.data.origin}/career/${experience.slug}`;
	const image = `${props.data.origin}/career/${experience.slug}/social.png`;
	const title = `${experience.title} at ${experience.company} - Abdelilah Ouaadouch`;
	const description = experience.description;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta
		name="keywords"
		content="{experience.technologies.join(', ')}, {experience.company}, Career, Experience, Abdelilah Ouaadouch"
	/>
	<link rel="canonical" href={url} />

	<!-- Open Graph -->
	<meta property="og:type" content="article" />
	<meta property="og:url" content={url} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={image} />
	<meta property="og:site_name" content="Abdelilah Ouaadouch" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content={url} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image} />
	<meta name="twitter:creator" content="@Abdelilah4dev" />

	<!-- JSON-LD Structured Data -->
	{@html `<script type="application/ld+json">${JSON.stringify({
		"@context": "https://schema.org",
		"@type": "JobPosting",
		"title": experience.title,
		"description": experience.description,
		"employmentType": experience.type === "Full-time" ? "FULL_TIME" : experience.type === "Part-time" ? "PART_TIME" : experience.type === "Internship" ? "INTERN" : "CONTRACTOR",
		"hiringOrganization": {
			"@type": "Organization",
			"name": experience.company,
			...(experience.companyUrl && { "url": experience.companyUrl })
		},
		"jobLocation": {
			"@type": "Place",
			"address": experience.location
		},
		"datePosted": experience.startDate,
		...(experience.endDate && { "validThrough": experience.endDate })
	})}</script>`}
</svelte:head>

<div class="min-h-screen w-screen bg-[#0d0d0d] px-4 pb-8">
	<div class="m-auto w-full max-w-3xl">
		<!-- Back Navigation -->
		<nav class="flex items-center gap-6 text-sm md:text-base py-6 bg-[#0d0d0d] sticky top-0 z-50">
			<a
				href="/career"
				class="inline-flex items-center gap-2 text-gray-400 transition-colors hover:text-white"
			>
				<span>{"<-"}</span>
				<span>Back to Career</span>
			</a>
		</nav>

		<div class="space-y-8">

		<!-- Experience Header -->
		<header class="space-y-4">
			<h1 class="font-display text-3xl font-semibold text-white md:text-4xl">
				{experience.title}
			</h1>
			<div class="flex flex-wrap items-center gap-2 text-lg text-gray-300">
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
			<div class="text-gray-400">
				<span>{formatDateRange(experience.startDate, experience.endDate)}</span>
				<span class="mx-2">-</span>
				<span>{calculateDuration(experience.startDate, experience.endDate)}</span>
			</div>
			<div class="text-gray-400">
				{experience.location} - {experience.locationType}
			</div>
			<div class="flex flex-wrap gap-2">
				{#each experience.technologies as tech}
					<span class="bg-neutral-700 px-3 py-1 text-sm text-white">{tech}</span>
				{/each}
			</div>
		</header>

		<!-- Company Link -->
		{#if experience.companyUrl}
			<section class="flex gap-4">
				<a
					href={experience.companyUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="corner-brackets bg-[#131313] px-4 py-2 text-blue-400 transition-colors hover:text-blue-300"
				>
					View Company on LinkedIn
				</a>
			</section>
		{/if}

		<!-- About Section -->
		<section class="space-y-4">
			<h2 class="text-xl md:text-2xl font-bold text-white">
				<span>$</span> cat ./about
			</h2>
			<div class="corner-brackets group relative bg-[#131313] p-5">
				<BackgroundGrid />
				<div class="relative z-10 space-y-4 text-gray-200">
					{#each experience.longDescription.split('\n\n') as paragraph}
						<p>{paragraph}</p>
					{/each}
				</div>
			</div>
		</section>

		<!-- Highlights Section -->
		<section class="space-y-4">
			<h2 class="text-xl md:text-2xl font-bold text-white">
				<span>$</span> ls ./highlights
			</h2>
			<div class="corner-brackets group relative bg-[#131313] p-5">
				<BackgroundGrid />
				<ul class="space-y-2 relative text-gray-200 z-10">
					{#each experience.highlights as highlight}
						<li class="flex items-start gap-2">
							<span class="text-blue-400">-</span>
							<span>{highlight}</span>
						</li>
					{/each}
				</ul>
			</div>
		</section>

		<!-- Technologies Section -->
		<section class="space-y-4">
			<h2 class="text-xl md:text-2xl font-bold text-white">
				<span>$</span> cat ./tech-stack
			</h2>
			<div class="corner-brackets group relative bg-[#131313] p-5">
				<BackgroundGrid />
				<div class="relative z-10 flex flex-wrap gap-3">
					{#each experience.technologies as tech}
						<span class="border border-neutral-600 px-3 py-1 text-gray-300">{tech}</span>
					{/each}
				</div>
			</div>
		</section>

		<!-- Footer -->
		<footer class="space-y-6 border-t border-neutral-800 pt-8">
			<div class="corner-brackets bg-[#131313] p-5">
				<p class="text-gray-300">
					Want to learn more about my experience? Connect with me on
					<a
						href="https://www.linkedin.com/in/ar7al"
						target="_blank"
						rel="noopener noreferrer"
						class="text-blue-400 hover:text-blue-300"
					>
						LinkedIn
					</a>
					or
					<a
						href="https://x.com/Abdelilah4dev"
						target="_blank"
						rel="noopener noreferrer"
						class="text-blue-400 hover:text-blue-300"
					>
						Twitter
					</a>.
				</p>
			</div>
		</footer>
		</div>
	</div>
</div>
