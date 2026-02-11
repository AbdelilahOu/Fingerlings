<script lang="ts">
	import BackgroundGrid from '$lib/components/BackgroundGrid.svelte';
	import { formatDateRange, calculateDuration, type Experience } from '$lib/data/experiences';

	let props: { data: { experience: Experience; origin: string } } = $props();

	const experience = props.data.experience;
	const url = `${props.data.origin}/career/${experience.slug}`;
	const image = `${props.data.origin}/career/${experience.slug}/social.png`;
	const title = `${experience.title} at ${experience.company} - Abdelilah Ouaadouch`;
	const description = experience.description;
	const personId = `${props.data.origin}#person`;
	const websiteId = `${props.data.origin}#website`;
	const webpageId = `${url}#webpage`;
	const breadcrumbId = `${url}#breadcrumb`;
	const roleId = `${url}#role`;
	const normalizeDate = (value: string | null) => {
		if (!value) return undefined;
		if (/^\d{4}-\d{2}-\d{2}$/.test(value)) return value;
		if (/^\d{4}-\d{2}$/.test(value)) return `${value}-01`;
		if (/^\d{4}$/.test(value)) return `${value}-01-01`;
		const parsed = new Date(value);
		if (Number.isNaN(parsed.getTime())) return undefined;
		return parsed.toISOString().slice(0, 10);
	};
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta
		name="keywords"
		content="{experience.technologies.join(', ')}, {experience.company}, Career, Experience, Abdelilah Ouaadouch"
	/>
	<link rel="canonical" href={url} />

	<meta property="og:type" content="article" />
	<meta property="og:url" content={url} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={image} />
	<meta property="og:site_name" content="Abdelilah Ouaadouch" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content={url} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image} />
	<meta name="twitter:creator" content="@Abdelilah4dev" />

	{@html `<script type="application/ld+json">${JSON.stringify({
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "Person",
				"@id": personId,
				"name": "Abdelilah Ouaadouch",
				"alternateName": "Ar7al",
				"jobTitle": "Fullstack Developer",
				"url": `${props.data.origin}`,
				"image": `${props.data.origin}/social.png`,
				"sameAs": [
					"https://www.linkedin.com/in/ar7al/",
					"https://github.com/AbdelilahOu",
					"https://x.com/Abdelilah4dev"
				]
			},
			{
				"@type": "WebSite",
				"@id": websiteId,
				"name": "Abdelilah Ouaadouch - Fullstack Developer Portfolio",
				"url": `${props.data.origin}`,
				"publisher": {
					"@id": personId
				}
			},
			{
				"@type": "OrganizationRole",
				"@id": roleId,
				"roleName": experience.title,
				"description": experience.description,
				"startDate": normalizeDate(experience.startDate),
				...(experience.endDate ? { "endDate": normalizeDate(experience.endDate) } : {}),
				"memberOf": {
					"@type": "Organization",
					"name": experience.company,
					...(experience.companyUrl ? { "url": experience.companyUrl } : {})
				},
				"location": {
					"@type": "Place",
					"address": experience.location
				}
			},
			{
				"@type": "WebPage",
				"@id": webpageId,
				"name": title,
				"description": description,
				"url": url,
				"isPartOf": {
					"@id": websiteId
				},
				"about": {
					"@id": personId
				},
				"mainEntity": {
					"@id": roleId
				},
				"breadcrumb": {
					"@id": breadcrumbId
				},
				"primaryImageOfPage": {
					"@type": "ImageObject",
					"url": image
				}
			},
			{
				"@type": "BreadcrumbList",
				"@id": breadcrumbId,
				"itemListElement": [
					{
						"@type": "ListItem",
						"position": 1,
						"name": "Home",
						"item": `${props.data.origin}`
					},
					{
						"@type": "ListItem",
						"position": 2,
						"name": "Career",
						"item": `${props.data.origin}/career`
					},
					{
						"@type": "ListItem",
						"position": 3,
						"name": `${experience.title} at ${experience.company}`,
						"item": url
					}
				]
			}
		]
	})}</script>`}
</svelte:head>

<div class="min-h-screen w-screen bg-[#0d0d0d] px-4 pb-8">
	<div class="m-auto w-full max-w-3xl">
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

		{#if experience.companyUrl}
			<section class="flex gap-4">
				<a
					href={experience.companyUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="corner-brackets bg-[#101010] px-4 py-2 text-blue-400 transition-colors hover:text-blue-300"
				>
					View Company on LinkedIn
				</a>
			</section>
		{/if}

		<section class="space-y-4">
			<h2 class="text-xl md:text-2xl font-bold text-white">
				<span>$</span> Overview
			</h2>
			<BackgroundGrid>
				<div class="space-y-4 text-gray-200">
					{#each experience.longDescription.split('\n\n') as paragraph}
						<p>{paragraph}</p>
					{/each}
				</div>
			</BackgroundGrid>
		</section>

		<section class="space-y-4">
			<h2 class="text-xl md:text-2xl font-bold text-white">
				<span>$</span> Highlights
			</h2>
			<BackgroundGrid>
				<ul class="space-y-2 text-gray-200">
					{#each experience.highlights as highlight}
						<li class="flex items-start gap-2">
							<span class="text-blue-400">-</span>
							<span>{highlight}</span>
						</li>
					{/each}
				</ul>
			</BackgroundGrid>
		</section>

		<section class="space-y-4">
			<h2 class="text-xl md:text-2xl font-bold text-white">
				<span>$</span> Tech Stack
			</h2>
			<BackgroundGrid>
				<div class="flex flex-wrap gap-3">
					{#each experience.technologies as tech}
						<span class="border border-neutral-600 px-3 py-1 text-gray-300">{tech}</span>
					{/each}
				</div>
			</BackgroundGrid>
		</section>

		<footer class="space-y-6 border-t border-neutral-800 pt-8">
			<div class="corner-brackets bg-[#101010] p-5">
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
