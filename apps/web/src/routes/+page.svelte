<script lang="ts">
	import { browser } from '$app/environment';
	import { orpc } from '$lib/orpc';
	import { createQuery } from '@tanstack/svelte-query';
	import BackgroundGrid from '../components/BackgroundGrid.svelte';
	import ProjectCard from '../components/ProjectCard.svelte';
	import GithubGraph from '../components/GithubGraph.svelte';

	const githubContributions = createQuery(orpc.githubContributions.queryOptions());

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
			title: 'DBMcp - Database MCP Server',
			description:
				'A database MCP server to connect to any PostgreSQL and MySQL connection and run queries. Explore databases instead of using a GUI, giving AI extra context to test and run queries.',
			tech: ['Golang', 'MCP', 'PostgreSQL', 'MySQL'],
			web: '',
			github: 'https://github.com/AbdelilahOu/DBMcp'
		},
		{
			title: 'Mahalli',
			description:
				'A web app that makes running your business easier. Keep track of inventory, manage client relationships, and create professional quotes and orders all in one place.',
			tech: ['Nuxt3', 'Typescript', 'Tailwindcss', 'Golang', 'PostgreSQL', 'Gin', 'SQLC', 'Clerk'],
			web: 'https://trymahalli.com',
			github: ''
		},
		{
			title: 'Cobracase E-commerce',
			description:
				"An online store where you can design your own unique phone cases. Upload photos, add text, and create cases that tell your story.",
			tech: ['NextJs', 'Typescript', 'Tailwindcss', 'DrizzleOrm', 'PostgreSQL', 'Stripe', 'Kind'],
			web: 'https://case-ecommerce.vercel.app/',
			github: 'https://github.com/AbdelilahOu/Case-ecommerce'
		}
	];
</script>

<div class="min-h-screen w-screen bg-[#0d0d0d] px-4 py-8">
	<div class="m-auto w-full max-w-3xl space-y-8">
		<!-- Hero Section -->
		<section class="space-y-4">
			<h1 class="font-display text-3xl font-semibold uppercase text-white md:text-4xl">
				Abdelilah Ouaadouch
			</h1>
			<p class="text-base text-white md:text-lg">
				Backend Developer specializing in Go (Golang) and Typescript
				<br />
				Backend developer with 2+ years of experience building performant and reliable systems. My primary
				focus is backend development with Go (Gin) and Typescript, complemented by experience creating
				frontends with Next.js.
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
