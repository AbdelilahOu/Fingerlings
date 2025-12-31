<script lang="ts">
	import { browser } from '$app/environment';
	import { orpc } from '$lib/orpc';
	import { createQuery } from '@tanstack/svelte-query';
	import BackgroundGrid from '../components/BackgroundGrid.svelte';
	import ProjectCard from '../components/ProjectCard.svelte';
	import GithubGraph from '../components/GithubGraph.svelte';

	const githubContributions = createQuery(orpc.githubContributions.queryOptions({
     	retry: false,
     	refetchOnWindowFocus: false,
	}));

	const title = 'Abdelilah Ouaadouch - Fullstack Developer';
	const description = 'Fullstack Developer specializing in Go (Golang), Rust, and TypeScript. Building fast, reliable systems with modern tech stacks.';
	const url = 'https://ar7al.com';
	const image = '/og.png';

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

	const projects = [
      {
        title: 'DBMcp',
        description:
          'Golang MCP server for secure PostgreSQL/MySQL connections. Run queries and explore databases programmatically — great for AI-driven testing without a GUI.',
        tech: ['Golang', 'MCP', 'PostgreSQL', 'MySQL'],
        web: '',
        github: 'https://github.com/AbdelilahOu/DBMcp'
      },
      {
        title: 'Mahalli',
        description:
          'Tauri desktop app for small businesses. Manages inventory, customers, quotes, and orders using Nuxt 3, TypeScript, Rust, and SQLite.',
        tech: ['Nuxt 3', 'TypeScript', 'Tailwind CSS', 'Tauri', 'SQLite', 'Rust'],
        web: 'https://mahalli-web.pages.dev/',
        github: 'https://github.com/AbdelilahOu/Mahalli'
      },
      {
        title: 'Cobracase',
        description:
          'Custom phone case e-commerce store. Users upload images, add text, preview, and buy. Built with Next.js, PostgreSQL, Drizzle ORM, and Stripe.',
        tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Drizzle ORM', 'PostgreSQL', 'Stripe', 'Kind'],
        web: 'https://case-ecommerce.vercel.app/',
        github: 'https://github.com/AbdelilahOu/Case-ecommerce'
      }
    ];
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="keywords" content="Go, Golang, Typescript, Rust, Fullstack Developer, Software Engineer, Web Development, API Development" />
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

	<!-- JSON-LD Structured Data -->
	{@html `<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "Person",
		"name": "Abdelilah Ouaadouch",
		"jobTitle": "Fullstack Developer",
		"email": "mailto:abdelilah4dev@gmail.com",
		"url": "${url}",
		"sameAs": [
			"https://www.linkedin.com/in/ar7al/",
			"https://github.com/AbdelilahOu",
			"https://x.com/Abdelilah4dev"
		],
		"knowsAbout": ["Go", "Golang", "Typescript", "Rust", "Fullstack Development", "API Development", "Next.js", "Hono.js", "Gin", "Docker"]
	}
	</script>`}
</svelte:head>

<div class="min-h-screen w-screen bg-[#0d0d0d] px-4 py-8">
	<div class="m-auto w-full max-w-3xl space-y-8">
		<!-- Hero Section -->
		<section class="space-y-4">
			<h1 class="font-display text-3xl font-semibold uppercase text-white md:text-4xl">
				Abdelilah Ouaadouch
			</h1>
			<p class="text-base text-white md:text-lg">
			Fullstack Developer
		    <br/>
			With expertise in Go (Golang), TypeScript, and Rust. 2+ years building performant APIs, full-stack apps, and desktop tools using Gin, Next.js, Tauri, and more.
			</p>
		</section>

		<!-- Contacts Section -->
		<section class="space-y-4">
			<h2 class="text-2xl font-bold text-white">
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
						class="flex justify-between border-white text-base hover:border-l hover:pl-2"
						target="_blank"
						rel="noopener noreferrer"
					>
						<span class="underline underline-offset-2">abdelilah4dev@gmail.com</span>
						<span class="inline-block">Email</span>
					</a>
					<a
						href="https://www.linkedin.com/in/ar7al/"
						title="Abdelilah ouaadouch"
						class="flex justify-between border-white text-base hover:border-l hover:pl-2"
						target="_blank"
						rel="noopener noreferrer"
					>
						<span class="underline underline-offset-2">Abdelilah ouaadouch</span>
						<span class="inline-block">Linkedin</span>
					</a>
					<a
						href="https://github.com/AbdelilahOu"
						title="@AbdelilahOu"
						class="flex justify-between border-white text-base hover:border-l hover:pl-2"
						target="_blank"
						rel="noopener noreferrer"
					>
						<span class="underline underline-offset-2">@AbdelilahOu</span>
						<span class="inline-block">Github</span>
					</a>
					<a
						href="https://x.com/Abdelilah4dev"
						title="@Abdelilah4dev"
						class="flex justify-between border-white text-base hover:border-l hover:pl-2"
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
			<h2 class="text-2xl font-bold text-white">
				<span>$</span> cat ./skills
			</h2>
			<div
				class="corner-brackets flex flex-wrap gap-5 bg-[#131313] p-5 text-base text-white"
			>
				{#each languages as language}
					<span class="w-full flex-1 whitespace-nowrap border px-2 py-1 text-center text-white">
						- {language} -
					</span>
				{/each}
			</div>
			<div
				class="corner-brackets flex flex-wrap gap-5 bg-[#131313] p-5 text-base text-white"
			>
				{#each frameworks as framework}
					<span class="w-full flex-1 whitespace-nowrap border px-2 py-1 text-center text-white">
						- {framework} -
					</span>
				{/each}
			</div>
			<div
				class="corner-brackets flex flex-wrap gap-5 bg-[#131313] p-5 text-base text-white"
			>
				{#each tools as tool}
					<span class="w-full flex-1 whitespace-nowrap border px-2 py-1 text-center text-white">
						- {tool} -
					</span>
				{/each}
			</div>
		</section>

		<!-- GitHub Contributions Section -->
		<section class="space-y-4">
			<h2 class="text-2xl font-bold text-white">
				<span>$</span> git log --stat
			</h2>
			<div class="corner-brackets bg-[#131313] p-5">
				<p class="mb-4 text-white">
					Total Contributions in {new Date().getFullYear()}:
					<span class="font-semibold text-green-400">
						{$githubContributions.data?.totalGH ?? 0}
					</span>
				</p>
				{#if $githubContributions.data}
					<GithubGraph data={$githubContributions.data} />
				{:else if $githubContributions.isLoading}
					<div class="text-gray-400">Loading contributions...</div>
				{:else}
					<div class="text-gray-400">Unable to load contributions</div>
				{/if}
			</div>
		</section>

		<!-- Projects Section -->
		<section class="space-y-4">
			<h2 class="text-2xl font-bold text-white">
				<span>$</span> ls ./projects
			</h2>
			<div class="relative grid gap-5">
				{#each projects as project}
					<ProjectCard {project} />
				{/each}
			</div>
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
			<a href="https://svelte.dev" title="Svelte" target="_blank" class="mx-1" rel="noopener noreferrer">
				Svelte
			</a>
		</footer>
	</div>
</div>
