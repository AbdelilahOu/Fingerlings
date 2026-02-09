<script lang="ts">
	import BackgroundGrid from '$lib/components/BackgroundGrid.svelte';

	let props: { data: { project: any; origin: string } } = $props();

	const project = props.data.project;
	const url = `${props.data.origin}/projects/${props.data.project.slug}`;
	const image = `${props.data.origin}/projects/${props.data.project.slug}/social.png`;
	const title = `${props.data.project.title} - Abdelilah Ouaadouch`;
	const description = props.data.project.description;
	const personId = `${props.data.origin}/ar7al#person`;
	const websiteId = `${props.data.origin}/ar7al#website`;
	const webpageId = `${url}#webpage`;
	const breadcrumbId = `${url}#breadcrumb`;
	const projectId = `${url}#software`;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta
		name="keywords"
		content="{project.tech.join(', ')}, Portfolio, Project, Abdelilah Ouaadouch"
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
				"url": `${props.data.origin}/ar7al`,
				"image": `${props.data.origin}/ar7al/social.png`,
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
				"url": `${props.data.origin}/ar7al`,
				"publisher": {
					"@id": personId
				}
			},
			{
				"@type": "SoftwareApplication",
				"@id": projectId,
				"name": project.title,
				"description": project.description,
				"applicationCategory": "DeveloperApplication",
				"operatingSystem": "Cross-platform",
				"url": url,
				"author": {
					"@id": personId
				},
				"creator": {
					"@id": personId
				},
				"dateCreated": project.createdAt,
				"softwareRequirements": project.tech,
				...(project.github ? { "codeRepository": project.github } : {}),
				...(project.web ? { "sameAs": [project.web] } : {}),
				"offers": {
					"@type": "Offer",
					"price": "0",
					"priceCurrency": "USD"
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
					"@id": projectId
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
						"item": `${props.data.origin}/ar7al`
					},
					{
						"@type": "ListItem",
						"position": 2,
						"name": "Projects",
						"item": `${props.data.origin}/projects`
					},
					{
						"@type": "ListItem",
						"position": 3,
						"name": project.title,
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
				href="/projects"
				class="inline-flex items-center gap-2 text-gray-400 transition-colors hover:text-white"
			>
				<span>{"<-"}</span>
				<span>Back to Projects</span>
			</a>
		</nav>

		<div class="space-y-8">

		<header class="space-y-4">
			<h1 class="font-display text-3xl font-semibold text-white md:text-4xl">
				{project.title}
			</h1>
			<p class="text-base md:text-lg text-gray-300">
				{project.description}
			</p>
			<div class="flex flex-wrap gap-2">
				{#each project.tech as tech}
					<span class="bg-neutral-700 px-3 py-1 text-sm text-white">{tech}</span>
				{/each}
			</div>
		</header>

		{#if project.github || project.web}
			<section class="flex gap-4">
				{#if project.github}
					<a
						href={project.github}
						target="_blank"
						rel="noopener noreferrer"
						class="corner-brackets bg-[#101010] px-4 py-2 text-blue-400 transition-colors hover:text-blue-300"
					>
						View on GitHub
					</a>
				{/if}
				{#if project.web}
					<a
						href={project.web}
						target="_blank"
						rel="noopener noreferrer"
						class="corner-brackets bg-[#101010] px-4 py-2 text-blue-400 transition-colors hover:text-blue-300"
					>
						View Live Demo
					</a>
				{/if}
			</section>
		{/if}

		<section class="space-y-4">
			<h2 class="text-xl md:text-2xl font-bold text-white">
				<span>$</span> cat ./about
			</h2>
			<BackgroundGrid>
				<div class="space-y-4 text-gray-200">
					{#each project.longDescription.split('\n\n') as paragraph}
						<p>{paragraph}</p>
					{/each}
				</div>
			</BackgroundGrid>
		</section>

		<section class="space-y-4">
			<h2 class="text-xl md:text-2xl font-bold text-white">
				<span>$</span> ls ./features
			</h2>
			<BackgroundGrid>
				<ul class="space-y-2 text-gray-200">
					{#each project.features as feature}
						<li class="flex items-start gap-2">
							<span class="text-blue-400">-</span>
							<span>{feature}</span>
						</li>
					{/each}
				</ul>
			</BackgroundGrid>
		</section>

		<section class="space-y-4">
			<h2 class="text-xl md:text-2xl font-bold text-white">
				<span>$</span> git log --challenges
			</h2>
			<BackgroundGrid>
				<ul class="space-y-2 text-gray-200">
					{#each project.challenges as challenge}
						<li class="flex items-start gap-2">
							<span class="text-yellow-400">*</span>
							<span>{challenge}</span>
						</li>
					{/each}
				</ul>
			</BackgroundGrid>
		</section>

		<footer class="space-y-6 border-t border-neutral-800 pt-8">
			<div class="corner-brackets bg-[#101010] p-5">
				<p class="text-gray-300">
					Thanks for reading! If you found this helpful, feel free to share it or connect with me
					on
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
