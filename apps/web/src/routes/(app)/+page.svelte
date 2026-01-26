<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/state';
	import type { Project } from '$lib/data/projects';
	import type { ContributionData, Post } from '$lib/types';
	import BackgroundGrid from '$lib/components/BackgroundGrid.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import GithubGraph from '$lib/components/GithubGraph.svelte';
	import BlogCard from '$lib/components/BlogCard.svelte';


	let {
		data
	}: {
		data: {
			featuredProjects: Project[];
			latestPosts: Post[];
			githubContributions: Promise<ContributionData | null>;
		};
	} = $props();

	const title = 'Abdelilah Ouaadouch - Fullstack Developer';
	const description =
		'Fullstack Developer specializing in Go (Golang), Rust, and TypeScript. Building fast, reliable systems with modern tech stacks.';
	const url = page.url.origin;
	const image = `${page.url.origin}/og/image/og.png`;

	const languages = ['Golang', 'Rust', 'Typescript', 'Javascript', 'Html', 'Css'];
	const frameworks = [
		'Next.js',
		'Tauri',
		'Hono.js',
		'Nuxt.js',
		'Gin',
		'Chi',
		'Actix',
		'Express.js',
		'Tailwindcss'
	];
	const tools = ['Docker', 'Git', 'Github', 'Postman'];
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta
		name="keywords"
		content="Go, Golang, Typescript, Rust, Fullstack Developer, Software Engineer, Web Development, API Development, Portfolio, Hire Developer, Backend Developer, Frontend Developer, Abdelilah Ouaadouch"
	/>
	<link rel="canonical" href={url} />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={url} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={image} />
	<meta property="og:site_name" content="Abdelilah Ouaadouch" />
	<meta property="og:locale" content="en" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content={url} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image} />
	<meta name="twitter:creator" content="@Abdelilah4dev" />

	<!-- JSON-LD Structured Data - Person -->
	{@html `<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "Person",
		"name": "Abdelilah Ouaadouch",
		"alternateName": "Ar7al",
		"jobTitle": "Fullstack Developer",
		"description": "Fullstack Developer specializing in Go (Golang), Rust, and TypeScript. Building fast, reliable systems with modern tech stacks.",
		"email": "mailto:abdelilah4dev@gmail.com",
		"url": "${url}",
		"image": "${image}",
		"sameAs": [
			"https://www.linkedin.com/in/ar7al/",
			"https://github.com/AbdelilahOu",
			"https://x.com/Abdelilah4dev"
		],
		"knowsAbout": ["Go", "Golang", "Typescript", "Rust", "Fullstack Development", "API Development", "Next.js", "Hono.js", "Gin", "Docker", "Tauri", "PostgreSQL", "MySQL"]
	}
	</script>`}

	<!-- JSON-LD Structured Data - WebSite -->
	{@html `<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "WebSite",
		"name": "Abdelilah Ouaadouch - Fullstack Developer Portfolio",
		"url": "${url}",
		"description": "Portfolio of Abdelilah Ouaadouch, a Fullstack Developer specializing in Go, Rust, and TypeScript.",
		"author": {
			"@type": "Person",
			"name": "Abdelilah Ouaadouch"
		}
	}
	</script>`}
</svelte:head>

<!-- Hero Section -->
<section class="space-y-4">
	<h1 class="font-display text-3xl font-semibold uppercase text-white md:text-4xl">
		Abdelilah Ouaadouch
		<span class="block text-xl font-normal normal-case text-gray-300 md:text-2xl">
			Fullstack Developer
		</span>
	</h1>
	<p class="text-base text-white md:text-lg">
		With expertise in Go (Golang), TypeScript, and Rust. 2+ years building performant APIs,
		full-stack apps, and desktop tools using Gin, Next.js, Tauri, and more.
	</p>
</section>

<!-- Contacts Section -->
<section class="space-y-4">
	<h2 class="text-xl font-bold text-white md:text-2xl">
		<span>$</span> ls -contacts
	</h2>
	<div class="corner-brackets group relative w-full bg-[#131313] text-white">
		{#if browser}
			<BackgroundGrid />
		{/if}
		<div class="relative z-10 space-y-2 p-5">
			<a
				href="mailto:abdelilah4dev@gmail.com"
				title="abdelilah4dev@gmail.com"
				class="flex justify-between border-white text-sm hover:border-l hover:pl-2 md:text-base"
				target="_blank"
				rel="noopener noreferrer"
			>
				<span class="underline underline-offset-2">abdelilah4dev@gmail.com</span>
				<span class="inline-block">Email</span>
			</a>
			<a
				href="https://www.linkedin.com/in/ar7al/"
				title="Abdelilah ouaadouch"
				class="flex justify-between border-white text-sm hover:border-l hover:pl-2 md:text-base"
				target="_blank"
				rel="noopener noreferrer"
			>
				<span class="underline underline-offset-2">Abdelilah ouaadouch</span>
				<span class="inline-block">Linkedin</span>
			</a>
			<a
				href="https://github.com/AbdelilahOu"
				title="@AbdelilahOu"
				class="flex justify-between border-white text-sm hover:border-l hover:pl-2 md:text-base"
				target="_blank"
				rel="noopener noreferrer"
			>
				<span class="underline underline-offset-2">@AbdelilahOu</span>
				<span class="inline-block">Github</span>
			</a>
			<a
				href="https://x.com/Abdelilah4dev"
				title="@Abdelilah4dev"
				class="flex justify-between border-white text-sm hover:border-l hover:pl-2 md:text-base"
				target="_blank"
				rel="noopener noreferrer"
			>
				<span class="underline underline-offset-2">@Abdelilah4dev</span>
				<span class="inline-block">Twitter/x</span>
			</a>
		</div>
	</div>
</section>

<!-- Skills Section -->
<section class="space-y-4">
	<h2 class="text-xl font-bold text-white md:text-2xl">
		<span>$</span> cat ./skills
	</h2>
	<div class="corner-brackets flex flex-wrap gap-5 bg-[#131313] p-5 text-sm text-white md:text-base">
		{#each languages as language}
			<span class="w-full flex-1 whitespace-nowrap border px-2 py-1 text-center text-white">
				- {language} -
			</span>
		{/each}
	</div>
	<div class="corner-brackets flex flex-wrap gap-5 bg-[#131313] p-5 text-sm text-white md:text-base">
		{#each frameworks as framework}
			<span class="w-full flex-1 whitespace-nowrap border px-2 py-1 text-center text-white">
				- {framework} -
			</span>
		{/each}
	</div>
	<div class="corner-brackets flex flex-wrap gap-5 bg-[#131313] p-5 text-sm text-white md:text-base">
		{#each tools as tool}
			<span class="w-full flex-1 whitespace-nowrap border px-2 py-1 text-center text-white">
				- {tool} -
			</span>
		{/each}
	</div>
</section>

<!-- GitHub Contributions Section -->
<section class="space-y-4">
	<h2 class="text-xl font-bold text-white md:text-2xl">
		<span>$</span> git log --stat
	</h2>
	<div class="corner-brackets bg-[#131313] p-5">
		{#await data.githubContributions}
			<p class="mb-4 text-white">
				Total Contributions in {new Date().getFullYear()}:
				<span class="font-semibold text-gray-400">...</span>
			</p>
			<div class="text-gray-400">Loading contributions...</div>
		{:then contributions}
			<p class="mb-4 text-white">
				Total Contributions in {new Date().getFullYear()}:
				<span class="font-semibold text-green-400">
					{contributions?.totalGH ?? 0}
				</span>
			</p>
			{#if contributions}
				<GithubGraph data={contributions} />
			{:else}
				<div class="text-gray-400">Unable to load contributions</div>
			{/if}
		{:catch}
			<p class="mb-4 text-white">
				Total Contributions in {new Date().getFullYear()}:
				<span class="font-semibold text-gray-400">0</span>
			</p>
			<div class="text-gray-400">Unable to load contributions</div>
		{/await}
	</div>
</section>

<!-- Featured Projects Section -->
<section class="space-y-4">
	<div class="flex items-center justify-between">
		<h2 class="text-xl font-bold text-white md:text-2xl">
			<span>$</span> ls ./projects
		</h2>
		<a href="/projects" class="text-sm text-gray-400 transition-colors hover:text-white">
			View all {"->"}
		</a>
	</div>
	<div class="space-y-4">
		{#each data.featuredProjects as project}
			<ProjectCard {project} />
		{/each}
	</div>
</section>

<!-- Latest Blog Posts Section -->
<section class="space-y-4">
	<div class="flex items-center justify-between">
		<h2 class="text-xl font-bold text-white md:text-2xl">
			<span>$</span> head ./latest-posts
		</h2>
		<a href="/blog" class="text-sm text-gray-400 transition-colors hover:text-white">
			View all {"->"}
		</a>
	</div>
	{#if data.latestPosts.length > 0}
		<div class="space-y-4">
			{#each data.latestPosts as post}
				<BlogCard {post} />
			{/each}
		</div>
	{:else}
		<div class="corner-brackets bg-[#131313] p-5 text-center">
			<p class="text-gray-400">No blog posts yet. Check back soon!</p>
		</div>
	{/if}
</section>

<!-- Footer -->
<footer
	class="font-display m-auto my-4 flex h-11 items-center justify-center text-center text-sm uppercase text-white md:text-md"
>
	made with
	<div class="tex-xs mx-2 grid size-12 grid-cols-2">
		<span>1</span>
		<span>0</span>
		<span>0</span>
		<span>1</span>
	</div>
	using
	<a
		href="https://svelte.dev"
		title="Svelte"
		target="_blank"
		class="mx-1"
		rel="noopener noreferrer"
	>
		Svelte
	</a>
</footer>
