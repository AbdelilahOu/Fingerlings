<script lang="ts">
	import type { Project } from '$lib/data/projects';
	import ProjectCard from '$lib/components/ProjectCard.svelte';

	let props: { data: { projects: Project[]; url: string } } = $props();

	const title = 'Projects - Abdelilah Ouaadouch';
	const description =
		'Portfolio of software projects including desktop apps, web applications, and developer tools. Built with Go, Rust, TypeScript, and modern frameworks.';
	const url = `https://personal-website.ar7al.workers.dev/projects`;
	const image = `https://personal-website.ar7al.workers.dev/og/image/projects/og.png`;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta
		name="keywords"
		content="Go, Golang, Rust, TypeScript, Projects, Portfolio, Web Development, Desktop Apps, Developer Tools"
	/>
	<link rel="canonical" href={url} />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
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
	{@html `<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "CollectionPage",
		"name": "Abdelilah Ouaadouch's Projects",
		"description": "${description}",
		"url": "${url}",
		"author": {
			"@type": "Person",
			"name": "Abdelilah Ouaadouch",
			"url": "https://ar7al.com"
		}
	}
	</script>`}
</svelte:head>

<!-- Projects Header -->
<header class="space-y-4">
	<h1 class="font-display text-3xl font-semibold text-white md:text-4xl">
		Projects
		<span class="block text-xl font-normal normal-case text-gray-300 md:text-2xl">
			Software I've Built
		</span>
	</h1>
	<p class="text-base text-gray-300 md:text-lg">
		A collection of projects spanning desktop applications, web platforms, and developer tools.
		Built with Go, Rust, TypeScript, and modern frameworks.
	</p>
</header>

<!-- Projects List -->
<section class="space-y-4">
	<h2 class="text-xl font-bold text-white md:text-2xl">
		<span>$</span> ls ./projects
	</h2>

	{#if props.data.projects.length > 0}
		<div class="space-y-4">
			{#each props.data.projects as project}
				<ProjectCard {project} />
			{/each}
		</div>

		<div class="corner-brackets bg-[#131313] p-5 text-center">
			<p class="text-gray-400">
				Want to see more? Check out my
				<a
					href="https://github.com/AbdelilahOu"
					target="_blank"
					rel="noopener noreferrer"
					class="text-blue-400 hover:text-blue-300"
				>
					GitHub
				</a>
				for additional projects and experiments.
			</p>
		</div>
	{:else}
		<div class="corner-brackets bg-[#131313] p-8 text-center">
			<p class="text-gray-400">
				No projects yet. Check back soon for new additions.
			</p>
			<p class="mt-2 text-sm text-gray-500">
				In the meantime, check out my
				<a href="https://github.com/AbdelilahOu" class="text-blue-400 hover:text-blue-300">
					GitHub
				</a>
				for code and projects.
			</p>
		</div>
	{/if}
</section>

<!-- Tech Stack -->
<section class="space-y-4">
	<h2 class="text-xl font-bold text-white md:text-2xl">
		<span>$</span> cat ./tech-stack
	</h2>
	<div class="corner-brackets bg-[#131313] p-5">
		<div class="flex flex-wrap gap-3">
			{#each ['Go/Golang', 'Rust', 'TypeScript', 'Next.js', 'Nuxt', 'Tauri', 'PostgreSQL', 'SQLite'] as tech}
				<span class="border border-neutral-600 px-3 py-1 text-gray-300">{tech}</span>
			{/each}
		</div>
	</div>
</section>

<!-- Footer -->
<footer class="border-t border-neutral-800 pt-8">
	<a
		href="/"
		class="inline-flex items-center gap-2 text-gray-400 transition-colors hover:text-white"
	>
		<span>{"<-"}</span>
		<span>Back to Home</span>
	</a>
</footer>
