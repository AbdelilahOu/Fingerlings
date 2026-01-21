<script lang="ts">
	import { browser } from '$app/environment';
	import BackgroundGrid from '$lib/components/BackgroundGrid.svelte';

	let { data } = $props();

	let project = $derived(data.project);
	let url = $derived(`https://ar7al.com/projects/${project.slug}`);
	let title = $derived(`${project.title} - Abdelilah Ouaadouch`);
	let description = $derived(project.description);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta
		name="keywords"
		content="{project.tech.join(', ')}, Portfolio, Project, Abdelilah Ouaadouch"
	/>
	<link rel="canonical" href={url} />

	<!-- Open Graph -->
	<meta property="og:type" content="article" />
	<meta property="og:url" content={url} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content="/og.png" />
	<meta property="og:site_name" content="Abdelilah Ouaadouch" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content={url} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content="/og.png" />
	<meta name="twitter:creator" content="@Abdelilah4dev" />

	<!-- JSON-LD Structured Data -->
	{@html `<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "SoftwareApplication",
		"name": "${project.title}",
		"description": "${project.description}",
		"applicationCategory": "DeveloperApplication",
		"operatingSystem": "Cross-platform",
		"author": {
			"@type": "Person",
			"name": "Abdelilah Ouaadouch",
			"url": "https://ar7al.com"
		},
		"offers": {
			"@type": "Offer",
			"price": "0",
			"priceCurrency": "USD"
		}${project.github ? `,
		"downloadUrl": "${project.github}"` : ''}${project.web ? `,
		"url": "${project.web}"` : ''}
	}
	</script>`}
</svelte:head>

<div class="min-h-screen w-screen bg-[#0d0d0d] px-4 py-8">
	<div class="m-auto w-full max-w-3xl space-y-8">
		<!-- Back Navigation -->
		<nav>
			<a
				href="/"
				class="inline-flex items-center gap-2 text-gray-400 transition-colors hover:text-white"
			>
				<span>{"<"}</span>
				<span>Back to Home</span>
			</a>
		</nav>

		<!-- Project Header -->
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

		<!-- Project Links -->
		{#if project.github || project.web}
			<section class="flex gap-4">
				{#if project.github}
					<a
						href={project.github}
						target="_blank"
						rel="noopener noreferrer"
						class="corner-brackets bg-[#131313] px-4 py-2 text-blue-400 transition-colors hover:text-blue-300"
					>
						View on GitHub
					</a>
				{/if}
				{#if project.web}
					<a
						href={project.web}
						target="_blank"
						rel="noopener noreferrer"
						class="corner-brackets bg-[#131313] px-4 py-2 text-blue-400 transition-colors hover:text-blue-300"
					>
						View Live Demo
					</a>
				{/if}
			</section>
		{/if}

		<!-- About Section -->
		<section class="space-y-4">
			<h2 class="text-xl md:text-2xl font-bold text-white">
				<span>$</span> cat ./about
			</h2>
			<div class="corner-brackets group relative bg-[#131313] p-5">
				{#if browser}
					<BackgroundGrid />
				{/if}
				<div class="relative z-10 space-y-4 text-gray-200">
					{#each project.longDescription.split('\n\n') as paragraph}
						<p>{paragraph}</p>
					{/each}
				</div>
			</div>
		</section>

		<!-- Features Section -->
		<section class="space-y-4">
			<h2 class="text-xl md:text-2xl font-bold text-white">
				<span>$</span> ls ./features
			</h2>
			<div class="corner-brackets bg-[#131313] p-5">
				<ul class="space-y-2 text-gray-200">
					{#each project.features as feature}
						<li class="flex items-start gap-2">
							<span class="text-green-400">-</span>
							<span>{feature}</span>
						</li>
					{/each}
				</ul>
			</div>
		</section>

		<!-- Challenges Section -->
		<section class="space-y-4">
			<h2 class="text-xl md:text-2xl font-bold text-white">
				<span>$</span> git log --challenges
			</h2>
			<div class="corner-brackets bg-[#131313] p-5">
				<ul class="space-y-2 text-gray-200">
					{#each project.challenges as challenge}
						<li class="flex items-start gap-2">
							<span class="text-yellow-400">*</span>
							<span>{challenge}</span>
						</li>
					{/each}
				</ul>
			</div>
		</section>

		<!-- Footer -->
		<footer class="border-t border-neutral-800 pt-8">
			<a
				href="/"
				class="inline-flex items-center gap-2 text-gray-400 transition-colors hover:text-white"
			>
				<span>{"<"}</span>
				<span>Back to all projects</span>
			</a>
		</footer>
	</div>
</div>
